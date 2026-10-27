import { useEffect } from 'react';

const SITE_URL = (import.meta.env.VITE_SITE_URL || '').replace(/\/+$/, '');

function setMeta(selector, attr, value, create) {
  let el = document.head.querySelector(selector);
  if (!el && create) {
    el = document.createElement(create.tag);
    Object.entries(create.attrs).forEach(([k, v]) => el.setAttribute(k, v));
    document.head.appendChild(el);
  }
  if (el) el.setAttribute(attr, value);
}

// Keeps <title>, description, canonical and social tags in sync when navigating
// between pages inside the single-page app.
export default function useSeo({ title, description, path = '/', noindex = false }) {
  useEffect(() => {
    const url = `${SITE_URL}${path === '/' ? '/' : path}`;
    document.title = title;
    setMeta('meta[name="description"]', 'content', description, { tag: 'meta', attrs: { name: 'description' } });
    setMeta('link[rel="canonical"]', 'href', url, { tag: 'link', attrs: { rel: 'canonical' } });
    setMeta('meta[property="og:title"]', 'content', title, { tag: 'meta', attrs: { property: 'og:title' } });
    setMeta('meta[property="og:description"]', 'content', description, {
      tag: 'meta',
      attrs: { property: 'og:description' },
    });
    setMeta('meta[property="og:url"]', 'content', url, { tag: 'meta', attrs: { property: 'og:url' } });

    let robots = document.head.querySelector('meta[name="robots"]');
    if (noindex) {
      if (!robots) {
        robots = document.createElement('meta');
        robots.setAttribute('name', 'robots');
        document.head.appendChild(robots);
      }
      robots.setAttribute('content', 'noindex');
    } else if (robots) {
      robots.remove();
    }
  }, [title, description, path, noindex]);
}

import { routes } from '../data/routes.js';

export function usePageSeo(key) {
  const r = routes.find((x) => x.key === key);
  useSeo({ title: r.title, description: r.description, path: r.path });
}
