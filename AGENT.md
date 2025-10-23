# AGENT.md

## Role & Expertise

You are an expert in **Next.js (App Router)**, **Sanity CMS**, **TypeScript**, **React**, and **Tailwind CSS**.

You work inside a modern web app with:

- A `src/app` directory structure using server and client components.
- Sanity Studio mounted at `/studio`.
- Reusable UI components under `src/components`.
- Queries and helpers under `src/sanity/lib`.

Your primary goals:

- Keep the codebase modular, consistent, and production-ready.
- Write clean, typed, and maintainable TypeScript.
- Maintain strong parity between Sanity schemas and generated types.

---

## 🏗️ Architecture Overview

- **Next.js App Router** lives under `src/app/`.
  - Public UI routes are under `src/app/(frontend)`.
  - `layout.tsx` defines global metadata and layout wrappers.
- **Sanity integration** via `next-sanity`:
  - `src/sanity/lib/client.ts` → exports configured `client`.
  - `src/sanity/lib/queries.ts` → defines GROQ queries using `defineQuery`.
  - `src/sanity/lib/live.ts` → provides `{ sanityFetch, SanityLive }`.
  - `src/sanity/lib/image.ts` → handles Sanity image URLs with `urlFor()`.
- **Studio** mounted at `/studio` via `src/app/studio/[[...tool]]/page.tsx` with `NextStudio`.
- **Type generation** handled with:
  ```bash
  npm run typegen
  which runs sanity schema extract + sanity typegen generate.
  ```

🎨 Code Style & Structure
General
Use TypeScript in all files.

Use functional React components only — avoid classes.

Prefer server components for data fetching (async function Page()).

Use client components only when interaction or hooks are required.

Naming Conventions
Directories → kebab-case

Files → match component name (ButtonPrimary.tsx)

Variables & functions → camelCase

Components → PascalCase

Sanity schemas → singular, lowercase (post, siteSettings)

Syntax & Formatting
Use async/await for asynchronous logic.

Use Prettier defaults with 2-space indentation.

Use double quotes for strings.

Write explicit return types for exported functions when meaningful.

Keep imports sorted and organized by path depth.

🎨 UI & Styling
Use Tailwind CSS with mobile-first responsive design.

Use semantic HTML tags (<header>, <section>, <footer>).

Keep Tailwind classes minimal and readable; group logically by function (layout, color, typography).

Prefer component-level composition over CSS overrides.

⚙️ Sanity Integration Rules
Never edit src/sanity/types.ts manually — it’s generated.

When updating schemas under src/sanity/schemaTypes, run npm run typegen.

Add GROQ queries via defineQuery() in src/sanity/lib/queries.ts.

Always export both the query and the associated type.

Use sanityFetch({ query, params }) for server components.

Use SanityLive for live content previews.

Example:

ts
Kopier kode
// src/sanity/lib/queries.ts
export const POSTS_QUERY = defineQuery(`  *[_type == "post"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    mainImage,
    publishedAt
  }`);
⚡ Performance & Optimization
Favor Server Components (no use client unless necessary).

Wrap client components in <Suspense> when async loading.

Use image optimization via urlFor(source).width(...).url().

Use ISR or on-demand revalidation for Sanity content updates.

💡 Developer Workflow
Dev: npm run dev

Build: npm run build && npm run start

Type generation: npm run typegen

Studio: available at /studio

Env vars required:

NEXT_PUBLIC_SANITY_PROJECT_ID

NEXT_PUBLIC_SANITY_DATASET

NEXT_PUBLIC_SANITY_API_VERSION

🧭 Behavior Guidelines (for AI Agents)
Understand the project structure before generating code.

Always respect existing patterns for components, queries, and styling.

Suggest improvements that simplify or modularize code — not just add more.

When adding new components or schemas, ensure type safety and query consistency.

Never add packages unless explicitly requested.

Prioritize clarity, performance, and maintainability.

yaml
Kopier kode

---

Vil du have, jeg også laver en **`copilot-instructions.md`** der supplerer den (mere kortfattet og fokuseret på udviklingsflowet, ligesom din “Vesterled Svømmehal”-fil)?  
Den kan fungere som en “lightweight AI manual” for Copilot, mens `AGENT.md` er den fulde regelbog.

Du sagde:
Jeg tror ikke du fik lavet den hele som md, giv mig det hele som markdown og så fortæl mig hvordan jeg bruger den i min IDE

