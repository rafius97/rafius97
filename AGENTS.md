# Agent Instructions for rafael-portfolio

## Project Context
This is the personal portfolio of Rafael, a **Blockchain & Web3 Developer**. All development, design, and coding suggestions should reflect a professional, modern, and high-quality aesthetic suitable for a Web3 engineering profile, while adhering strictly to the core **Synthwave / Cyberpunk visual theme**.

## Tech Stack
- **Framework:** [Astro](https://astro.build/) (v5)
- **UI Framework:** React (v19) via `@astrojs/react`
- **Styling:** Tailwind CSS (v4) via Vite plugin (`@tailwindcss/vite`)
- **Icons:** Lucide React (`lucide-react`)
- **Linting & Formatting:** [Biome](https://biomejs.dev/) (for JS/TS/JSON) & Prettier (for `.astro` files)

## Project Architecture (`src/` directory)
- **`src/assets/`**: Static assets like images, icons, and fonts.
- **`src/components/`**: Reusable UI components, primarily built with React and styled with Tailwind CSS.
- **`src/layouts/`**: Astro layout components that wrap pages (e.g., base HTML structure, headers, footers).
- **`src/lib/`**: Utility functions, custom hooks, and shared logic.
- **`src/pages/`**: Astro file-based routing. Each `.astro` file here represents a route.
- **`src/styles/`**: Global CSS files (including Tailwind directives).

## Code Style & Conventions

**1. Linting and Formatting (Biome & Prettier)**
- **JavaScript/React:** Formatted and linted strictly via Biome. See `biome.json` for rules.
  - Use **single quotes** for both JS strings and JSX attributes.
  - **Semicolons are mandatory** at the end of statements.
  - Indentation: 2 spaces.
  - Max line width: 80 characters.
  - Imports should be automatically organized.
- **Astro Files:** Formatted using Prettier (`prettier-plugin-astro`).
- **Format Command:** Run `yarn biome:fix` to automatically format all files and fix linting errors.

**2. Tailwind CSS & Styling**
- Tailwind v4 is integrated via the Vite plugin (`@tailwindcss/vite`).
- **Class Sorting:** Tailwind class sorting is enforced strictly via Biome (`"useSortedClasses": "error"`). Ensure classes follow the recommended Tailwind order.
- Use the provided utilities `clsx` and `tailwind-merge` for dynamic or conditional class merging. Use `class-variance-authority` (cva) for building components with complex style variants.

**3. Component Strategy (Island Architecture)**
- Favor React components for interactive UI elements.
- Use Astro components (`.astro`) for static templating, layouts, and pages to keep the client-side JavaScript bundle as small as possible.
- Ensure all interactive React components used in `.astro` files are hydrated appropriately (e.g., using `client:load`, `client:idle`, or `client:visible`).

**4. Design**
- **Theme:** The overarching visual theme is **Synthwave / Cyberpunk**. Ensure designs incorporate elements like neon glows, retro-futuristic grids, synthwave suns, and high-contrast vibrant colors (e.g., hot pinks, neon yellows, cyan) against deep dark backgrounds.
- Maintain a premium, interactive, and dynamic user experience with polished animations (using `tw-animate-css` or similar), smooth gradients, and clean modern typography that complement this retro-futuristic style.
