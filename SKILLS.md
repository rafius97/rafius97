# AI Skill Mapping for rafael-portfolio

This document maps the installed AI skills in the `.agents/skills` directory to the specific technological and architectural needs of the `rafael-portfolio` project. It complements `AGENTS.md` by defining *when* and *how* AI agents should utilize specialized skills based on the context of the work.

## Installed Skills & Project Mapping

### 1. Astro Skill (`astro`)
- **Location:** `.agents/skills/astro`
- **Purpose:** Mastery of the Astro web framework (v5).
- **Application in Source Code:** 
  - **`src/pages/**/*.astro`:** Use for static site generation (SSG), file-based routing, and page-level formatting.
  - **`src/layouts/**/*.astro`:** Use for creating base HTML structures, headers, and footers.
  - **Overall Architecture:** Use for configuring `astro.config.mjs`, setting up content collections, and managing the "Islands Architecture" when embedding React components.

### 2. Frontend Design Skill (`frontend-design`)
- **Location:** `.agents/skills/frontend-design`
- **Purpose:** Creating distinctive, production-grade frontend interfaces that avoid generic AI aesthetics.
- **Application in Source Code:**
  - **`src/components/**/*.tsx`:** Use when building interactive, high-quality React components. 
  - **Aesthetic Enforcement:** Directly supports the **Synthwave / Cyberpunk** theme defined in `AGENTS.md`. Apply this skill when designing neon glows, retro-futuristic grids, and vibrant UI elements.

### 3. Tailwind Best Practices (`tailwind-best-practices`)
- **Location:** `.agents/skills/tailwind-best-practices`
- **Purpose:** Guidelines for writing, reviewing, or refactoring Tailwind CSS classes to ensure design system consistency.
- **Application in Source Code:**
  - **`src/components/**/*.tsx` & `src/pages/**/*.astro`:** Use when styling elements globally.
  - **Code Style Enforcement:** Adhere strictly to these best practices when utilizing `clsx` or `tailwind-merge` for dynamic classes, and align with Biome's strict sorting rules (`useSortedClasses`).

### 4. Shadcn UI (`shadcn-ui`)
- **Location:** `.agents/skills/shadcn-ui`
- **Purpose:** Expert guidance for integrating, customizing, and building applications with shadcn/ui components.
- **Application in Source Code:**
  - **`src/components/ui/**/*.tsx`:** Use when scaffolding base UI elements (buttons, inputs, dialogs, cards).
  - **Aesthetic Enforcement:** Ensure all installed shadcn/ui components are heavily customized to fit the Synthwave/Cyberpunk theme (e.g., adding glowing borders, neon text colors, and overriding standard shadcn variables with the project's retro-futuristic dark mode palette).

---

## Application Workflow: Blockchain vs. Frontend Components

To maintain separation of concerns and high-quality deliverables, agents should apply the above skills differently based on the type of component being developed:

### Working on Web3 / Blockchain Components
When working on components that interact with smart contracts, wallets, or Web3 data (e.g., DeFi integrations, Chainlink data feeds):
- **Primary Focus:** Security, reliable state management, and clear data visualization.
- **Skill Usage:**
  - **`shadcn-ui`:** Heavily rely on accessible, structured shadcn components (like Cards, Tables, and Tooltips) for complex Web3 data, customizing them so they don't break the thematic immersion.
  - **`frontend-design`:** Apply selectively to ensure data (like balances or contract states) is displayed elegantly within the Synthwave/Cyberpunk theme without overwhelming the user. Focus on data clarity (e.g., using glowing text for important metrics).
  - *Note:* While UI is important, prioritize the logically robust integration using React (e.g., custom hooks in `src/lib/`) over purely aesthetic, distracting animations.

### Working on Frontend / UI Presentation Components
When working on visual elements, landing pages, or purely aesthetic interactive features (e.g., hero sections, animated backgrounds):
- **Primary Focus:** High-end visual impact, smooth animations, and strict adherence to the Synthwave/Cyberpunk aesthetic.
- **Skill Usage:**
  - **`astro`:** Leverage heavily for page routing and ensuring the base HTML shell is optimized for performance.
  - **`frontend-design`:** Utilize to its maximum extent. This is where retro grids, neon lighting, sunburst effects, and custom animations (`tw-animate-css`) come to life. 
  - **`shadcn-ui`:** Use as the foundation for complex interactive elements (like Dialogs, Dropdowns, Carousels), ensuring their standard CSS variables are reconfigured to output vibrant, retro-futuristic styles instead of generic Web2 minimalism.
  - **`tailwind-best-practices`:** Use to maintain clean, scalable CSS properties, preventing utility-class bloat while achieving complex gradients and glows.
