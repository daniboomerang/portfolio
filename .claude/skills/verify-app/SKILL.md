---
name: verify-app
description: Launch the portfolio from a clean state, drive it in a real browser and capture evidence that a change works. Use whenever a ticket asks to "verify it works", prove a UI change, take before/after screenshots, or check the dev server.
---

# verify-app — the portfolio

One static route (`/`) served by Next.js on **port 3009**. No backend, no env vars, no auth — if the page renders and the
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
  echo "$html" | grep -q 'Fifteen years of engineering judgment' &&
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

1. `navigate http://localhost:3009/` — hero: eyebrow "AI SYSTEMS ENGINEER · THAILAND · REMOTE", name reveals word by
   word, thesis line, LinkedIn / GitHub / CV + Audit buttons, bouncing arrow. Header: name left, Story / Career /
   Products + sun toggle right.
2. Click nav **Story** (or `navigate http://localhost:3009/#story`) — three paragraphs fade in; counters run to 15+ / 4+ / 3.
3. **Career** (`#career`) — timeline thread fills as you scroll; each entry's dot springs in; education last.
4. **Products** (`#products`) — four cards (Vāda, Herald, Vinaya, Atta Labs) that lift on hover and link out.
5. Scroll to the bottom — footer "Let's build something that holds." with the three links.
6. **Color scheme**: click the toggle → `<html data-theme>` flips dark → light, `document.cookie` has
   `atta-color-scheme=light`; `reload` → still light (no dark flash). Click again to restore dark.
   Check with `eval "document.documentElement.dataset.theme + ' | ' + document.cookie"`.
7. `console` — expect no errors (hydration warnings included).

Scroll-triggered sections only appear once scrolled into view: scroll with `eval "window.scrollTo(0, document.querySelector('#career').offsetTop)"` and wait ~1s before a screenshot.

## 4. Evidence

- `screenshot` each of: hero, story, career, products, light-mode hero. Save under `.fredrin/tmp/`.
- Upload for review: `./.fredrin/fredrin ticket upload <png> --kind after --pair <hero|story|career|products>` (and
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
| Header nav, scroll progress bar, footer | `/` | `src/components/home/PortfolioPage.tsx` |
| Hero (name reveal, links, scroll arrow) | `/` | `src/components/home/Hero.tsx`, `src/components/ui/text-reveal.tsx` |
| Story + animated stats | `/#story` | `src/components/home/Story.tsx` |
| Career timeline + scroll thread | `/#career` | `src/components/home/CareerTimeline.tsx` |
| Product grid | `/#products` | `src/components/home/ProductGrid.tsx` |
| Light/dark toggle + cookie | header | `src/components/ui/color-scheme-toggle.tsx`, `src/lib/color-scheme.ts`, `src/app/layout.tsx` |
| Copy | — | `src/content/portfolio.ts` |
| Theme tokens | — | `src/app/globals.css` |
