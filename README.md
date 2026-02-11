## IanFrye.dev – Portfolio

A modern, responsive developer portfolio for **Ian Frye – Full Stack Software Developer & Programmer Analyst**.  
Built with **React 19**, **TanStack Start/Router**, and **Tailwind CSS 4**, it showcases experience, projects, skills, and ways to get in touch.

### Live site

- **Production**: `https://ianfrye.dev`
- **Repo**: `https://github.com/ianfrye0818/personal-site`

---

## Tech stack

- **Frontend framework**: React 19, TypeScript
- **App framework**: TanStack Start, TanStack Router (file-based routing, SSR-ready)
- **Styling**: Tailwind CSS 4, custom design tokens, utility-first layout
- **UI components**: Radix UI primitives, custom components inspired by shadcn/ui
- **Tooling**: Vite, Vitest, Testing Library, TypeScript, `vite-tsconfig-paths`

---

## Features

- **Hero section** with concise summary, location, and hiring availability
- **About section** with background story, quick facts, and personal interests
- **Work experience timeline** highlighting enterprise **Programmer Analyst** role plus prior experience
- **Featured projects** (Praise Pal, Resume Builder, Pulse Vote, Abode Hunt, VanLife, Quizzical, etc.)
  - Each project shows tech stack, preview image, live link and/or demo video
- **Tech stack grid** with logos for core technologies (React, TypeScript, NestJS, PostgreSQL, SQL Server, Docker, C#, .NET, etc.)
- **Testimonials & contact** section with email, phone, and social links
- **Dark / light mode** with persisted preference and system-theme support
- **SEO metadata & social cards** (Open Graph + Twitter)

---

## Getting started

### Prerequisites

- Node.js (LTS recommended)
- `pnpm` installed globally (`npm install -g pnpm`)

### Install dependencies

```bash
pnpm install
```

### Run the dev server

```bash
pnpm dev
```

The app will start on `http://localhost:3000`.

### Build for production

```bash
pnpm build
```

### Preview the production build

```bash
pnpm preview
```

### Test & typecheck

```bash
pnpm test       # Vitest test suite
pnpm typecheck  # TypeScript type checking
```

---

## Project structure

- `src/routes` – TanStack Router file-based routes (root layout + pages)
- `src/components` – Reusable UI components and page sections
- `src/providers` – App-wide providers (e.g. theme)
- `src/lib` – Data definitions, types, and utilities
- `src/styles.css` – Tailwind 4 setup, custom design tokens, and global styles

---

## Theming & design

- Uses CSS custom properties (OKLCH) for **background**, **foreground**, **card**, **primary**, and more
- Tailwind 4 `@theme` + `@layer` to map tokens to utility classes
- Dark mode driven by a custom `ThemeProvider`:
  - Respects system preference (`light` / `dark`)
  - Persists user choice in `localStorage`
  - Applies `dark` class on the root element for Tailwind’s `dark:` variants

---

## Contact

- **Website**: `https://ianfrye.dev`
- **GitHub**: `https://github.com/ianfrye0818`
- **LinkedIn**: `https://www.linkedin.com/in/ianfrye3/`
- **Twitter/X**: `https://twitter.com/ianfrye818`
- **Email**: `ianfrye.dev@gmail.com`

If you’re interested in working together or have questions about the implementation, feel free to open an issue or reach out directly.

