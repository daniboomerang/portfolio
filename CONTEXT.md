# CONTEXT.md — vocabulary

- **Portfolio page** — the route `/`, rendered by `PortfolioPage`: fixed **site header**, scroll progress bar, then the sections below, then the footer (`#contact`).
- **Site header** — `SiteHeader`: DANI ESTEVEZ / SOFTWARE ENGINEER, the Story · Work · Contact links and the scheme toggle.
- **/system** — the design-system page: every token and editorial primitive on fixture data, on paper and on the panel, plus the real header and hero.
- **Hero** — first screen: the approved three-line headline, the “18 years…” summary, the Explore the story link, the location (Thailand · GMT+7) and the **hero diagram** (sparse SVG planes, connectors, copper nodes; under the text on narrow screens).
- **Story** (`#story`) — three narrative paragraphs plus the **stats** row (animated counters).
- **Career** (`#career`) — the **career timeline**: an ordered list of roles with a vertical **thread** that fills as you scroll, a dot per entry, and the education entry last.
- **Products** (`#products`) — the **product grid**: one card per Atta Labs product, linking out.
- **Content** — the typed data in `src/content/portfolio.ts` (`profile`, `nav`, `hero`, `links`, `story`, `stats`, `career`, `education`, `products`). The only place page copy lives; `/system` fixtures live in `src/components/system/fixtures.ts`.
- **Reveal** — the fade-and-lift-on-scroll wrapper every section uses.
- **Color scheme** — `light` | `dark` on `<html data-theme>`, stored in the `atta-color-scheme` cookie; light is the default.
- **Tokens** — the semantic CSS variables in `globals.css`: colours (`--background` paper, `--foreground` ink, `--muted-foreground`, `--copper`, `--moss`, `--rule`, `--panel`…), type roles and scale (`font-display`, `text-display` … `text-label`), layout (`max-w-content`, `px-gutter`, `py-section`) and motion (`--duration-*`, `ease-editorial`).
- **Panel** — the deep charcoal Vinaya surface (`<Panel>`, `data-surface='panel'`), which re-declares the palette for everything inside it.
- **Editorial primitives** — `ChapterHeader`, `ChapterNode`, `PullQuote`, `MonoLabel`, `TextLink`, `ExhibitFrame`, `Timeline`/`TimelineStop`, `Panel`, `WorkflowStep`, `RevisionArrow`, `ExpandableDetail` in `@/components/ui`.
- **Vinaya** — one of the products in the grid (Atta Labs' codebase harness); later redesign tickets give it a dedicated interaction.
