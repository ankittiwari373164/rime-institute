/**
 * ================================================================
 *  MANOFOX SEO HOOK — rime.co.in  (v2 — Auto-page detection)
 *  File: src/hooks/useSEO.js
 *
 *  HOW AUTO-DETECTION WORKS:
 *  - On first visit to ANY page (e.g. /admission), the hook
 *    calls /api/seo/rime?page=admission
 *  - The Hub auto-creates that page in the DB with real keywords
 *  - Page INSTANTLY appears on your Manofox Dashboard
 *  - No fake default pages, no manual setup needed
 * ================================================================
 */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// ── CONFIG ────────────────────────────────────────────────────────────────────
const MFOX_HUB     = 'https://manofox-seo-hub-v3.vercel.app';
const MFOX_SITE_ID = 'rime';

// ── In-memory cache — slug → seo data ────────────────────────────────────────
const _cache = new Map();

/**
 * pathToSlug — converts React Router pathname to a clean page slug
 * '/admission'     → 'admission'
 * '/seminar-hall'  → 'seminar-hall'
 * '/services/bca'  → 'services-bca'
 * '/'              → 'home'
 */
function pathToSlug(pathname) {
    const clean = pathname
        .replace(/^\//, '')    // remove leading /
        .replace(/\/$/, '')    // remove trailing /
        .replace(/\//g, '-')   // nested paths → dashes
        .toLowerCase()
        .trim();
    return clean || 'home';
}

/**
 * setMeta — create or update a <meta> tag
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
 * setCanonical — update canonical link
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
 * setJsonLd — update Schema.org JSON-LD
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
        '@context' : 'https://schema.org',
        '@graph'   : [
            {
                '@type'       : 'EducationalOrganization',
                '@id'         : 'https://rime.co.in/#organization',
                'name'        : 'Rattan Institute of Management and Engineering',
                'alternateName': 'RIME',
                'url'         : 'https://rime.co.in',
                'description' : seo.description || '',
                'address'     : {
                    '@type'         : 'PostalAddress',
                    'addressLocality': 'Rohtak',
                    'addressRegion' : 'Haryana',
                    'addressCountry': 'IN'
                }
            },
            {
                '@type': 'WebSite',
                '@id'  : 'https://rime.co.in/#website',
                'url'  : 'https://rime.co.in',
                'name' : 'RIME'
            },
            {
                '@type'      : 'WebPage',
                '@id'        : canonical,
                'url'        : canonical,
                'name'       : seo.title || '',
                'description': seo.description || '',
                'isPartOf'   : { '@id': 'https://rime.co.in/#website' }
            }
        ]
    });
}

/**
 * applyAllTags — applies complete SEO data to document.head
 */
function applyAllTags(seo, pathname) {
    const canonical = 'https://rime.co.in' + pathname;
    if (seo.title)      document.title = seo.title;
    setMeta('description', seo.description);
    setMeta('keywords',    seo.keywords);   // ← All 20 trending keywords
    setMeta('robots',      seo.robots || 'index, follow');
    setMeta('googlebot',   seo.robots || 'index, follow');
    setMeta('og:title',       seo.ogTitle       || seo.title,        true);
    setMeta('og:description', seo.ogDescription || seo.description,  true);
    setMeta('og:url',         canonical,                             true);
    setMeta('og:type',        'website',                             true);
    setMeta('og:site_name',   'RIME - Rattan Institute',             true);
    setMeta('twitter:title',       seo.ogTitle       || seo.title);
    setMeta('twitter:description', seo.ogDescription || seo.description);
    setCanonical(canonical);
    setJsonLd(seo, canonical);
}

/**
 * trackVisit — sends analytics to Manofox Hub
 */
function trackVisit(slug) {
    try {
        const ref    = document.referrer || 'Direct';
        const device = /mobile|android|iphone|ipad/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop';
        fetch(`${MFOX_HUB}/api/track`, {
            method   : 'POST',
            headers  : { 'Content-Type': 'application/json' },
            body     : JSON.stringify({ siteId: MFOX_SITE_ID, page: slug, referrer: ref, device }),
            keepalive: true
        }).catch(() => {});
    } catch (_) {}
}

/**
 * useSEO — the main hook
 *
 * USAGE — just one line in any component:
 *   useSEO();
 *
 * It will:
 *  1. Detect the current URL path → slug
 *  2. Hit the Hub → auto-creates the page in DB if first visit
 *  3. The page APPEARS on your Manofox Dashboard immediately
 *  4. Applies all SEO tags + keywords to the page
 *  5. Tracks the visit for analytics
 *
 * Optional manual override:
 *   useSEO('gallery');  // force a specific slug
 */
export function useSEO(manualSlug = null) {
    const location = useLocation();

    useEffect(() => {
        const slug = manualSlug || pathToSlug(location.pathname);

        // Track visit immediately
        trackVisit(slug);

        // Return cached data immediately if available
        if (_cache.has(slug)) {
            applyAllTags(_cache.get(slug), location.pathname);
        }

        // Always fetch fresh in background (Hub has 2h cache anyway)
        const url = `${MFOX_HUB}/api/seo/${encodeURIComponent(MFOX_SITE_ID)}?page=${encodeURIComponent(slug)}`;

        fetch(url)
            .then(r => r.ok ? r.json() : null)
            .then(seo => {
                if (!seo || !seo.title) return;
                _cache.set(slug, seo);
                applyAllTags(seo, location.pathname);
            })
            .catch(() => {
                // Hub unreachable → index.html static tags are still there
            });

    }, [location.pathname, manualSlug]);
}

export { MFOX_SITE_ID, MFOX_HUB };
