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
  panels (`#002324`) are used as deliberate punctuation for product/OS and CTA moments
  (these replace the old near-black warm panels).
- **Signature motifs:** the diamond glyph `◆`, accent `kicker-line` rules, faint
  grid overlays on dark panels, animated "live" product dashboards, an italic-accent
  (Playfair) rotating word in the hero headline, and Soft Lime used only as a thin
  highlight.

---

## 2. Color Palette & Roles

The full palette is exposed as **CSS custom properties** in `vestaform.css :root` —
a raw-palette tier plus a semantic/role tier. Convert hardcoded hex to `var(--token)`;
never re-introduce raw hex in components.

**Raw palette**

| Group | Token | Hex |
|---|---|---|
| Green | `--forest` | `#002324` |
| | `--juniper` | `#394C45` |
| | `--deep-moss` | `#5D7267` |
| | `--moss` | `#A1AD95` |
| | `--sage` | `#C9D0C1` |
| Neutral | `--warm-beige` | `#EDE5DD` |
| | `--sand` | `#E6DED1` |
| | `--linen` | `#F7F2EB` |
| | `--stone` | `#BFB3A6` |
| | `--taupe` | `#9A8C80` |
| Accent | `--lime` | `#EBFACF` |
| | `--charcoal` | `#2B2B2B` |
| | `--white` | `#FFFFFF` |

**Semantic / role tokens**

| Role | Token → value | Usage |
|------|---------------|-------|
| Background | `--bg` → Linen | Primary canvas |
| Section band | `--bg-band` → Warm Beige | Banded sections |
| Card | `--card-bg` → Sand · `--card-bg-2` → White | Cards, table cells |
| Text | `--text` → Charcoal | Primary body |
| Heading | `--text-strong` → Forest | Headings, logo |
| Body-2 | `--text-secondary` → Juniper | Nav links, intros |
| Muted | `--text-muted` → Deep Moss | Kickers, meta (**AA floor on Linen**) |
| Border | `--border` → Stone | Hairlines on light |
| **Accent (type)** | `--accent` → Deep Moss | Kicker-line, active dots, italic words |
| **CTA** | `--cta-bg` → Forest · `--cta-text` → Linen | Buttons (hover → Juniper) |
| Dark panel | `--panel-bg` → Forest · `--panel-bg-2` → `#051f1d` | OS/CTA/story panels |
| Panel raised | `--panel-raised` → Juniper | Cards on dark |
| Panel hairline | `--panel-border` → `#0d3733` | Borders on dark |
| Panel text | `--panel-text` → Sand · `--panel-text-muted` → Moss | Text on dark |
| Success | `--success` → Moss | "Live" / "On track" status text |
| Highlight | `--highlight` → Soft Lime | **Tiny accents only** — live dot, micro-underline, CTA glow |

**Contrast:** Taupe `#9A8C80` on Linen ≈ 2.4:1 — **fails AA for text**; use Deep Moss
for `--text-muted` and keep Taupe decorative. CTA Linen-on-Forest ≈ 14:1, panel muted
Moss-on-Forest ≈ 7:1 — both pass. On dark panels, data fills/dots use `--moss` (not
the Deep-Moss accent) for visibility.

---

## 3. Typography Rules

- **Display / titles:** `Poppins` (600/700) — a geometric sans. Near-zero tracking
  (`0`) and line-height `1.05`–`1.12`.
- **Italic accent words:** headline emphasis words (the hero rotating word, the
  `em`/`.band-italic` spans, the footer tagline, the case-study pull-quote) stay in
  `Playfair Display` italic (500/600) — a deliberate serif contrast moment against
  the Poppins headings, not a general display font.
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

- **Primary button (`.btn-cta` / `.cta-btn`):** clay bg, paper text, **3–4px radius**
  (squared), 600 weight; hover lifts `translateY(-1px)` + `opacity 0.9`.
- **Outline button:** translucent paper border on imagery, blur backdrop.
- **Cards:** 6–10px radius, 1px warm border, hover lifts `-3px` and warms the border.
- **Tabs:** baseline-aligned number + label; animated 2px clay underline (`scaleX`);
  exposed with full `role="tab"` / `aria-selected` / roving-tabindex keyboard nav.
