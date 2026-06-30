# Vestaform

Marketing site for **Vestaform** — a technology-enabled workplace, hospitality and commercial space partner that designs, delivers and operates exceptional environments.

> Spaces that inspire. Solutions that last.

## Overview

`index.html` is a self-contained, dependency-free implementation of the Vestaform home page (vanilla HTML/CSS/JS — no build step). Open it directly in a browser.

### Features

- **Bilingual EN / ES** — a language toggle swaps all copy live
- **Full-bleed hero** with a rotating-word headline animation and a droppable image slot
- **Vestaform OS dashboard** — a floating, animated product mockup (live status, phase timeline, budget/delivery cards, photo updates)
- **Tabbed Model section** — Strategy / Design / Delivery / Technology
- **Vestaform OS** product panel and a dark **AI project-intelligence** grid
- **Industries**, a **Dental Company** case study, and an interactive **Why Vestaform** comparison table
- **Vision**, CTA and footer

## Design system

- **Palette:** soft linen `#F7F2EB` canvas, charcoal `#2B2B2B` text with forest `#002324` headings, deep-moss `#5D7267` accent, forest-green panels `#002324`, soft-lime `#EBFACF` highlight. Exposed as CSS tokens in `vestaform.css :root` (see `DESIGN.md`).
- **Type:** Playfair Display (display/titles) + Montserrat (UI/body)
- **Motif:** thin architectural rule-lines, spec labels, squared-off premium buttons

## Project structure

- `index.html` — the home page
- `project/` — original Claude Design prototypes (`*.dc.html`), image assets and components
- `chats/` — design conversation transcripts that shaped the build

## Running

No tooling required:

```sh
open index.html        # macOS
# or just open the file in any browser
```