ChatGPT sagde:
Perfekt 🙌
Lad os gøre det ordentligt:
Her får du hele din færdige AGENT.md som komplet Markdown-fil (klar til at copy/paste direkte ind i dit projekt).
Derefter forklarer jeg præcist, hvordan du bruger den i din IDE (Cursor, Copilot, Windsurf, osv.).

🧠 AGENT.md
markdown
Kopier kode

# AGENT.md

## Role & Expertise

You are an expert in **Next.js (App Router)**, **Sanity CMS**, **TypeScript**, **React**, and **Tailwind CSS**.

You work inside a modern web app with:

- A `src/app` directory structure using server and client components.
- Sanity Studio mounted at `/studio`.
- Reusable UI components under `src/components`.
- Queries and helpers under `src/sanity/lib`.

Your primary goals:

- Keep the codebase modular, consistent, and production-ready.
- Write clean, typed, and maintainable TypeScript.
- Maintain strong parity between Sanity schemas and generated types.

---

## 🏗️ Architecture Overview

- **Next.js App Router** lives under `src/app/`.
  - Public UI routes are under `src/app/(frontend)`.
  - `layout.tsx` defines global metadata and layout wrappers.
- **Sanity integration** via `next-sanity`:
  - `src/sanity/lib/client.ts` → exports configured `client`.
  - `src/sanity/lib/queries.ts` → defines GROQ queries using `defineQuery`.
  - `src/sanity/lib/live.ts` → provides `{ sanityFetch, SanityLive }`.
  - `src/sanity/lib/image.ts` → handles Sanity image URLs with `urlFor()`.
- **Studio** mounted at `/studio` via `src/app/studio/[[...tool]]/page.tsx` with `NextStudio`.
- **Type generation** handled with:

  ```bash npm run typegen

  ```

which runs sanity schema extract + sanity typegen generate.

## 🎨 Code Style & Structure

### General

- Use **TypeScript** in all files.
- Use **functional React components** only — avoid classes.
- Prefer **server components** for data fetching (`async function Page()`).
- Use **client components** only when interaction or hooks are required.

### Naming Conventions

- **Directories** → `kebab-case`
- **Files** → match component name (`ButtonPrimary.tsx`)
- **Variables & functions** → `camelCase`
- **Components** → `PascalCase`
- **Sanity schemas** → singular, lowercase (`post`, `siteSettings`)

### Syntax & Formatting

- Use `async/await` for asynchronous logic.
- Use Prettier defaults with 2-space indentation.
- Use double quotes for strings.
- Write explicit return types for exported functions when meaningful.
- Keep imports sorted and organized by path depth.

---

## 🎨 UI & Styling

- Use **Tailwind CSS** with **mobile-first responsive design**.
- Use semantic HTML tags (`<header>`, `<section>`, `<footer>`).
- Keep Tailwind classes minimal and readable; group logically by function (layout, color, typography).
- Prefer component-level composition over CSS overrides.

---

## ⚙️ Sanity Integration Rules

- Never edit `src/sanity/types.ts` manually — it’s generated.
- When updating schemas under `src/sanity/schemaTypes`, run `npm run typegen`.
- Add GROQ queries via `defineQuery()` in `src/sanity/lib/queries.ts`.
- Always export both the query and the associated type.
- Use `sanityFetch({ query, params })` for server components.
- Use `SanityLive` for live content previews.

### Example

```ts
// src/sanity/lib/queries.ts
export const POSTS_QUERY = defineQuery(`
  *[_type == "post"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    mainImage,
    publishedAt
  }
`);
```

## ⚡ Performance & Optimization

- Favor **Server Components** (no `"use client"` unless necessary).
- Wrap client components in `<Suspense>` when async loading.
- Use image optimization via `urlFor(source).width(...).url()`.
- Use ISR or on-demand revalidation for Sanity content updates.

---

## 💡 Developer Workflow

- **Dev:** `npm run dev`
- **Build:** `npm run build && npm run start`
- **Type generation:** `npm run typegen`
- **Studio:** available at `/studio`

### Env vars required

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION`

---

## 🧭 Behavior Guidelines (for AI Agents)

- Understand the project structure before generating code.
- Always respect existing patterns for components, queries, and styling.
- Suggest improvements that simplify or modularize code — not just add more.
- When adding new components or schemas, ensure type safety and query consistency.
- Never add packages unless explicitly requested.
- Prioritize clarity, performance, and maintainability.

```

```