- **Comparison table:** dark header, alternating bone cells, `✕` (muted) vs `✓` (clay).
- **Pills:** 30px radius, 1px border, bone fill.
- **Nav:** sticky, `blur(14px)` translucent bone, 1px bottom hairline; collapses to a
  hamburger drawer below 880px.
- **Focus:** global `:focus-visible` → 2px clay outline, 3px offset.

---

## 5. Layout Principles

- **Container:** `max-width: 1240px`, `32px` gutters (`20px` on mobile).
- **Vertical rhythm:** `~96px` section padding desktop / `60px` mobile; bands and
  hairlines (`1px #ddd3c0`) separate major sections.
- **Grids:** 2-col split panels (`1.1fr 1fr`), 3-col card grids, 4-col metric rows —
  all collapse responsively (3→2→1, 4→2).
- **Whitespace:** generous; copy measures capped (`44–60ch`) for readability.

---

## 6. Depth & Elevation

- **Surface hierarchy:** bone canvas → bordered cards → floating product panels.
- **Shadows are warm-tinted, never neutral black:**
  - Floating OS panel: `0 30px 60px -20px rgba(40,25,12,0.5), 0 8px 20px -8px rgba(40,25,12,0.4)`
  - Text on imagery: soft `text-shadow` for legibility on the hero overlay.
- **Detail layers:** sheen gradients on images, faint `rgba(255,255,255,0.025)` grid
  lines on dark panels, radial accent glow behind the CTA.

---

## 7. Do's and Don'ts

**Do**
- Keep buttons squared (3–4px) and cards softly rounded (6–10px) — the contrast is intentional.
- Reference palette **tokens** (`var(--…)`), never raw hex, in components.
- Use **Soft Lime `#EBFACF`** only as a thin highlight (live dot, micro-underline, CTA glow) — never a fill or large surface.
- Pair every section title with an uppercase kicker + accent rule-line.
- Tint shadows green-neutral (`rgba(0,35,36,…)` / `rgba(0,20,20,…)`); respect `prefers-reduced-motion`.
- Keep copy measures short (`≤60ch`).

**Don't**
- Don't re-introduce the old warm/clay palette or saturated colours — stay soft and desaturated.
- Don't add drop shadows to flat linen surfaces; use 1px hairlines instead.
- Don't let muted text fall below WCAG AA — use Deep Moss (`#5D7267`) for muted text on Linen; Taupe is decorative-only.
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
Design language: soft natural-premium. Linen #F7F2EB canvas, charcoal #2B2B2B text
with forest #002324 headings, deep-moss #5D7267 accent type, forest-green panels
#002324 for product/CTA moments, soft-lime #EBFACF as a thin highlight only. Type:
Poppins (display/headings, near-zero tracking) + Nunito Sans (UI/body), with
Playfair Display italic reserved for accent/emphasis words (hero rotating word,
band statement, footer tagline, pull-quotes) as a deliberate serif contrast
moment — not a general display font. Motifs: thin accent rule-lines, uppercase
spec/kicker labels, the ◆ glyph, squared 3–4px buttons vs softly rounded 6–10px
cards, green-tinted shadows, faint grid overlays on dark surfaces. Desaturated,
never saturated. Keep copy measures ≤60ch. Maintain WCAG AA contrast and respect
prefers-reduced-motion. Tone: calm, considered, premium — "spaces that inspire,
solutions that last."
```

**Quick reference**

- Background `#F7F2EB` · Text `#2B2B2B` · Headings `#002324` · Accent `#5D7267` · Panel `#002324` · Highlight `#EBFACF`
- Radius: buttons `3–4px`, cards `6–10px`, pills `30px`
- Fonts: `Poppins` (headings), `Nunito Sans` (UI/body), `Playfair Display` italic (accent/emphasis words only)
- All colours are CSS tokens in `vestaform.css :root` — use `var(--…)`, not raw hex.
