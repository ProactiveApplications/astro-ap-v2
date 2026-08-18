# Design System Specification: Listening To Your Voice Limited

**Short Reference Name:** LTYV  
**Purpose:** This document defines the visual execution rules, design tokens, depth systems, layout rhythm, and interactive boundaries for the LTYV website rebuild. It acts as the definitive design directive for both human developers and AI coding assistants.

---

## 1. Color Palette, CSS Variables & Bootstrap Integration

*All custom CSS must reside in `src/assets/css/main.css`. No inline `style="..."` attributes allowed.*

### Global CSS Variables (`src/assets/css/main.css`)
```css
:root {
  /* Brand Core */
  --color-primary: #591e6e;        /* Authority Purple */
  --color-cta: #ff800c;            /* Action Orange */
  
  /* Surfaces & Canvas */
  --color-bg-canvas: #f9f8f3;      /* Main Warm Off-White Surface */
  --color-bg-surface-purple: #f8f2fa; /* Level 1 Purple Tint */
  --color-bg-surface-sage: #f3f8f4;   /* Level 1 Sage Tint */
  
  /* Text & Borders */
  --color-text-main: oklch(22% 0.03 320);
  --color-text-muted: oklch(45% 0.02 320);
  --color-border-subtle: oklch(90% 0.01 320);
}

### Core Brand Colors
* **Primary Deep Brand (Authority Purple):** `#591e6e` | `oklch(31% 0.12 320)`
  * *Usage:* Primary headings, navigation bars, footers, full-bleed authority section backgrounds, primary text accents, and brand framing.
* **Call To Action (CTA Orange):** `#ff800c` | `oklch(68% 0.20 48)`
  * *Usage:* **Exclusively** reserved for primary conversion buttons, booking links, active tab highlights, and urgent focus indicators.

### Surface & Background Tones (Tinted Neutrals)
* **Main Canvas Background:** `#f9f8f3` | `oklch(98% 0.008 90)`
  * *Usage:* Primary page background surface (warm off-white; replaces pure white `#ffffff` to prevent visual glare and fatigue).
* **Secondary Surface (Purple-Tinted Neutral):** `#f8f2fa` | `oklch(97% 0.01 320)`
  * *Usage:* Alternating section backgrounds, service card containers, and highlighted testimonial blocks.
* **Tertiary Surface (Sage/Green-Tinted Neutral):** `#f3f8f4` | `oklch(97% 0.01 145)`
  * *Usage:* Complementary card fills, success feedback callouts, frameworks, or outcome summary boxes.

### Typography & Border Colors
* **Main Text:** `oklch(22% 0.03 320)` — Deep slate with a subtle purple undertone for high-contrast readability (replaces pure `#000000`).
* **Muted Text:** `oklch(45% 0.02 320)` — Medium slate for secondary captions, dates, and metadata.
* **Subtle Borders:** `oklch(90% 0.01 320)` — Soft divider lines matching the primary brand hue.

---

## 2. Typography & Hierarchy

### Font Families
* **Primary Display (Headings & Editorial Pulls):** Modern serif or refined editorial sans (e.g., *Newsreader*, *Playfair Display*, or *Plus Jakarta Sans*) to communicate executive authority and warmth.
* **Secondary Body (Copy, UI & Forms):** Highly legible geometric sans-serif (e.g., *Inter*, *Outfit*, or *System-UI*).

### Type Scale & Ratios
* **Display / Hero Headline:** `clamp(2.5rem, 5vw, 4rem)` | `line-height: 1.1` | `letter-spacing: -0.02em`
* **Heading 1 (`h1`):** `clamp(2rem, 3.5vw, 2.75rem)` | `line-height: 1.2` | `letter-spacing: -0.01em`
* **Heading 2 (`h2`):** `clamp(1.5rem, 2.5vw, 2.125rem)` | `line-height: 1.25`
* **Heading 3 (`h3`):** `clamp(1.25rem, 1.8vw, 1.5rem)` | `line-height: 1.3`
* **Body Lead:** `1.125rem` (18px) | `line-height: 1.6`
* **Body Regular:** `1rem` (16px) | `line-height: 1.65` | `max-width: 68ch` (for optimal reading line-length)
* **Caption / Small UI:** `0.875rem` (14px) | `line-height: 1.5`

---

## 3. Curing Visual Flatness: Rhythm, Layout & Pacing

*To prevent "brochure fatigue" and single-page monotony, no two adjacent sections may share the same structural pattern or density.*

### Section Density Scale
1. **Sparse / High Breathing Room (Impact Sections):**
   * *Use:* Hero section, core philosophy statements, or primary pull-quotes.
   * *Layout:* Generous vertical padding (`py-20` to `py-32`), large typography, minimal body copy, asymmetric whitespace.
2. **Medium / Structured Grid (Informational Sections):**
   * *Use:* Service breakdowns, target audience routing (`/individuals` vs `/organisations`).
   * *Layout:* Asymmetric 2-column (`60/40` or `70/30` splits), offset cards, overlapping badges, sticky section headings.
3. **Dense / High-Contrast Inversion (Proof & Data Sections):**
   * *Use:* Testimonials, case study stats, or institutional accreditation logos.
   * *Layout:* Full-width primary purple (`#591e6e`) background, light text, compact grid spacing, interactive filter tabs or toggle switches.

### Asymmetric Composition Rules
* **Avoid Uniform Centering:** Never center-align body copy or primary multi-paragraph headings. Use left-aligned or asymmetric offset arrangements.
* **Sticky Split-Scroll:** On longer content sections, lock the section title and main CTA on the left `40%` column while the detailed deliverables scroll vertically in the right `60%` column.

### 3. Core Architectural Layout Patterns

