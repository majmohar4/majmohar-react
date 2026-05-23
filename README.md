# majmohar-react

Source for [majmohar.eu](https://majmohar.eu) — my personal site. EN/SLO, single page, built with Vite + React + TypeScript and deployed on Vercel.

## What's here

- A landing section with a static name and a rotating role line.
- About + photo + two embedded YouTube videos (lazy-loaded via `lite-youtube-embed`).
- Skills grid grouped into _learning_, _used_, _frameworks_, _tools_.
- A CV section that previews the PDF inline and opens a fullscreen modal on click. EN and SLO PDFs swap with the language.
- Projects grid — click a card to expand and read the problem / solution.
- Friends section and a footer with contact, sitemap, and socials.
- A glass-style nav pill, an animated language switch (EN ↔ SLO), and a mobile dropdown menu.

## Stack

- Vite 5, React 18, TypeScript
- Tailwind CSS, a slice of Radix primitives via shadcn/ui
- Framer Motion for the section transitions and the language switch slider
- React Router v7 for the 404, `react-scroll` for in-page links
- `vite-plugin-compression` for gzipped assets

## Running locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build to dist/
npm run preview    # preview the built bundle
npm run lint
```

Node 18+ recommended.

## Project layout

```
src/
  components/   Hero, About, Skills, CVPreview, Projects, Friends, Footer,
                Navbar, LanguageToggle, ui/ (shadcn primitives)
  contexts/     LanguageContext — EN/SLO, persisted to localStorage
  hooks/        useActiveSection (IntersectionObserver), use-mobile, use-toast
  pages/        Index (composed page), NotFound
  lang.ts       All translation strings
  index.css     Theme tokens, glass utility, custom keyframes
public/
  files/        images, icons, CV PDFs
```

All copy lives in `src/lang.ts`. Adding a new project = adding a `project-N` block under both `EN.projects` and `SLO.projects`. Anything keyed `project-*` is picked up automatically by the projects grid.

## Deployment

Pushed to `main` → Vercel builds with `npm run build` and serves `dist/`. There is no server-side code; everything is static.

## License

All rights reserved © Maj Mohar. Code is published for reference, not reuse.
