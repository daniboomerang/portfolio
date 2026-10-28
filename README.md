# Portfolio

Daniel Estevez's one-page portfolio — the hero and six chapters: the career, the AI transition, Vinaya, and the work built through it — plus a `/system` design-system page.

Next.js 16 (App Router, static) + Tailwind v4 + TypeScript (strict) + `motion`, linted and formatted with Biome, managed with bun.

## Commands

```bash
bun install          # or: sh .fredrin/setup.sh
bun run dev          # http://localhost:3009
bun run build        # production build (what Vercel runs)
bun run start        # serve the production build on :3009
bun run typecheck    # tsc --noEmit
bun run lint         # biome check .
bun run format       # biome check --write .
```

There is no test suite yet; `typecheck`, `lint` and `build` are the gates.

## Where things live

| Path | What |
|------|------|
| `src/content/portfolio.ts` | Every fact on the page — profile, hero, chapters 01–06, footer |
| `src/components/home/` | The page (`PortfolioPage`, `SiteHeader`, `Hero`, `SiteFooter`, `Reveal`) and `chapters/` (one component per chapter, plus the labelled schematics) |
| `src/components/ui/` | shadcn-style primitives vendored from the AttaLabs monorepo's animate UI library |
| `src/app/globals.css` | Theme tokens (light + dark) as semantic CSS variables, Tailwind v4 `@theme` mapping |
| `src/lib/` | `cn()` and the color-scheme cookie contract |

## Deploy

Vercel, framework preset Next.js. `vercel.json` pins `bun install --frozen-lockfile` and `bun run build`. No environment variables or secrets are required.

## History

Ported from `apps/portfolio/web` in [atta-labs/attalabs#1157](https://github.com/atta-labs/attalabs/pull/1157) (commits `4e12b9dca`, `f1fc32fe4`). See `AGENTS.md` for what was vendored and dropped.
