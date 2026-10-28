---
name: verify-app
description: Launch the portfolio from a clean state, drive it in a real browser and capture evidence that a change works. Use whenever a ticket asks to "verify it works", prove a UI change, take before/after screenshots, or check the dev server.
---

# verify-app — the portfolio

Two static routes (`/` and `/system`) served by Next.js on **port 3009**. No backend, no env vars, no auth — if the page renders and the
sections animate in, the app is up.

## 1. Launch from a clean state

```bash
sh .fredrin/setup.sh                       # bun install --frozen-lockfile (idempotent)
lsof -ti tcp:3009 | xargs kill 2>/dev/null # free the port if a stale server holds it
rm -rf .next                               # no stale build output
mkdir -p .fredrin/tmp
bun run dev > .fredrin/tmp/dev.log 2>&1 &  # run in the background; note the PID for cleanup
```

For a production-like check use `bun run build && bun run start > .fredrin/tmp/start.log 2>&1 &` instead (same port).

**Ready means usable**, not "port open". Poll until the page HTML carries real content AND its stylesheet loads:

```bash
for i in $(seq 1 60); do
  html=$(curl -fsS http://localhost:3009/ 2>/dev/null) &&
  echo "$html" | grep -q 'And the systems' &&
  css=$(echo "$html" | grep -o '/_next/static/[^"]*\.css' | head -1) &&
  [ -n "$css" ] && curl -fsS "http://localhost:3009$css" | grep -q -- '--background' &&
  { echo READY; break; }
  sleep 1
done
```

## 2. Doctor (when it is not ready)

| Symptom | Check / fix |
|---------|-------------|
| `EADDRINUSE :3009` in the log | `lsof -ti tcp:3009 \| xargs kill`, relaunch |
| `Cannot find module` | `sh .fredrin/setup.sh` (dependencies missing) |
| Page renders unstyled | the CSS chunk 404s or lacks `--background`: check `src/app/globals.css` compiles (`bun run build` shows the error) |
| Wrong fonts (system serif) | the Google Fonts `<link>` in `src/app/layout.tsx` is blocked offline — layout still works |
| Turbopack picks the wrong root | `next.config.ts` pins `turbopack.root`; keep it |
| Anything else | `tail -50 .fredrin/tmp/dev.log`, then `bun run typecheck` |

## 3. Drive it like a visitor

Use Fredrin's browser (`fredrin browser …`; with a ticket bound it is the Live pane). Viewport ~1280×870.

1. `navigate http://localhost:3009/` — light paper by default. Header: DANI ESTEVEZ / SOFTWARE ENGINEER left, Story /
   Work / Contact + scheme toggle right (links visible at every width). Hero: "I build software. / And the systems /
   behind it." (three lines on desktop), the "18 years building software…" summary, Explore the story ↓, THAILAND ·
   GMT+7, and the line-drawn planes diagram on the right (under the text below `lg`), floating once by a few px.
2. Click nav **Story** (or `navigate http://localhost:3009/#story`) — chapter 01: THE FOUNDATIONS / 2008–2021 timeline
   (Zennio 2008, Amadeus 2010, Freelance 2013, Conferize 2016, Sherpany 2020; below `md` it scrolls inside itself, the
   page never does, and Tab + ArrowRight scrolls it), then Elixir Games (text left, launcher schematic right) and Game7
   (quests schematic left, text right). Every preview is labelled "Illustrative schematic".
3. Scroll on: **02 The AI era** (three dated phases with drawings), **03 Faster was only part of it** (pull quote,
   branching lines into the panel), **04 Vinaya** (`#vinaya`, dark panel): Brief → Developer → Code review + Security
   review (dashed "In parallel" group) → Checks → Accepted ("Not a deploy"), and the Revise arrow from the review group
   back to Developer; then "What needed my judgment?" labelled "Illustrative example · not a recorded run", the Atta
   Engine strip and "Then I used it to build."
