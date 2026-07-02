# Vestaform — DESIGN.md

> Design system documentation for the Vestaform marketing site, in the
> [awesome-design-md](https://github.com/voltagent/awesome-design-md) /
> Google Stitch `DESIGN.md` format. Source of truth: `index.html`.

Vestaform is a technology-enabled workplace, hospitality and commercial space
partner. The brand line — *"Spaces that inspire. Solutions that last."*
— drives a calm, premium, nature-led aesthetic.

---

## 1. Visual Theme & Atmosphere

- **Mood:** soft, natural, premium-operator. Greens and beiges evoke calm,
  considered environments; reads like a design-and-build studio crossed with a
  SaaS product surface.
- **Philosophy:** editorial restraint over decoration. Thin rule-lines, spec/eyebrow
  labels, and squared-off buttons evoke architectural drawings and engineering specs.
- **Light vs. dark:** a soft "linen" light mode is the canvas; deep **forest-green**
  panels (`#0C2D28`) are used as deliberate punctuation for product/OS and CTA moments
  (these replace the old near-black warm panels).
- **Signature motifs:** the diamond glyph `◆`, accent `kicker-line` rules, faint
  grid overlays on dark panels, animated "live" product dashboards, an italic-accent
  (Playfair) rotating word in the hero headline, and **Terracotta** (`#C96F4A`) as the
  brand accent — buttons, links, icons, key stats and highlighted words, capped under
  ~10% of the interface (see §2 for the accent's two-tier AA strategy).

---

## 2. Color Palette & Roles

The full palette is exposed as **CSS custom properties** in `vestaform.css :root` —
a raw-palette tier plus a semantic/role tier. Convert hardcoded hex to `var(--token)`;
never re-introduce raw hex in components.

**Raw palette (brandbook v1.0–2025)**

| Group | Token | Hex |
|---|---|---|
| Green | `--forest` | `#0C2D28` |
| | `--moss` | `#A8B39A` |
| | `--sage` | `#C8D2C0` |
| Neutral | `--warm-beige` / `--sand` | `#E9DFD3` (Soft Beige — one surface swatch, two role names) |
| | `--linen` | `#F7F3ED` |
| | `--stone` | `#C9BDAE` (Warm Stone) |
| **Accent** | `--terracotta` | `#C96F4A` |
| | `--charcoal` | `#2A2A2A` |
| | `--white` | `#FFFFFF` |
| *Derived, non-brandbook* | `--juniper` | `#1E3F38` — mid-dark green utility, panel-raised/text-secondary only |
| *Derived, non-brandbook* | `--deep-moss` | `#5D7267` — AA-safe muted-text utility (unchanged) |

**Semantic / role tokens**

| Role | Token → value | Usage |
|------|---------------|-------|
| Background | `--bg` → Linen | Primary canvas |
| Section band | `--bg-band` → Soft Beige | Banded sections |
| Card | `--card-bg` → Soft Beige · `--card-bg-2` → White | Cards, table cells |
| Text | `--text` → Charcoal | Primary body |
| Heading | `--text-strong` → Forest | Headings, logo |
| Body-2 | `--text-secondary` → Juniper (derived) | Nav links, intros |
| Muted | `--text-muted` → Deep Moss (derived) | Kickers, meta (**AA floor on Linen**) |
| Border | `--border` → Warm Stone | Hairlines on light |
| **Accent (large text/icon/decorative)** | `--accent` → Terracotta | Kicker-line, dots, big stat numbers, italic emphasis words, focus ring, selection |
| **Accent (small literal text)** | `--accent-text` → Deep Moss (derived) | AA-safe alternative for small text that can't clear 4.5:1 on raw Terracotta — tab step numerals, checkmarks, product tagline/link/tag labels |
| **CTA** | `--cta-bg` → Terracotta · `--cta-text` → Forest | Buttons — see contrast note below |
| Dark panel | `--panel-bg` → Forest · `--panel-bg-2` → `#071a17` | OS/CTA/story panels |
| Panel raised | `--panel-raised` → Juniper (derived) | Cards on dark |
| Panel hairline | `--panel-border` → `#163a34` | Borders on dark |
| Panel text | `--panel-text` → Soft Beige · `--panel-text-muted` → Moss | Text on dark |
| Success | `--success` → Moss | "Live" / "On track" status text |
| Highlight | `--highlight` → Terracotta | Live-status dot, micro-underline, CTA glow |

**Contrast — computed, not estimated:**
- Charcoal on Linen: **12.99:1** — pass. Forest on Linen (headings): **13.36:1** — pass.
- Deep Moss on Linen (`--text-muted`/`--accent-text`): **4.67:1** — pass. Warm Stone/Moss/Sage
  alone are **1.4–2:1 on Linen — never use as text colour**, decorative/divider only.
- **Terracotta on Linen: 3.24:1 — fails AA for normal text (4.5:1), passes only for large
  text/icons/decorative UI (3:1)** — this is why `--accent` is reserved for large/decorative
  contexts and `--accent-text` (Deep Moss) exists for small literal text.
- **CTA — Forest text on Terracotta fill: 4.12:1.** This is the best available combination
  (white/Linen text on Terracotta is only 3.59:1) and sits just under the 4.5:1 text
  threshold. **Accepted deliberately** — brand-warmth priority over strict AA compliance, per
  explicit decision. Document this as intentional, not an oversight, if revisited.
- Moss on Forest (panel muted text): **6.74:1** — pass. Soft Beige on Forest (panel text):
  **11.23:1** — pass.

---

## 3. Typography Rules

- **Display / titles:** `Poppins` (600/700/800, 800 reserved for the hero H1) — a
  geometric sans. Near-zero tracking (`0`) and line-height `1.05`–`1.12`.
- **Italic accent words:** headline emphasis words (the hero rotating word, the
  `em`/`.band-italic` spans, the footer tagline, the case-study pull-quote) stay in
  `Playfair Display` italic (500/600/700, 700 reserved for the hero rotating word) —
  a deliberate serif contrast moment against the Poppins headings, not a general
  display font.
- **UI / body:** `Nunito Sans` (300–700).
- **Fluid scaling** via `clamp()`.

| Token | Size | Font |
|-------|------|------|
| Hero H1 | `clamp(44px, 6.6vw, 92px)` | Poppins 600, `ls 0` |
| Section H2 | `clamp(34px, 4.4vw, 60px)` | Poppins 600, `ls 0` |
| Panel title | `clamp(26px, 3vw, 40px)` | Poppins 600 |
| Italic accent word | inherits parent size | Playfair Display italic |
| Body | 16–18px / 1.55–1.6 | Nunito Sans |
| Eyebrow / kicker | 12.5px, `0.14em` tracking, uppercase | Nunito Sans 600 |
| Spec label | 10–11px, `0.1em` tracking, uppercase | Nunito Sans |

---

## 4. Component Stylings

- **Primary button (`.btn-cta` / `.cta-btn`):** Terracotta bg, Forest text, **3–4px radius**
  (squared), 600 weight; hover lifts `translateY(-1px)` + `opacity 0.9`. The frosted
  `.btn-glass` variant (used over hero imagery and on dark panels) keeps light Linen text
  regardless of fill hue, since it overlays photographic/dark backdrops.
- **Outline button:** translucent paper border on imagery, blur backdrop.
- **Cards:** 6–10px radius, 1px warm border, hover lifts `-3px` and warms the border.
- **Panels** (`.os-panel`, `.cta-panel`): 14px radius — a distinct, larger radius
  than cards, reserved for full-bleed dark/product panels.
- **Tabs:** baseline-aligned number + label; animated 2px Terracotta underline (`scaleX`);
  step numeral uses `--accent-text` (Deep Moss), not `--accent`, since it's small literal
  text; exposed with full `role="tab"` / `aria-selected` / roving-tabindex keyboard nav.
- **Comparison table:** dark header, alternating bone cells, `✕` (muted) vs `✓` (Deep Moss —
  `--accent-text`, not raw Terracotta, since the glyph is small literal text).
- **Pills:** 30px radius, 1px border, bone fill.
- **Nav:** sticky, `blur(14px)` translucent bone, 1px bottom hairline; collapses to a
  hamburger drawer below 880px.
- **Focus:** global `:focus-visible` → 2px Terracotta outline, 3px offset (non-text UI
  component, passes the 3:1 threshold).

---

## 5. Layout Principles

- **Container:** `max-width: 1240px`, `32px` gutters (`20px` on mobile).
- **Vertical rhythm:** `~96px` section padding desktop / `60px` mobile; bands and
  hairlines (`1px var(--border)` — Warm Stone `#C9BDAE`) separate major sections.
- **Grids:** 2-col split panels (`1.1fr 1fr`), 3-col card grids, 4-col metric rows —
  all collapse responsively (3→2→1, 4→2).
- **Whitespace:** generous; copy measures capped (`44–60ch`) for readability.

---

## 6. Depth & Elevation

- **Surface hierarchy:** bone canvas → bordered cards → floating product panels.
- **Shadows are green-tinted, never neutral black:**
  - Floating OS panel: `0 30px 60px -20px rgba(12,45,40,0.45), 0 8px 20px -8px rgba(12,45,40,0.35)`
  - Text on imagery: soft `text-shadow` for legibility on the hero overlay.
- **Detail layers:** sheen gradients on images, faint `rgba(255,255,255,0.025)` grid
  lines on dark panels, radial accent glow behind the CTA.

---

## 7. Do's and Don'ts

**Do**
- Keep buttons squared (3–4px) and cards softly rounded (6–10px) — the contrast is intentional.
- Reference palette **tokens** (`var(--…)`), never raw hex, in components.
- Use **Terracotta `#C96F4A`** for large text, icons, decorative dots/lines, big stat numbers
  and italic emphasis words — cap its overall footprint under ~10% of the interface.
- For **small literal text** (labels, tab numerals, checkmarks, ≤16px), use `--accent-text`
  (Deep Moss) instead of raw Terracotta — Terracotta only clears 3.24:1 on Linen, which fails
  the 4.5:1 AA text threshold below "large text" size.
- Pair every section title with an uppercase kicker + accent rule-line.
- Tint shadows green-neutral (`rgba(12,45,40,…)`); respect `prefers-reduced-motion`.
- Keep copy measures short (`≤60ch`).

**Don't**
- Don't re-introduce the old warm/clay palette or saturated colours — stay soft and desaturated.
- Don't add drop shadows to flat linen surfaces; use 1px hairlines instead.
- Don't let muted text fall below WCAG AA — use Deep Moss (`#5D7267`) for muted text on Linen;
  Warm Stone/Moss/Sage alone are decorative-only (1.4–2:1, fail badly as text).
- Don't set raw Terracotta as small-text colour (labels, links, glyphs ≤16px) — use
  `--accent-text` instead; the CTA button's Forest-on-Terracotta (4.12:1) is the one accepted
  exception, made deliberately, not a precedent to copy elsewhere.
- Don't run infinite animations without a reduced-motion fallback.

---

## 8. Responsive Behavior

- **Breakpoints:** `1024px` (3→2 col cards), `880px` (mobile nav drawer, split panels →
  1 col, OS dashboard de-floats inline), `768px` (single-column, reduced gutters/padding,
  4→2 metric grid).
- **Touch targets:** language toggle and menu controls ≥40px.
- **Type** scales fluidly via `clamp()` across all breakpoints.
- **Reduced motion:** `@media (prefers-reduced-motion: reduce)` neutralizes floats,
  blinks, shimmer and the word rotator.

---

## 9. Agent Prompt Guide

```
Design language: soft natural-premium. Linen #F7F3ED canvas, charcoal #2A2A2A text
with forest #0C2D28 headings, terracotta #C96F4A accent (buttons, links, icons, big
numbers, italic emphasis words — capped under ~10% of the UI; use deep-moss #5D7267
instead for small literal text, since terracotta only clears 3.24:1 on linen), and
forest-green panels #0C2D28 for product/CTA moments. Type: Poppins (display/headings,
near-zero tracking) + Nunito Sans (UI/body), with Playfair Display italic reserved for
accent/emphasis words (hero rotating word, band statement, footer tagline, pull-quotes)
as a deliberate serif contrast moment — not a general display font. Motifs: thin accent
rule-lines, uppercase spec/kicker labels, the ◆ glyph, squared 3–4px buttons vs softly
rounded 6–10px cards, green-tinted shadows, faint grid overlays on dark surfaces.
Desaturated, never saturated except the terracotta accent itself. Keep copy measures
≤60ch. Maintain WCAG AA contrast (with the single accepted CTA-button exception noted
in §2) and respect prefers-reduced-motion. Tone: calm, considered, premium — "spaces
that inspire, solutions that last."
```

**Quick reference**

- Background `#F7F3ED` · Text `#2A2A2A` · Headings `#0C2D28` · Accent (large/icon) `#C96F4A` ·
  Accent (small text) `#5D7267` · Panel `#0C2D28`
- Radius: buttons `3–4px`, cards `6–10px`, pills `30px`
- Fonts: `Poppins` (headings), `Nunito Sans` (UI/body), `Playfair Display` italic (accent/emphasis words only)
- All colours are CSS tokens in `vestaform.css :root` — use `var(--…)`, not raw hex.
