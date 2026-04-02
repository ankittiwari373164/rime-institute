/**
 * ================================================================
 *  MANOFOX SEO HOOK — rime.co.in
 *  File: src/hooks/useSEO.js
 *
 *  Drop this file in your project and import it in every page.
 *  It auto-fetches trending keywords from Manofox Hub and
 *  updates document.title + all meta tags on every route change.
 *  Also tracks page visits for your Manofox Dashboard.
 * ================================================================
 */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// ── CONFIG ────────────────────────────────────────────────────────────────────
const MFOX_HUB     = 'https://manofox-seo-hub-v3.vercel.app'; // ← your hub URL
const MFOX_SITE_ID = 'rime';                                   // ← your site ID

// ── In-memory cache so we don't re-fetch on re-renders ────────────────────────
const _cache = new Map();

// ── Map React Router paths to page slugs ──────────────────────────────────────
// Add or change any path→slug mapping to match your routes
const PATH_TO_SLUG = {
  '/'               : 'home',
  '/about'          : 'about',
  '/admission'      : 'admission',
  '/contact'        : 'contact',
  '/gallery'        : 'gallery',
  '/lab'            : 'lab',
  '/library'        : 'library',
  '/login'          : 'login',
  '/pool'           : 'pool',
  '/program'        : 'program',
  '/seminar-hall'   : 'seminar-hall',
  '/playground'     : 'playground',
};

/**
 * getSeoSlug — converts a React Router pathname to a Manofox page slug
 */
function getSeoSlug(pathname) {
  if (PATH_TO_SLUG[pathname]) return PATH_TO_SLUG[pathname];
  // Auto-convert: '/some-page' → 'some-page'
  const slug = pathname.replace(/^\//, '').replace(/\/$/, '').replace(/\//g, '-') || 'home';
  return slug;
}

/**
 * setMeta — create or update a <meta> tag in document.head
 */
function setMeta(nameOrProp, value, isProp = false) {
  if (!value) return;
  const attr = isProp ? 'property' : 'name';
  let el = document.querySelector(`meta[${attr}="${nameOrProp}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, nameOrProp);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}

/**
 * setCanonical — create or update the canonical link tag
 */
function setCanonical(url) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', url);
}

/**
 * setJsonLd — create or update the Schema.org JSON-LD script tag
 */
function setJsonLd(seo, canonical) {
  let el = document.getElementById('mfox-jsonld');
  if (!el) {
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.id   = 'mfox-jsonld';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify({
    '@context'  : 'https://schema.org',
    '@graph'    : [
      {
        '@type'      : 'EducationalOrganization',
        '@id'        : 'https://rime.co.in/#organization',
        'name'       : 'Rattan Institute of Management and Engineering',
        'url'        : 'https://rime.co.in',
        'description': seo.description || '',
      },
      {
        '@type': 'WebSite',
        '@id'  : 'https://rime.co.in/#website',
        'url'  : 'https://rime.co.in',
        'name' : 'RIME',
      },
      {
        '@type'      : 'WebPage',
        '@id'        : canonical,
        'url'        : canonical,
        'name'       : seo.title || '',
        'description': seo.description || '',
        'isPartOf'   : { '@id': 'https://rime.co.in/#website' },
      },
    ],
  });
}

/**
 * applyAllSeoTags — applies all SEO data to document.head
 */
function applyAllSeoTags(seo, pathname) {
  const canonical = 'https://rime.co.in' + pathname;

  // Title
  if (seo.title) document.title = seo.title;

  // Standard meta
  setMeta('description', seo.description);
  setMeta('keywords',    seo.keywords);           // ← All 20 trending keywords here
  setMeta('robots',      seo.robots || 'index, follow');
  setMeta('googlebot',   seo.robots || 'index, follow');

  // Open Graph
  setMeta('og:title',       seo.ogTitle       || seo.title,       true);
  setMeta('og:description', seo.ogDescription || seo.description, true);
  setMeta('og:url',         canonical,                            true);
  setMeta('og:type',        'website',                            true);
  setMeta('og:site_name',   'RIME - Rattan Institute',            true);

  // Twitter
  setMeta('twitter:title',       seo.ogTitle       || seo.title);
  setMeta('twitter:description', seo.ogDescription || seo.description);

  // Canonical
  setCanonical(canonical);

  // Schema.org JSON-LD
  setJsonLd(seo, canonical);
}

/**
 * trackVisit — sends page visit data to Manofox Hub for analytics
 */
function trackVisit(slug) {
  try {
    const referrer = document.referrer || 'Direct';
    const device   = /mobile|android|iphone|ipad/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop';
    fetch(`${MFOX_HUB}/api/track`, {
      method    : 'POST',
      headers   : { 'Content-Type': 'application/json' },
      body      : JSON.stringify({
        siteId  : MFOX_SITE_ID,
        page    : slug,
        referrer: referrer,
        device  : device,
      }),
      keepalive : true,
    }).catch(() => {});
  } catch (_) {}
}

/**
 * useSEO — the main hook
 *
 * Usage (two options):
 *
 * Option A — Auto-detect page from React Router URL (recommended):
 *   import { useSEO } from '../hooks/useSEO';
 *   function HomePage() {
 *     useSEO();   // auto-detects '/' → slug 'home'
 *     return <div>...</div>;
 *   }
 *
 * Option B — Manual slug override:
 *   useSEO('admission');   // always uses 'admission' slug
 */
export function useSEO(manualSlug = null) {
  const location = useLocation();

  useEffect(() => {
    const slug = manualSlug || getSeoSlug(location.pathname);

    // Track visit immediately (non-blocking)
    trackVisit(slug);

    // Serve from cache if available
    if (_cache.has(slug)) {
      applyAllSeoTags(_cache.get(slug), location.pathname);
      return;
    }

    // Fetch fresh SEO data from Hub
    fetch(`${MFOX_HUB}/api/seo/${encodeURIComponent(MFOX_SITE_ID)}?page=${encodeURIComponent(slug)}`)
      .then(r => r.ok ? r.json() : null)
      .then(seo => {
        if (!seo || !seo.title) return;
        _cache.set(slug, seo);
        applyAllSeoTags(seo, location.pathname);
      })
      .catch(() => {
        // Hub unreachable — fallback meta tags already in index.html
      });

  }, [location.pathname, manualSlug]);
}

export { MFOX_SITE_ID, MFOX_HUB };
