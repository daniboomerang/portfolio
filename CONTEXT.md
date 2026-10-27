# CONTEXT.md — vocabulary

- **Portfolio page** — the single route `/`, rendered by `PortfolioPage`: fixed header + nav, scroll progress bar, then the sections below, then the footer.
- **Hero** — first screen: role · location eyebrow, the name (word-by-word `TextReveal`), the thesis line, the external link buttons, the bouncing scroll arrow.
- **Story** (`#story`) — three narrative paragraphs plus the **stats** row (animated counters).
- **Career** (`#career`) — the **career timeline**: an ordered list of roles with a vertical **thread** that fills as you scroll, a dot per entry, and the education entry last.
- **Products** (`#products`) — the **product grid**: one card per Atta Labs product, linking out.
- **Content** — the typed data in `src/content/portfolio.ts` (`profile`, `links`, `story`, `stats`, `career`, `education`, `products`). The only place copy lives.
- **Reveal** — the fade-and-lift-on-scroll wrapper every section uses.
- **Color scheme** — `light` | `dark` on `<html data-theme>`, stored in the `atta-color-scheme` cookie; dark is the default.
- **Tokens** — the semantic CSS variables in `globals.css` (`--background`, `--foreground`, `--primary`, `--muted-foreground`, `--border`…), exposed to Tailwind as `bg-*` / `text-*` / `border-*` utilities.
- **Vinaya** — one of the products in the grid (Atta Labs' codebase harness); later redesign tickets give it a dedicated interaction.
