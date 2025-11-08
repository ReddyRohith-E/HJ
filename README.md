# Harsha Jewellers — Static Landing Page

A fast, mobile-first static website for Harsha Jewellers. It showcases the brand hero, collections, and a contact form for inquiries.

## Overview

- Single-page static site (no login/cart or backend)
- Optimized for desktop, iPhone 13/14, and Android Compact
- Clean, elegant UI with Royal Gold and Deep Maroon branding

### Core sections

- Hero with tagline: “Your satisfaction is our priority.”
- About brand
- Collections grid (Rings, Necklaces, Bangles, Earrings)
- Contact form (client-side validation; Formspree-ready)

### Non-functional goals

- Load fast (< 1.5s target on broadband)
- HTTPS-ready for static hosting (Netlify, GitHub Pages)
- SEO-friendly metadata and accessible structure (WCAG 2.1)

## Tech stack

- Vite + React 19 (SWC)
- No router at runtime; single page layout
- Minimal dependencies to keep bundle small

## Getting started

Requirements: Node 18+

Development:

```powershell
npm install
npm run dev
```

Production build:

```powershell
npm run build
npm run preview
```

## Contact form setup

By default, the contact form is visible but won’t submit anywhere until you set an endpoint.

1. Create a Formspree form and copy the endpoint URL (e.g., `https://formspree.io/f/xxxxxx`).
2. Create a `.env` file in the project root:

```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxx
```

Restart the dev server for changes to take effect. The form performs basic validation and shows status messages inline.

## Accessibility & SEO

- Headings use serif; body uses sans-serif for legibility
- Color contrast meets guidelines; buttons are touch-friendly
- Landmarks, labels, and `aria-live` status in contact form
- `<meta>` description, theme color, fonts preconnect are included in `index.html`

## Deployment

### Netlify

1. Push this repo to GitHub.
2. In Netlify, create a new site from Git and select this repo.
3. Build command: `npm run build` — Publish directory: `dist`.

### GitHub Pages

1. Build locally: `npm run build`.
2. Publish the `dist` folder to the `gh-pages` branch (or use an action like `peaceiris/actions-gh-pages`).

## Project structure

- `src/App.jsx` — Single-page shell (Navbar → Home sections → Footer)
- `src/pages/Home.jsx` — Hero, About, Collections, Contact sections
- `src/components/ContactForm.jsx` — Accessible form with validation
- `src/components/DeviceProvider.jsx` — Adds `layout-...` class for iOS/Android tweaks
- `src/index.css` — Global theme and utilities
- `src/App.css` — Section and layout styling

## Notes & next steps

- Replace Unsplash images with final brand assets (SVG logo, product shots)
- Add a deploy workflow (Netlify or GitHub Pages) and sitemap/robots.txt
- Continue auditing with Lighthouse for performance and accessibility
