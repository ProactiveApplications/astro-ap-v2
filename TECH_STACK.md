# Technical Architecture & Coding Rules

## Core Technologies
* **Framework:** Astro Build (v4+)
* **UI Grid & Layout System:** Bootstrap 5 (Grid, Utilities, and Container classes)
* **Repository:** GitHub
* **Hosting & Edge:** Cloudflare Pages / Workers

## Strict Implementation Rules for Code Generation

### 1. Mandatory Grid Structure
* Every Astro view and layout component **MUST** use standard Bootstrap 5 container and grid classes (`container`, `container-fluid`, `row`, `col-12`, `col-md-*`, `col-lg-*`, `g-*`).
* Components must NEVER output un-gridded block elements for main layout structures.

### 2. CSS Organization & Variables (NO Inline Styles)
* 🚫 **NO Inline CSS Styles:** Never generate `style="..."` attributes on HTML elements.
* **Centralized Stylesheet:** All custom styling, class overrides, and layout rules must be placed in `src/assets/css/main.css`.
* **CSS Variable Requirement:** All colors must be mapped to CSS custom properties (variables) defined in `:root` inside `main.css`. Classes must reference these variables (`var(--color-primary)`), never hardcoded hex/OKLCH values directly in class rules.