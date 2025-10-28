## 🧩 Site Settings (Global Config)

## 📄 Pages (Dynamic Page Builder)

**Purpose**: Give clients freedom to manage pages (like About, Services, etc.)

Fields to include:

- title
- slug
- contentBlocks (array of reusable sections like Hero, Testimonials, Gallery, etc.)
- seo (optional reference to SEO schema)

📁 Schema: page.ts

💡 Each page can be composed from modular content blocks → true flexibility

## 🧱 Reusable Sections / Blocks

**Purpose**: Allow modular content that can be reused or rearranged.

Examples:

- Hero section
- Text + Image section
- Testimonials
- CTA section
- Gallery
- FAQ

📁 Schema: objects/hero.ts, objects/cta.ts, etc.

💡 Add them as defineArrayMember inside contentBlocks on pages.

## 🧭 Navigation

**Purpose**: Manage menu structure and footer links from the CMS.

Fields:

- title
- url / reference to page
- Optional sublinks (nested array)

📁 Schema: navigation.ts

💡 Makes navs editable without developer help.
