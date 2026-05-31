# Astro Basics — Project README

This repository is an Astro "basics" starter template — a minimal, component-first structure you can extend into a personal site or portfolio.

Below is a short guide to the project's structure, the common tasks you'll run during development, and a few tips to customize styling and add pages or components.

## Project structure (key files)

Top-level layout:

- `public/` — static assets served as-is (icons, images, etc.).
- `src/pages/` — route-driven pages. Each `.astro` file becomes a route (for example `src/pages/index.astro` → `/`).
- `src/layouts/` — page layout components. `Layout.astro` is used to wrap pages with common HTML (head, nav, footer).
- `src/components/` — small UI components written as `.astro` files.
- `src/ui/` — example React/JSX components (for isolated UI pieces, e.g. `button.tsx`).
- `src/styles/` — global and modular CSS files (this project includes `src/styles/global.css`).
- `src/assets/` — images and other media used by the site.
- `src/lib/` — small utility modules, helpers, or data-loading functions.
- `src/content/` — content data (this project includes a `projects/` folder to hold project metadata).
- `package.json`, `tsconfig.json`, and `biome.json` — project config, typescript and linter/formatter settings.

## Run & develop

Install dependencies and run the dev server from the project root:

```bash
yarn install
yarn dev
```

Common commands (also shown in `package.json`):

- `yarn dev` — start local dev server (Astro dev mode)
- `yarn build` — build a production bundle into `./dist`
- `yarn preview` — preview production build locally
- `yarn astro -- --help` — Astro CLI help

If you prefer npm or pnpm, replace `yarn` with `npm`/`pnpm` accordingly.

## Styling

- Global stylesheet: `src/styles/global.css` contains global variables and Tailwind-style directives used by the template. If you want these rules to apply site-wide, import the stylesheet in your layout's frontmatter (for example in `src/layouts/Layout.astro`):

```astro
---
import "@styles/global.css";
---
```

- Tailwind: this starter may reference Tailwind/PostCSS directives (e.g. `@apply`, `@tailwind`). These are processed at build time by PostCSS + Tailwind. If you see linter warnings like "unknown at rule @apply", it's usually because your editor/linter is not configured to accept Tailwind at-rules or PostCSS is not set up. To enable Tailwind, add `postcss.config.cjs` and `tailwind.config.cjs` and install the `tailwindcss` and `autoprefixer` packages.

## Adding pages & components

- Pages: create `src/pages/about.astro` to add a new route `/about`.
- Layouts: reuse or modify `src/layouts/Layout.astro` to change the site shell (head tags, meta, navigation).
- Components: create small, focused components in `src/components/` and import them into pages or layouts.

Example: a simple page using the layout

```astro
---
import Layout from '@layouts/Layout.astro'
---
<Layout>
  <main>
    <h1>Hello</h1>
    <p>Your new page</p>
  </main>
</Layout>
```

## Linting, formatting & Biome

This template includes `biome.json` which configures Biome for formatting and linting. Biome (or your editor) may warn about Tailwind at-rules like `@apply`; you can configure Biome or Stylelint to ignore those rules, or add a `.stylelintrc.cjs` that whitelists Tailwind at-rules.

If you want, I can add a small `postcss.config.cjs` + `tailwind.config.cjs` and a Biome-safe stylelint configuration to make `@apply` warnings go away — tell me and I'll add them.

## Deploy

Astro outputs a static site in `dist/` after `yarn build`. You can deploy the `dist/` folder to any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages, etc.). See the Astro docs for platform-specific guides.

## Next steps & suggestions

- Add your personal content in `src/content/projects/` and update the UI to list them.
- Install Tailwind + PostCSS if you want full Tailwind support.
- Add tests or a small CI workflow to run `yarn build` and `yarn biome:check` on push.

If you'd like, I can:

- scaffold Tailwind/PostCSS and a working `postcss.config.cjs` and `tailwind.config.cjs`;
- configure Biome/stylelint so `@apply` is ignored;
- or wire up a GitHub Actions workflow to run build + lint on PRs.

Happy building — tell me what you'd like next.
