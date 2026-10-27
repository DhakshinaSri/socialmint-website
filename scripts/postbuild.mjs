// Runs after `vite build`.
// 1. Writes a real HTML file for every route (dist/about/index.html …) with its own
//    <title>, description and canonical URL, so each page is crawlable and opens
//    directly on GitHub Pages with a 200 status instead of a 404.
// 2. Writes dist/404.html (the app shell) so unknown URLs still load the app's
//    "Page not found" screen instead of GitHub's generic error.
// 3. Writes sitemap.xml and robots.txt.
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { loadEnv } from 'vite';
import { routes, notFound } from '../src/data/routes.js';

const env = loadEnv('production', process.cwd(), '');
const siteUrl = (env.VITE_SITE_URL || 'https://dhakshinasri.github.io/socialmint-website').replace(/\/+$/, '');
const dist = path.resolve('dist');
const template = await fs.readFile(path.join(dist, 'index.html'), 'utf8');

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function render({ title, description, url, noindex = false }) {
  const block = `<!--seo:start-->
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(description)}" />
    ${noindex ? '<meta name="robots" content="noindex" />' : `<link rel="canonical" href="${url}" />`}
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="SocialMint" />
    <meta property="og:title" content="${esc(title)}" />
    <meta property="og:description" content="${esc(description)}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${siteUrl}/og-image.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <!--seo:end-->`;
  return template.replace(/<!--seo:start-->[\s\S]*<!--seo:end-->/, block);
}

for (const r of routes) {
  const url = r.path === '/' ? `${siteUrl}/` : `${siteUrl}${r.path}`;
  const html = render({ title: r.title, description: r.description, url });
  const target = r.path === '/' ? path.join(dist, 'index.html') : path.join(dist, r.path, 'index.html');
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.writeFile(target, html);
}

await fs.writeFile(
  path.join(dist, '404.html'),
  render({ title: notFound.title, description: notFound.description, url: `${siteUrl}/`, noindex: true }),
);

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((r) => `  <url><loc>${r.path === '/' ? `${siteUrl}/` : `${siteUrl}${r.path}`}</loc><lastmod>${today}</lastmod></url>`)
  .join('\n')}
</urlset>
`;
await fs.writeFile(path.join(dist, 'sitemap.xml'), sitemap);
await fs.writeFile(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);

console.log(`Post-build complete: ${routes.length} pages, 404.html, sitemap.xml, robots.txt (${siteUrl})`);
