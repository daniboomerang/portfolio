# AGENTS.md — conventions for agents working on this repo

A public, read-only, single-page marketing site, plus a `/system` design-system page. No auth, no database, no CMS, no API routes.

## Stack

Next.js 16 App Router (the page prerenders as static), Tailwind v4, TypeScript strict, `motion/react`, `lucide-react`, Biome, bun. Dev server port: **3009**.

## Rules

- **Copy lives in `src/content/portfolio.ts`, and only real, already-public facts go there** — Daniel's GitHub profile README, CV and the owner's approved design-brief copy. No invented claims; no private CV fields (phone, date of birth).
- **Theme is semantic CSS variables in `src/app/globals.css`.** Use token classes (`bg-background`, `text-muted-foreground`, `border-rule`, `bg-copper`, `text-display`, `px-gutter`, `max-w-content`, `ease-editorial`, `duration-(--duration-base)`…). No hardcoded palette colors (`bg-zinc-900`, hex, rgb), px font sizes, ms durations or inline `style` in components: add a token first. Copper fails AA for small text on paper, so it is for lines, nodes and large type only.
- **The dark Vinaya panel** is `<Panel>` (`data-surface='panel'`), which re-declares the palette for its subtree; components inside keep using the same token classes. A scope that overrides a brand role must also re-declare the aliases built on it (`--border`, `--ring`, `--success`).
- **Primitives come from `@/components/ui`** (the barrel). Add a primitive there, shadcn-style, before using it in a section, and show it on `/system` (`src/components/system/SystemPage.tsx`) in every state, on paper and on the panel. `cn()` knows the custom type scale; add a new `text-*` size to `src/lib/utils.ts` too, or tailwind-merge drops it.
- **Icons: `lucide-react` only.**
- **Animation uses `motion/react`.** Reduced motion is handled once by `MotionProvider` (`<MotionConfig reducedMotion='user'>`) in the root layout — don't add per-component checks. Durations and easing come from `src/lib/motion.ts`, which mirrors the CSS motion tokens. Text must render visible from the server (no SSR `opacity: 0` on hero copy).
- **Color scheme**: `data-theme` on `<html>`, persisted in the `atta-color-scheme` cookie, light by default (the redesign's paper look). The inline script in `src/app/layout.tsx` corrects it before first paint; `ColorSchemeToggle` flips it. Keep `src/lib/color-scheme.ts` as the single contract.
- Adding a product to the grid: append to `products` in `src/content/portfolio.ts`.
- Code style is whatever `bun run lint` (Biome) says: single quotes, no semicolons, 2-space indent, 120 columns.

## Gates

`bun run typecheck`, `bun run lint`, `bun run build` must all pass. No test suite exists yet. Prove UI changes in a real browser with the `verify-app` skill (`.claude/skills/verify-app/SKILL.md`).

## Origin of the code

Ported from the AttaLabs monorepo (`apps/portfolio/web`, PR atta-labs/attalabs#1157, commits `4e12b9dca`, `f1fc32fe4`).

Vendored from the monorepo's UI package (animate library) into `src/components/ui`: `Badge`, `Button` (+ motion `Slot`), `Card`/`CardContent`, `Heading`, `Text`, `Separator`, `TextReveal`, `Toggle` (animate-ui toggle, its three primitives folded into one), `ColorSchemeToggle`; plus `cn()` in `src/lib/utils.ts`. `framer-motion` imports became `motion/react` (same library).

Dropped:
- **CMS / Sanity** (`getProductCms('portfolio')`): it only supplied the theme (colors, IBM Plex fonts, radius, shadows) and an empty branding record. Its values are frozen into `globals.css`, so the page needs no network call, no project id and renders statically.
- **Runtime UI-library switching** (`LibraryProvider`, `generateUIIndex`): the portfolio was pinned to the animate library; only that library's components were vendored.
- **`NextWebShell` / `PreviewThemeListener` / Clerk wiring**: the shell's job (fonts, theme, scheme) is done directly by `src/app/layout.tsx`; the preview listener only served Sanity Studio live preview.
- **`@atta/instrumentation`**: a dev-only filter that silenced browser-extension errors.

## Fredrin

Tickets run in their own worktrees; `.fredrin/setup.sh` bootstraps one (`bun install`). See `CONTEXT.md` for vocabulary.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
