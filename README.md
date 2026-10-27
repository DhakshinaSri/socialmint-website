# SocialMint website

Corporate website for SocialMint, built with React 18, React Router and Vite. All copy comes from `SocialMint.docx`.

## Run in VS Code

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
npm run preview    # preview the production build
```

Requires Node.js 18 or newer.

## Pages

| URL | Page |
| --- | --- |
| `/` | Home |
| `/about` | About Us |
| `/services` | Our Services |
| `/marketing-analytics` | Marketing Analytics |
| `/industries` | Industries We Serve |
| `/why-choose-socialmint` | Why Choose SocialMint? |
| `/how-we-work` | How We Work |
| `/faq` | Frequently Asked Questions |
| `/contact` | Contact Us |

## Deploying to GitHub Pages (fixes the earlier 404 problem)

The earlier problem happened because a project site lives at
`https://<user>.github.io/<repo-name>/`, but the app was built as if it lived at the root (`/`).
This project handles that in three places:

1. **`VITE_BASE` in `.env`** sets the sub-folder. It must equal your repository name:
   `VITE_BASE=/socialmint-website/`. For another demo, change it to `/<new-repo-name>/`.
   Also update `VITE_SITE_URL` to the full public URL.
2. **The router** (`src/main.jsx`) uses the same base, so `/socialmint-website/about` opens the About page.
3. **`npm run build`** (`scripts/postbuild.mjs`) writes a real `index.html` for every page
   (`dist/about/index.html`, …) plus `dist/404.html`, so opening or refreshing any page directly works on GitHub Pages.

Steps:

1. Create a repository named `socialmint-website` (or change `VITE_BASE` to match your name) and push this project to `main`.
2. In the repository: **Settings → Pages → Source: GitHub Actions**.
3. The included workflow `.github/workflows/deploy.yml` builds and deploys on every push to `main`.
4. Open `https://dhakshinasri.github.io/socialmint-website/`.

Each demo needs its own repository and its own `VITE_BASE`. Because every site lives under its own
`/<repo-name>/` path, a new demo no longer replaces the previous one.

## Enquiry form

The form validates in the browser. To receive submissions, create a free form endpoint
(for example at formspree.io) and put its URL in `VITE_FORM_ENDPOINT` in `.env`, then rebuild.
Without an endpoint the form only shows the confirmation message and sends nothing.

## Project structure

```
index.html              HTML shell, meta tags, Organization JSON-LD
public/                 favicon, social preview image, logo, .nojekyll
scripts/postbuild.mjs   per-page HTML, 404.html, sitemap.xml, robots.txt
src/data/content.js     all website copy (edit text here)
src/data/routes.js      page paths, titles and meta descriptions
src/components/         Header, Footer, Layout, PageHero, Logo, icons
src/pages/              one file per page
src/styles.css          design tokens (palette) and styles
```

## Accessibility and SEO

- Skip link, landmarks, one `h1` per page, logical heading order, breadcrumbs.
- Visible focus styles, keyboard-operable menu and FAQ, `prefers-reduced-motion` respected.
- Text colours meet WCAG AA contrast on white and light backgrounds.
- Per-page title, description and canonical URL, Open Graph tags, `sitemap.xml`, `robots.txt`, FAQ structured data.
- Self-hosted Plus Jakarta Sans (medium 500 body, bold headings), no external font requests.
