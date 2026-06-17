# Vestaform — DESIGN.md

> Design system documentation for the Vestaform marketing site, in the
> [awesome-design-md](https://github.com/voltagent/awesome-design-md) /
> Google Stitch `DESIGN.md` format. Source of truth: `index.html`.

Vestaform is a technology-enabled workplace, hospitality and commercial space
partner. The brand line — *"We don't sell furniture. We deliver environments."*
— drives a confident, architectural, premium aesthetic.

---

## 1. Visual Theme & Atmosphere

- **Mood:** warm, architectural, premium-operator. Reads like a design-and-build
  studio crossed with a SaaS product surface.
- **Philosophy:** editorial restraint over decoration. Thin rule-lines, spec/eyebrow
  labels, and squared-off buttons evoke architectural drawings and engineering specs.
- **Light vs. dark:** a warm "bone paper" light mode is the canvas; dark warm panels
  (`#1b1611`) are used as deliberate punctuation for product/OS and CTA moments.
- **Signature motifs:** the diamond glyph `◆`, accent `kicker-line` rules, faint
  grid overlays on dark panels, animated "live" product dashboards, and an
  italic-accent rotating word in the hero headline.

---

## 2. Color Palette & Roles

| Role | Hex | Usage |
|------|-----|-------|
| `bg` / Bone paper | `#efe9dd` | Primary background |
| Bone variants | `#e7decb`, `#f6f1e7`, `#f3ede1`, `#faf6ec` | Section bands, cards, table cells |
| Ink (text) | `#221c14` | Primary text, also a dark section bg |
| Ink secondary | `#4a4133` | Body copy, nav links |
| Muted label | `#6f6553` | Kickers, eyebrows, footer meta (AA-compliant) |
| Muted body | `#5d5544` | Card descriptions, metric labels |
| **Accent — Clay** | `#bd562e` | CTAs, links-on-hover, active states, accent type |
| Dark panel | `#1b1611` | OS panel, CTA panel, comparison header |
| Dark panel raised | `#241d15` / `#221b13` / `#2c241a` | Cards on dark |
| Dark hairline | `#2e2419` / `#3a2e22` | Borders on dark |
| Light hairline | `#ddd3c0` / `#d2c7b0` | Borders/dividers on bone |
| Paper text (on dark) | `#fdfaf3` / `#f6efe3` / `#ece4d6` | Text on dark/accent |
| Success | `#58c873` / `#7fb98e` | "Live" / "On track" status |

`--accent: #bd562e` and `--bg: #efe9dd` are exposed as CSS custom properties.

---

## 3. Typography Rules

- **Display / titles:** `Inter Tight` (600/700), tight tracking (`-0.01em`→`-0.02em`),
  line-height `0.98`–`1.04`. Italic + clay accent for emphasis words.
- **UI / body:** `Schibsted Grotesk` (400–600).
- **Fluid scaling** via `clamp()`.

| Token | Size | Font |
|-------|------|------|
| Hero H1 | `clamp(44px, 6.6vw, 92px)` | Inter Tight 600 |
| Section H2 | `clamp(34px, 4.4vw, 60px)` | Inter Tight 600 |
| Panel title | `clamp(26px, 3vw, 40px)` | Inter Tight 600 |
| Body | 16–18px / 1.55–1.6 | Schibsted Grotesk |
| Eyebrow / kicker | 12.5px, `0.14em` tracking, uppercase | Schibsted Grotesk 600 |
| Spec label | 10–11px, `0.1em` tracking, uppercase | Schibsted Grotesk |

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
- Use clay `#bd562e` sparingly, as an accent — never as a large fill.
- Pair every section title with an uppercase kicker + accent rule-line.
- Tint shadows warm; respect `prefers-reduced-motion`.
- Keep copy measures short (`≤60ch`).

**Don't**
- Don't introduce cool greys or pure black/white — stay in the warm spectrum.
- Don't add drop shadows to flat bone surfaces; use 1px hairlines instead.
- Don't let muted text fall below WCAG AA (use `#6f6553` / `#5d5544`, not lighter).
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
Design language: warm architectural-premium. Bone paper #efe9dd canvas, deep warm
ink #221c14 text, clay accent #bd562e (sparingly), dark warm panels #1b1611 for
product/CTA moments. Type: Inter Tight (display, tight tracking, italic accent
words) + Schibsted Grotesk (UI/body). Motifs: thin accent rule-lines, uppercase
spec/kicker labels, the ◆ glyph, squared 3–4px buttons vs softly rounded 6–10px
cards, warm-tinted shadows, faint grid overlays on dark surfaces. Keep copy
measures ≤60ch. Maintain WCAG AA contrast and respect prefers-reduced-motion.
Tone: confident, operational, editorial — "we deliver environments, not furniture."
```

**Quick reference**

- Background `#efe9dd` · Text `#221c14` · Accent `#bd562e` · Dark panel `#1b1611`
- Radius: buttons `3–4px`, cards `6–10px`, pills `30px`
- Fonts: `Inter Tight` (display), `Schibsted Grotesk` (UI/body)
