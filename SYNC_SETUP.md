# Cloud Sync setup (Supabase)

Axiom can keep your progress in sync across phone + desktop using a **free**
Supabase project. Until you do the steps below, sync stays dormant and the app
works exactly as before (100% local, no accounts).

Total time: ~5 minutes. You do this **once**.

---

## 1. Create a free Supabase project

1. Go to <https://supabase.com> → sign up (free tier is plenty).
2. **New project** → give it a name (e.g. `axiom`), pick a region near you,
   set a database password (you won't need it again), and create it.
3. Wait ~1 minute for it to provision.

## 2. Create the table + security rules

Open **SQL Editor** (left sidebar) → **New query** → paste this → **Run**:

```sql
create table if not exists public.axiom_state (
  user_id    uuid primary key references auth.users(id) on delete cascade,
  data       jsonb       not null,
  updated_at timestamptz not null default now()
);

alter table public.axiom_state enable row level security;

create policy "read own row"   on public.axiom_state for select using      (auth.uid() = user_id);
create policy "insert own row" on public.axiom_state for insert with check (auth.uid() = user_id);
create policy "update own row" on public.axiom_state for update using      (auth.uid() = user_id) with check (auth.uid() = user_id);

-- (optional) instant cross-device sync: stream row changes over Realtime.
-- Without this it still syncs, just on a ~20s poll / when you re-open the app.
alter publication supabase_realtime add table public.axiom_state;
```

Row-Level Security (RLS) is what makes this safe: even though the anon key is
public, **only the signed-in owner can read or write their own row**. Realtime
respects RLS too, so you only ever receive your own row's changes.

## 3. Turn off email confirmation (instant sign-up, no email needed)

Axiom signs in with **email + password**. That keeps the session *inside* the
installed app on every device — magic links can't (on iOS a link signs you into
Safari, not your installed PWA). Password auth also sidesteps the SMTP gate that
locks email-template editing on newer projects.

1. **Authentication → Sign In / Providers → Email** (older UIs: **Authentication
   → Providers → Email**).
2. Make sure **Email** is enabled.
3. Turn **OFF** "Confirm email" (a.k.a. "Enable email confirmations").
4. Save.

No templates, no SMTP. You'll choose your own email + password inside the app.

> Leaving "Confirm email" ON also works, but then creating an account sends a
> confirmation link you must click first — extra friction with no benefit here.

## 4. (Optional) Allow your live app URL

Not required for password sign-in (there's no redirect). You can skip this. If
you ever add magic-link/OAuth later, set **Authentication → URL Configuration →
Site URL** to `https://alexshen1227-spec.github.io/Math/`.

## 5. Paste your two keys into the app

**Project Settings → API**. Copy:

- **Project URL** → looks like `https://abcdwxyz.supabase.co`
- **anon / public** key (also called the *publishable* key) → a long string

Open `index.html`, find the block near the top of the app script (search for
`CLOUD SYNC CONFIG`) and fill them in:

```js
var SUPABASE_URL      = 'https://abcdwxyz.supabase.co';
var SUPABASE_ANON_KEY = 'eyJhbGciOi...your-anon-key...';
```

> ⚠️ Use the **anon / public** key only. Never paste the `service_role` key into
> the app — that one bypasses RLS and must stay secret.

## 6. Ship it

```bash
git add -A
git commit -m "Enable cloud sync"
git push
```

GitHub Pages redeploys in ~1 minute. The service-worker cache version was bumped
to `axiom-v1.6.0`, so devices will pick up the new build and show an
"Update available" banner.

---

## Using it

1. Open Axiom → **Settings → Sync across devices**.
2. First device: enter an email + a password (6+ chars) → **Create account**.
3. Every other device: same screen, **same email + password** → **Sign in**.
   Done — both stay in sync.

- Progress **pulls** on launch, when you re-focus the app, and on reconnect.
- Progress **pushes** automatically a couple seconds after any change.
- Offline still works; it syncs when you're back online.
- You stay signed in across restarts; **Sign out** is in the same panel.

## How conflicts are handled

Sync is **whole-document, last-write-wins** by timestamp (`state.updatedAt`).
For a single person across devices this is what you want. The one caveat: if you
study **offline on two devices at the same time**, whichever device syncs the
**later** edit wins, and the other device's unsynced changes are replaced on its
next pull. Use **Export progress (JSON)** in Settings any time you want a manual
backup.

## Costs / limits

Free tier: 500 MB database, 50K monthly active users. Your state row is a few KB
and there are no auth emails in the password flow, so you won't hit any limit.

## Security note

The `anon` key in the app is public by design — **Row-Level Security** (Step 2)
is what protects your data: every policy is scoped to `auth.uid() = user_id`, so
a signed-in account can only ever read and write its own row. With "Confirm
email" off, anyone *could* create an account, but they'd only see their own empty
data, never yours. Never put the `service_role` / secret key in the app.
