# Product Specification: Listening To Your Voice Limited

**Short Reference Name:** LTYV  
**Purpose:** This document defines the product strategy, target audience pathways, structural page scope, and business objectives for the LTYV website modernization. It serves as the single source of truth for functional requirement scope across human developers and AI tools.

---

## 1. Executive Summary
* **Project:** Complete greenfield rebuild and modernization of the LTYV web platform.
* **Elevator Pitch:** LTYV, led by founder Annette Pearson, provides high-impact executive and leadership coaching tailored for ambitious female leaders and institutional decision-makers across corporate and educational sectors.
* **Core Objective:** Modernize the visual presence, establish immediate authority above the fold, seamlessly route two distinct target audiences, and increase high-value conversion into introductory consultation calls.

---

## 2. Target Audience & Segment Pathways

To avoid visitor confusion, the website explicitly bifurcates its user journey immediately upon landing:

### Audience A — B2C Individual Leaders
* **Profile:** Female executives, directors, business founders, and senior managers seeking high-touch 1:1 executive coaching, leadership resilience, and career transformation.
* **Primary Route:** Hero Signpost $\rightarrow$ `/individuals` $\rightarrow$ Discovery Call Booking CTA.
* **Browsing Context:** High mobile usage outside of traditional office hours; looking for personal connection, confidential support, and high trust.

### Audience B — B2B / Institutional Decision Makers
* **Profile:** Headteachers, Principals, MAT CEOs, HR Directors, and L&D Managers seeking group leadership programs, team workshops, or organizational coaching frameworks.
* **Primary Route:** Hero Signpost $\rightarrow$ `/organisations` $\rightarrow$ Institutional Inquiry Form / Consultation CTA.
* **Browsing Context:** Primarily desktop browsing during business hours; looking for procurement credibility, institutional ROI, and structured deliverables.

---

## 3. Core User Goals (Jobs To Be Done)

* **Goal 1 (Instant Authority & Clarity):** Communicate Annette Pearson's expertise and value proposition within 5 seconds of landing.
* **Goal 2 (Bifurcated Routing Above the Fold):** Allow individual executives and institutional buyers to self-select their pathway directly in the hero fold without scrolling.
* **Goal 3 (Social Proof & Trust Building):** Display prominent client testimonials, case studies, and institutional accreditation badges (e.g., MATs, schools, corporate partners) at key visual breakpoints.
* **Goal 4 (Frictionless Conversion):** Drive direct engagement via embedded booking scheduling or short inquiry forms under 3 clicks on every page.

---

## 4. Key Pages & Structural Scope

* ` / ` **Home:** Authority hero with portrait and dual CTA signposting (`For Individuals` vs `For Organisations`), dual-pathway feature preview, sticky philosophy breakout, dark-theme proof inversion block, and final conversion callout.
* ` /individuals ` **Executive Coaching:** Focused value proposition for female leaders, 1:1 coaching pillars, personal outcomes, testimonial highlight reel, and direct discovery call booking.
* ` /organisations ` **Institutional & Team Coaching:** Tailored for MATs, schools, and corporate HR/L&D teams. Details service formats (workshops, executive coaching, group sessions), institutional benefits, procurement pathways, and inquiry submission form.
* ` /about ` **About Annette Pearson:** Annette's backstory, coaching credentials, philosophy, values, and personal approach to leadership growth.
* ` /blog ` **Insights & Articles:** Authority content hub focused on leadership performance, communication, and executive resilience to drive organic SEO traffic.
* ` /contact ` **Contact & Booking:** Direct inquiry submission form, business email, phone details, and embedded calendar scheduling integration.

---

## 5. Brand Tone, Identity & Asset Extraction

### Brand Tone & Personality Matrix
* **Voice:** Authoritative, empathetic, highly professional, refined, and empowering.
* **Personality Matrix:**
  * Executive & Premium, NOT corporate-sterile.
  * Warm & Approachable, NOT informal or overly casual.
  * Concise & Impactful, NOT dense or overly wordy.

### Legacy Assets to Preserve & Enhance
* High-value client testimonials and school/MAT quotes from the legacy website.
* Core brand identity base (Primary Purple `#591e6e`, Accent CTA Orange `#ff800c`, and warm off-white surface tones).
* Annette Pearson’s core credentials, background history, and high-resolution professional headshots.

---

## 6. Technical Success Criteria & Explicit Scope Guardrails

### Success Criteria
* **Performance:** Google Lighthouse score 95+ (Performance, Accessibility, Best Practices, SEO).
* **Usability:** Fully responsive, fluid typography, zero layout shift (CLS), and seamless stacking on mobile viewports.
* **Conversion Visibility:** Clear, unambiguous Call to Action (CTA) buttons visible on every page above or near the viewport fold.

### Non-Goals (Explicitly Out of Scope)
* Native e-commerce, shopping carts, or direct online payment processing (handled externally via invoice or direct links).
* Gated client portals or custom login systems.
* Native video/audio hosting (third-party embedded media players only).
* Complex multi-language localization.