4. Nav **Work** (`#work`) — chapter 05: AttaLabs, Herald, Vinaya Portal / Studio, Vāda with their links, then the
   Onchain Rewind demo exhibit (badge, "About this demo" expands, Try the demo / Inspect the build history).
5. Nav **Contact** (`#contact`) — chapter 06 with "Let's build something together" (mailto), then the footer links and
   "Built with Fredrin."
6. **Color scheme**: click the toggle → `<html data-theme>` flips light → dark, `document.cookie` has
   `atta-color-scheme=dark`; `reload` → still dark (no light flash). Click again to restore light.
   Check with `eval "document.documentElement.dataset.theme + ' | ' + document.cookie"`.
7. `navigate http://localhost:3009/system` — colour tokens, type scale, layout, motion (float vs reduced-motion
   diagrams), editorial components on paper AND panel, story elements (timeline, chapter nodes, panel with workflow
   steps + Revise arrow), interaction states, then the real header + hero full width. Click a workflow step → it
   becomes selected (copper border + marker) and the "Selected:" line updates.
8. `console` — expect no errors (hydration warnings included).

**Sized screenshots and reduced motion.** The Fredrin browser has no viewport or media emulation; for 1440 / 390 widths
and `prefers-reduced-motion: reduce`, use a Playwright script (headless chromium, `viewport`, `reducedMotion: 'reduce'`)
from a scratch directory, and check `document.documentElement.scrollWidth === clientWidth` for overflow.

Scroll-triggered sections only appear once scrolled into view: scroll with `eval "window.scrollTo(0, document.querySelector('#vinaya').offsetTop)"` and wait ~1s before a screenshot.

## 4. Evidence

- `screenshot` each of: hero, chapters 01–06, light-mode hero. Save under `.fredrin/tmp/`.
- Upload for review: `./.fredrin/fredrin ticket upload <png> --kind after --pair <hero|chapter-01|…|page-desktop|page-mobile>` (and
  `--kind before` for the pre-change shot of the same screen).
- Record what you did, what state it produced (attribute/cookie values, console output) — not just "looks fine".

## 5. Cleanup

```bash
kill <dev-server-PID> 2>/dev/null || lsof -ti tcp:3009 | xargs kill 2>/dev/null
```

Leave `.fredrin/tmp/` (git-ignored) as is; nothing else is written.

## Feature map

| Feature | Route / anchor | Code |
|---------|----------------|------|
| Scroll progress bar, chapter order | `/` | `src/components/home/PortfolioPage.tsx` |
| Site header | `/`, `/system` | `src/components/home/SiteHeader.tsx` |
| Hero (headline, summary, story link, diagram) | `/` | `src/components/home/Hero.tsx`, `src/components/home/HeroDiagram.tsx` |
| Design system page | `/system` | `src/app/system/page.tsx`, `src/components/system/` |
| Editorial primitives | `/system` | `src/components/ui/*` |
| Chapter wrapper | — | `src/components/home/chapters/Chapter.tsx` |
| 01 Built with people + schematics | `/#story` | `src/components/home/chapters/BuiltWithPeople.tsx`, `LauncherSchematic.tsx`, `QuestsSchematic.tsx` |
| 02 The AI era | `/#ai-era` | `src/components/home/chapters/AiEra.tsx` |
| 03 Faster was only part of it | `/#ownership` | `src/components/home/chapters/Ownership.tsx` |
| 04 Vinaya (panel, static loop) | `/#vinaya` | `src/components/home/chapters/Vinaya.tsx`, `VinayaWorkflow.tsx` |
| 05 Work + Onchain Rewind demo | `/#work` | `src/components/home/chapters/Work.tsx`, `WorkSchematic.tsx` |
| 06 Contact, footer | `/#contact` | `src/components/home/chapters/Contact.tsx`, `src/components/home/SiteFooter.tsx` |
| Light/dark toggle + cookie | header | `src/components/ui/color-scheme-toggle.tsx`, `src/lib/color-scheme.ts`, `src/app/layout.tsx` |
| Copy | — | `src/content/portfolio.ts` |
| Theme tokens | — | `src/app/globals.css` |
