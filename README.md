# Axiom — Get genuinely good at math

A single-file, offline-first **math-learning PWA**. Day-by-day courses, a
library of articles/methods/strategies/glossary, and adaptive practice with a
real answer-checker that accepts equivalent forms (`2x == x+x`, `1/2 == 0.5`,
multi-root sets, systems). Built to actually make you better at math — nothing else.

By Alex Shen · ∴

**Live app:** https://alexshen1227-spec.github.io/Math/

## Install it on your phone

It's a Progressive Web App, so it installs like a native app — no App Store:

1. Open **https://alexshen1227-spec.github.io/Math/** in your phone's browser.
2. **iPhone (Safari):** tap the **Share** button → **Add to Home Screen** → **Add**.
3. **Android (Chrome):** tap the **⋮** menu → **Install app** (or **Add to Home screen**).

Launch it from the home-screen icon. After the first visit it works **fully
offline** (everything — math fonts and all — is cached), and your progress is
saved locally on the device.

## What's inside (v1.5)

- **Adaptive engine** — a per-skill learner model (Elo ability + Bayesian
  Knowledge Tracing mastery + FSRS-5 spaced repetition) that keeps each problem
  in your productive-struggle zone (~85% success) and schedules reviews to fight
  forgetting.
- **Customizable** — pick a **track** (Foundations, Algebra, Geometry, Calculus,
  Reasoning, or Everything) and a level, or take a short **adaptive placement quiz**.
- **Tracks your growth** — strengths vs. weaknesses ("can / can't do yet"), a
  skill-mastery map, accuracy sparklines, and change-over-time deltas.
- **Smart practice** — sessions that weight your weak spots, due reviews, and
  interleaving automatically.
- XP / levels / streaks / achievements, daily goal & challenge, and a full
  spaced-review system.

## Tech

Vanilla JS, zero runtime dependencies, zero CDNs. KaTeX and the webfonts are
self-hosted under `assets/` and precached by the service worker. Strict
same-origin CSP. Works offline from a cold first launch.

## Repo layout

| Path | What it is |
|------|------------|
| `index.html` | The whole app (engine + UI + content, inlined). **Generated** for content. |
| `manifest.json`, `sw.js`, `icons/`, `assets/` | PWA shell: manifest, service worker, icons, vendored KaTeX + fonts. |
| `build_content/*.js` | Source of the content corpus (courses, articles, methods, strategies, glossary, MCQ banks). |
| `scripts/` | Build/verify tooling (`assemble.js`, `validate.js`, `check-built.js`, …). |
| `.github/workflows/deploy.yml` | Auto-deploys to GitHub Pages on every push to `main`. |

### Building / editing content

Content lives in `build_content/` and is inlined into `index.html`:

```sh
node scripts/assemble.js     # inline content into index.html
node scripts/validate.js     # schema + cross-ref checks + generator stress test
node scripts/check-built.js  # boot the built file under a DOM shim
```

Bump `CACHE_VERSION` in `sw.js` on every meaningful change so installed copies
see the update banner.
