# majmohar-react

Personal portfolio for **Maj Mohar** — software engineer, musician, radio amateur (S59MU).
Live: <https://majmohar.eu>

## Stack
- Vite + React 18 + TypeScript
- Tailwind CSS + Radix UI primitives
- Framer Motion for animations
- React Router v7 + `react-scroll` for in-page nav
- `lite-youtube-embed` for fast video embeds
- `vite-plugin-compression` (gzip output)

## Scripts
```bash
npm install
npm run dev        # local dev server
npm run build      # production build to dist/
npm run preview    # preview built bundle
npm run lint       # eslint
```

## Project layout
```
src/
  components/   UI sections (Hero, About, Skills, Projects, Friends, CV, Footer, Navbar)
  contexts/     LanguageContext (EN / SLO)
  hooks/        useActiveSection, use-mobile, use-toast
  lib/          shared helpers
  pages/        Index, NotFound
  lang.ts       translation strings
```

Static assets live in `public/files/` (images, icons, PDFs).

## License
All rights reserved © Maj Mohar.
