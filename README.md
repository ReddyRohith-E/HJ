# Harsha Jewellers — Static Landing Page

A fast, mobile-first static landing page built with Vite + React. It presents the brand hero, collections, and a contact form for inquiries. The project is intended for static hosting (Netlify, GitHub Pages, etc.).

## Quick Start

Requirements: Node 18 or newer

Development:

```powershell
npm install
npm run dev
```

Build for production:

```powershell
npm run build
npm run preview
```

## Project Structure (key files)

- [src/App.jsx](src/App.jsx) — App shell: `Navbar` → `Home` sections → `Footer`
- [src/pages/Home.jsx](src/pages/Home.jsx) — Hero, About, Collections, Contact
- [src/components/ContactForm.jsx](src/components/ContactForm.jsx) — Accessible contact form
- [src/components/DeviceProvider.jsx](src/components/DeviceProvider.jsx) — Device/layout helpers
- [src/index.css](src/index.css) and [src/App.css](src/App.css) — Global and layout styles
- [public/prices.json](public/prices.json) — Example data used in the site

## Contact form

The contact form is client-side and requires an endpoint to submit. To connect Formspree (example):

1. Create a Formspree form and copy the endpoint (e.g. `https://formspree.io/f/xxxxxx`).
2. Add a `.env` file at the project root with:

```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxx
```

Restart the dev server after adding environment variables.

## Deployment

- Netlify: Connect the repo, build command `npm run build`, publish directory `dist`.
- GitHub Pages: Build locally and publish the `dist` folder to a `gh-pages` branch or use a GH Action.

## Notes & Next Steps

- Replace placeholder images with final brand assets (logo, product shots).
- Add a CI workflow for automatic deploys and a sitemap/robots.txt for SEO.
- Run Lighthouse audits and tune performance/accessibility as needed.

If you want, I can add a `netlify.toml` or a GitHub Actions workflow next.