*To guarantee structural variety across the site, every section must implement one of these four core patterns. Never stack two identical patterns sequentially.*

#### Pattern 1: The Asymmetric Split (Hero & Key Routing)
* **Structure:** 2-column desktop layout split **60% / 40%** (or **70% / 30%**).
* **Left Column (Primary Focal Point):** Left-aligned editorial headline, high-impact value proposition subdeck, and primary CTA button (`#ff800c`).
* **Right Column (Supporting Surface):** Elevated Level 1 surface card (`#f8f2fa` or `#f3f8f4`) containing a featured takeaway, floating badge, or framed portrait.
* **Usage:** Hero sections, primary callouts, page intros.

#### Pattern 2: The Sticky Split-Scroll (Services & Frameworks)
* **Structure:** 2-column layout with pinned navigation on one side.
* **Left Column (40% - Sticky):** Section title, brief descriptor, and primary action link remain pinned to the top of the viewport (`position: sticky`) as the user scrolls.
* **Right Column (60% - Vertical Feed):** 2 to 4 elevated service cards (`#f8f2fa` / `#f3f8f4`) that slide vertically past the sticky left header.
* **Usage:** `/individuals` coaching pillars, `/organisations` service packages, process steps.

#### Pattern 3: The Dark Section Inversion (Authority & Proof Breakout)
* **Structure:** Full-bleed background color block in Authority Purple (`#591e6e`) that breaks the light canvas (`#f9f8f3`).
* **Elements:**
  * High-contrast white/light text.
  * Oversized metric numerals in CTA Orange (`#ff800c`).
  * Grid or carousel of client quote cards.
* **Usage:** Testimonials, social proof stats, accreditation badges, final call-to-action blocks.

#### Pattern 4: Dual-Pathway Bifurcated Cards (Target Audience Selection)
* **Structure:** Side-by-side asymmetric feature cards that visually split two user journeys.
* **Card A (For Individuals):** Surface background `#f8f2fa`, subtle purple accent border, clear entry link for B2C female executives.
* **Card B (For Organisations):** Surface background `#f3f8f4`, subtle sage accent border, clear entry link for B2B educational/corporate decision-makers.
* **Usage:** Home page audience routing, service selection matrices.

---

## 4. Depth, Elevation & Surface Layering

*Depth is created using subtle off-white surface layers, soft purple-tinted ambient shadows, and overlapping structural boundaries.*

### Surface Elevation Levels
* **Level 0 (Canvas Base):** Primary background (`#f9f8f3`).
* **Level 1 (Cards & Content Containers):** Elevated surface (`#f8f2fa` or `#f3f8f4`).
  * *Border:* `1px solid oklch(90% 0.01 320)`
  * *Shadow:* `0 4px 20px -2px rgba(89, 30, 110, 0.05)` (Soft purple ambient shadow).
* **Level 2 (Interactive Popovers / Floating Cards):** Highest surface plane.
  * *Border:* `1px solid oklch(85% 0.02 320)`
  * *Shadow:* `0 12px 32px -4px rgba(89, 30, 110, 0.12)`

### Visual Breakouts & Surprises
Every page longer than two scroll viewports must contain at least **two high-impact visual breakouts**:
1. **Oversized Stat Callout Grid:** Key outcomes (e.g., *"100+ Leaders Coached"*) using massive numerals (`clamp(3rem, 6vw, 4.5rem)`) in CTA Orange (`#ff800c`) adjacent to descriptive narrative copy.
2. **Asymmetric Accent Bars:** 4px vertical accent rules in CTA Orange (`#ff800c`) or Brand Purple (`#591e6e`) along the left edge of pull-quotes or key feature callouts.
3. **Overlapping Cards:** Negative margin offsets (`-mb-8` or `-mt-8`) where floating stat cards visually bridge two distinct background color sections.

---

## 5. Motion & Micro-Interactions

*All motion must feel smooth, intentional, and executive-level. Total duration must remain under 300ms. Respect `prefers-reduced-motion`.*

### Scroll-Driven Entrances
* **Progressive Reveal:** Elements drift upward into view as they enter the viewport threshold:
  * *Transform:* `translateY(16px)` $\rightarrow$ `translateY(0)`
  * *Duration:* `250ms ease-out`
  * *Stagger:* Multi-card grids stagger item entry by `50ms` per card.

### Interactive States
* **Primary CTA Buttons (`#ff800c`):**
  * *Default:* Background `#ff800c`, Text `#ffffff`, `font-weight: 600`, Border Radius `8px`.
  * *Hover:* `background-color: oklch(62% 0.22 48); transform: translateY(-2px);` (Slightly deeper orange with soft shadow expansion).
  * *Focus:* `outline: 2px solid #591e6e; outline-offset: 2px;`
* **Interactive Service Cards:**
  * *Hover:* Subtle scale shift (`scale(1.01)`), border color shift from gray to Brand Purple (`#591e6e`), and arrow icon slide (`translateX(4px)`).

---

## 6. Strict Design Anti-Patterns (Explicit Guardrails)

* 🚫 **NO Pure Black (`#000000`) or Pure White (`#ffffff`) Backgrounds:** Always use tinted neutral surfaces (`#f9f8f3`, `#f8f2fa`, `#f3f8f4`) to keep the design soft and sophisticated.
* 🚫 **NO Repeating Structural Layouts:** Never stack identical `Image + Text` rows continuously down a page.
* 🚫 **NO Generic Bento Grids:** Avoid trendy, hyper-cramped square grids; use spacious, asymmetric editorial columns suited for high-level executive coaching.
* 🚫 **NO Low-Contrast Copy:** All text body colors must pass WCAG AAA contrast standards against their background.
* 🚫 **NO Overused Bounce Easings:** Keep transitions strictly linear or `ease-out` under `250ms`.