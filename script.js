/**
 * ashiqur.in apps - Site-wide Configuration + Shared Helpers
 * =============================================================
 * Both index.html (Home) and apps/index.html (All Apps) load this
 * file. It is the SINGLE place the site's brand, nav, and footer
 * live - edit SITE_CONFIG below and both pages update together.
 *
 * It also renders the shared header/footer (so the two "tabs" -
 * Home and All Apps - always show the same nav and highlight
 * whichever one is active) and ships the same fallback avatar mark
 * and asset-loading helpers used by the per-app landing page
 * template, so a missing logo/icon never shows a broken image.
 *
 * This file does NOT list the apps themselves - that lives in
 * /apps/apps.data.js. Add a new app there; you should not need to
 * touch this file for that.
 */

window.SITE_CONFIG = {
  siteName: 'ashiqur',
  tagline: 'Small, focused apps.',
  homeUrl: 'https://apps.ashiqur.in/',
  appsUrl: 'https://apps.ashiqur.in/apps/',

  // Same accent/theme convention as the per-app template - change
  // here to re-theme the whole site (Home + All Apps) at once.
  accentColor: '#2F6FED',
  themeColor: '#F4F5F0',
  themeColorDark: '#14161A',

  author: { name: 'Ashiqur Rahman', alternateName: 'ashiqur' },

  // Site-wide brand assets. Any absolute URL, relative path, or
  // data: URI works. Leave as-is (unset) to use the built-in avatar
  // mark everywhere - upload real files and fill these in any time,
  // nothing else needs to change.
  assets: {
    favicon: '/assets/favicon.png',
    logo: '/assets/logo.png'
  },

  // Rendered in the header of BOTH pages, in this order. `url` is
  // matched against the current page to highlight the active tab.
  nav: [
    { label: 'Home', url: 'https://apps.ashiqur.in/' },
    { label: 'All Apps', url: 'https://apps.ashiqur.in/apps/' }
  ],

  footer: {
    copyrightText: '\u00A9 2026 ashiqur.',
    // Shown centered below the nav row. Not automatic - update by
    // hand when the site actually changes. Leave '' to hide it.
    updatedText: 'Last updated: August 2026'
  }
};

(function () {
  var DEFAULT_MARK_SVG = `<svg class="app-default-mark" viewBox="2 2 28 28" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges" role="img" aria-label="Pixel portrait of Ashiqur Rahman">
<style>
  .app-default-mark { --auto-fill: #2d4159; }
  @media (prefers-color-scheme: dark) {
    .app-default-mark { --auto-fill: #e8ecf2; }
  }
</style>
<g fill="var(--accent, var(--auto-fill))" transform="translate(16,15) scale(0.85) translate(-16,-16.5)">
<rect x="14" y="0" width="1" height="1" fill-opacity="0.01"/>
<rect x="12" y="1" width="1" height="1" fill-opacity="0.01"/>
<rect x="16" y="1" width="2" height="1" fill-opacity="0.01"/>
<rect x="11" y="2" width="1" height="1" fill-opacity="0.01"/>
<rect x="13" y="2" width="1" height="1" fill-opacity="0.04"/>
<rect x="14" y="2" width="1" height="1" fill-opacity="0.13"/>
<rect x="15" y="2" width="1" height="1" fill-opacity="0.08"/>
<rect x="10" y="3" width="1" height="1" fill-opacity="0.01"/>
<rect x="12" y="3" width="1" height="1" fill-opacity="0.17"/>
<rect x="13" y="3" width="1" height="1" fill-opacity="0.85"/>
<rect x="14" y="3" width="1" height="1" fill-opacity="0.98"/>
<rect x="15" y="3" width="1" height="1" fill-opacity="0.93"/>
<rect x="16" y="3" width="1" height="1" fill-opacity="0.72"/>
<rect x="17" y="3" width="1" height="1" fill-opacity="0.25"/>
<rect x="9" y="4" width="1" height="1" fill-opacity="0.01"/>
<rect x="11" y="4" width="1" height="1" fill-opacity="0.17"/>
<rect x="12" y="4" width="1" height="1" fill-opacity="0.91"/>
<rect x="13" y="4" width="4" height="1"/>
<rect x="17" y="4" width="1" height="1" fill-opacity="0.98"/>
<rect x="18" y="4" width="1" height="1" fill-opacity="0.13"/>
<rect x="20" y="4" width="1" height="1" fill-opacity="0.01"/>
<rect x="9" y="5" width="1" height="1" fill-opacity="0.01"/>
<rect x="11" y="5" width="1" height="1" fill-opacity="0.71"/>
<rect x="12" y="5" width="1" height="1"/>
<rect x="13" y="5" width="1" height="1" fill-opacity="0.98"/>
<rect x="14" y="5" width="2" height="1"/>
<rect x="16" y="5" width="1" height="1" fill-opacity="0.97"/>
<rect x="17" y="5" width="1" height="1"/>
<rect x="18" y="5" width="1" height="1" fill-opacity="0.41"/>
<rect x="20" y="5" width="1" height="1" fill-opacity="0.02"/>
<rect x="9" y="6" width="1" height="1" fill-opacity="0.01"/>
<rect x="11" y="6" width="1" height="1" fill-opacity="0.53"/>
<rect x="12" y="6" width="1" height="1"/>
<rect x="13" y="6" width="1" height="1" fill-opacity="0.99"/>
<rect x="14" y="6" width="2" height="1"/>
<rect x="16" y="6" width="1" height="1" fill-opacity="0.98"/>
<rect x="17" y="6" width="1" height="1"/>
<rect x="18" y="6" width="1" height="1" fill-opacity="0.54"/>
<rect x="20" y="6" width="1" height="1" fill-opacity="0.02"/>
<rect x="12" y="7" width="1" height="1" fill-opacity="0.84"/>
<rect x="13" y="7" width="1" height="1"/>
<rect x="14" y="7" width="1" height="1" fill-opacity="0.99"/>
<rect x="15" y="7" width="1" height="1"/>
<rect x="16" y="7" width="1" height="1" fill-opacity="0.98"/>
<rect x="17" y="7" width="1" height="1"/>
<rect x="18" y="7" width="1" height="1" fill-opacity="0.45"/>
<rect x="20" y="7" width="1" height="1" fill-opacity="0.02"/>
<rect x="11" y="8" width="1" height="1" fill-opacity="0.03"/>
<rect x="12" y="8" width="1" height="1" fill-opacity="0.83"/>
<rect x="13" y="8" width="1" height="1"/>
<rect x="14" y="8" width="1" height="1" fill-opacity="0.99"/>
<rect x="15" y="8" width="2" height="1"/>
<rect x="17" y="8" width="1" height="1" fill-opacity="0.96"/>
<rect x="18" y="8" width="1" height="1" fill-opacity="0.13"/>
<rect x="20" y="8" width="1" height="1" fill-opacity="0.01"/>
<rect x="10" y="9" width="2" height="1" fill-opacity="0.01"/>
<rect x="12" y="9" width="1" height="1" fill-opacity="0.66"/>
<rect x="13" y="9" width="2" height="1" fill-opacity="0.99"/>
<rect x="15" y="9" width="1" height="1" fill-opacity="0.98"/>
<rect x="16" y="9" width="1" height="1"/>
<rect x="17" y="9" width="1" height="1" fill-opacity="0.56"/>
<rect x="19" y="9" width="1" height="1" fill-opacity="0.01"/>
<rect x="10" y="10" width="1" height="1" fill-opacity="0.02"/>
<rect x="12" y="10" width="1" height="1" fill-opacity="0.48"/>
<rect x="13" y="10" width="1" height="1"/>
<rect x="14" y="10" width="1" height="1" fill-opacity="0.98"/>
<rect x="15" y="10" width="2" height="1"/>
<rect x="17" y="10" width="1" height="1" fill-opacity="0.17"/>
<rect x="18" y="10" width="1" height="1" fill-opacity="0.02"/>
<rect x="19" y="10" width="1" height="1" fill-opacity="0.01"/>
<rect x="10" y="11" width="1" height="1" fill-opacity="0.02"/>
<rect x="12" y="11" width="1" height="1" fill-opacity="0.04"/>
<rect x="13" y="11" width="1" height="1" fill-opacity="0.26"/>
<rect x="14" y="11" width="1" height="1" fill-opacity="0.87"/>
<rect x="15" y="11" width="2" height="1"/>
<rect x="17" y="11" width="1" height="1" fill-opacity="0.33"/>
<rect x="20" y="11" width="1" height="1" fill-opacity="0.02"/>
<rect x="21" y="11" width="1" height="1" fill-opacity="0.01"/>
<rect x="11" y="12" width="1" height="1" fill-opacity="0.01"/>
<rect x="12" y="12" width="1" height="1" fill-opacity="0.2"/>
<rect x="13" y="12" width="1" height="1" fill-opacity="0.58"/>
<rect x="14" y="12" width="2" height="1" fill-opacity="0.99"/>
<rect x="16" y="12" width="1" height="1"/>
<rect x="17" y="12" width="1" height="1" fill-opacity="0.92"/>
<rect x="18" y="12" width="1" height="1" fill-opacity="0.36"/>
<rect x="19" y="12" width="1" height="1" fill-opacity="0.05"/>
<rect x="22" y="12" width="1" height="1" fill-opacity="0.01"/>
<rect x="8" y="13" width="1" height="1" fill-opacity="0.01"/>
<rect x="10" y="13" width="1" height="1" fill-opacity="0.4"/>
<rect x="11" y="13" width="1" height="1" fill-opacity="0.82"/>
<rect x="12" y="13" width="7" height="1"/>
<rect x="19" y="13" width="1" height="1" fill-opacity="0.88"/>
<rect x="20" y="13" width="1" height="1" fill-opacity="0.56"/>
<rect x="21" y="13" width="1" height="1" fill-opacity="0.15"/>
<rect x="7" y="14" width="1" height="1" fill-opacity="0.01"/>
<rect x="9" y="14" width="1" height="1" fill-opacity="0.53"/>
<rect x="10" y="14" width="3" height="1"/>
<rect x="13" y="14" width="1" height="1" fill-opacity="0.99"/>
<rect x="14" y="14" width="4" height="1"/>
<rect x="18" y="14" width="1" height="1" fill-opacity="0.99"/>
<rect x="19" y="14" width="2" height="1"/>
<rect x="21" y="14" width="1" height="1" fill-opacity="0.95"/>
<rect x="22" y="14" width="1" height="1" fill-opacity="0.26"/>
<rect x="24" y="14" width="1" height="1" fill-opacity="0.01"/>
<rect x="6" y="15" width="1" height="1" fill-opacity="0.01"/>
<rect x="8" y="15" width="1" height="1" fill-opacity="0.15"/>
<rect x="9" y="15" width="1" height="1"/>
<rect x="10" y="15" width="2" height="1" fill-opacity="0.99"/>
<rect x="12" y="15" width="8" height="1"/>
<rect x="20" y="15" width="1" height="1" fill-opacity="0.97"/>
<rect x="21" y="15" width="1" height="1"/>
<rect x="22" y="15" width="1" height="1" fill-opacity="0.78"/>
<rect x="24" y="15" width="1" height="1" fill-opacity="0.01"/>
<rect x="6" y="16" width="1" height="1" fill-opacity="0.02"/>
<rect x="8" y="16" width="1" height="1" fill-opacity="0.42"/>
<rect x="9" y="16" width="1" height="1"/>
<rect x="10" y="16" width="1" height="1" fill-opacity="0.98"/>
<rect x="11" y="16" width="11" height="1"/>
<rect x="22" y="16" width="1" height="1" fill-opacity="0.91"/>
<rect x="23" y="16" width="1" height="1" fill-opacity="0.05"/>
<rect x="6" y="17" width="1" height="1" fill-opacity="0.02"/>
<rect x="8" y="17" width="1" height="1" fill-opacity="0.51"/>
<rect x="9" y="17" width="1" height="1"/>
<rect x="10" y="17" width="2" height="1" fill-opacity="0.98"/>
<rect x="12" y="17" width="1" height="1" fill-opacity="0.99"/>
<rect x="13" y="17" width="6" height="1"/>
<rect x="19" y="17" width="3" height="1" fill-opacity="0.99"/>
<rect x="22" y="17" width="1" height="1" fill-opacity="0.95"/>
<rect x="23" y="17" width="1" height="1" fill-opacity="0.1"/>
<rect x="6" y="18" width="2" height="1" fill-opacity="0.01"/>
<rect x="8" y="18" width="1" height="1" fill-opacity="0.79"/>
<rect x="9" y="18" width="1" height="1" fill-opacity="0.98"/>
<rect x="10" y="18" width="1" height="1" fill-opacity="0.99"/>
<rect x="11" y="18" width="7" height="1"/>
<rect x="18" y="18" width="1" height="1" fill-opacity="0.99"/>
<rect x="19" y="18" width="3" height="1"/>
<rect x="22" y="18" width="1" height="1" fill-opacity="0.97"/>
<rect x="23" y="18" width="1" height="1" fill-opacity="0.06"/>
<rect x="6" y="19" width="1" height="1" fill-opacity="0.01"/>
<rect x="8" y="19" width="1" height="1" fill-opacity="0.48"/>
<rect x="9" y="19" width="1" height="1"/>
<rect x="10" y="19" width="1" height="1" fill-opacity="0.99"/>
<rect x="11" y="19" width="1" height="1" fill-opacity="0.38"/>
<rect x="12" y="19" width="1" height="1" fill-opacity="0.76"/>
<rect x="13" y="19" width="1" height="1"/>
<rect x="14" y="19" width="2" height="1" fill-opacity="0.99"/>
<rect x="16" y="19" width="3" height="1"/>
<rect x="19" y="19" width="1" height="1" fill-opacity="0.69"/>
<rect x="20" y="19" width="1" height="1" fill-opacity="0.79"/>
<rect x="21" y="19" width="1" height="1" fill-opacity="0.63"/>
<rect x="22" y="19" width="1" height="1" fill-opacity="0.79"/>
<rect x="23" y="19" width="1" height="1" fill-opacity="0.26"/>
<rect x="25" y="19" width="1" height="1" fill-opacity="0.01"/>
<rect x="8" y="20" width="1" height="1" fill-opacity="0.03"/>
<rect x="9" y="20" width="1" height="1" fill-opacity="0.63"/>
<rect x="10" y="20" width="1" height="1" fill-opacity="0.91"/>
<rect x="11" y="20" width="1" height="1" fill-opacity="0.37"/>
<rect x="12" y="20" width="1" height="1" fill-opacity="0.48"/>
<rect x="13" y="20" width="4" height="1"/>
<rect x="17" y="20" width="1" height="1" fill-opacity="0.44"/>
<rect x="18" y="20" width="1" height="1" fill-opacity="0.8"/>
<rect x="19" y="20" width="1" height="1" fill-opacity="0.2"/>
<rect x="20" y="20" width="1" height="1" fill-opacity="0.33"/>
<rect x="21" y="20" width="1" height="1" fill-opacity="0.4"/>
<rect x="22" y="20" width="1" height="1" fill-opacity="0.77"/>
<rect x="23" y="20" width="1" height="1" fill-opacity="0.76"/>
<rect x="25" y="20" width="1" height="1" fill-opacity="0.01"/>
<rect x="10" y="21" width="1" height="1" fill-opacity="0.88"/>
<rect x="11" y="21" width="1" height="1" fill-opacity="0.93"/>
<rect x="12" y="21" width="1" height="1" fill-opacity="0.86"/>
<rect x="13" y="21" width="1" height="1" fill-opacity="0.64"/>
<rect x="14" y="21" width="1" height="1" fill-opacity="0.24"/>
<rect x="15" y="21" width="1" height="1" fill-opacity="0.8"/>
<rect x="16" y="21" width="1" height="1"/>
<rect x="17" y="21" width="1" height="1" fill-opacity="0.19"/>
<rect x="18" y="21" width="1" height="1" fill-opacity="0.25"/>
<rect x="19" y="21" width="1" height="1" fill-opacity="0.46"/>
<rect x="20" y="21" width="1" height="1" fill-opacity="0.76"/>
<rect x="21" y="21" width="1" height="1" fill-opacity="0.66"/>
<rect x="22" y="21" width="1" height="1" fill-opacity="0.17"/>
<rect x="23" y="21" width="1" height="1" fill-opacity="0.24"/>
<rect x="8" y="22" width="1" height="1" fill-opacity="0.01"/>
<rect x="9" y="22" width="1" height="1" fill-opacity="0.31"/>
<rect x="10" y="22" width="1" height="1" fill-opacity="0.47"/>
<rect x="11" y="22" width="1" height="1" fill-opacity="0.3"/>
<rect x="12" y="22" width="1" height="1" fill-opacity="0.98"/>
<rect x="13" y="22" width="1" height="1" fill-opacity="0.69"/>
<rect x="14" y="22" width="1" height="1" fill-opacity="0.25"/>
<rect x="15" y="22" width="1" height="1" fill-opacity="0.17"/>
<rect x="16" y="22" width="1" height="1" fill-opacity="0.94"/>
<rect x="17" y="22" width="1" height="1" fill-opacity="0.65"/>
<rect x="18" y="22" width="1" height="1" fill-opacity="0.24"/>
<rect x="19" y="22" width="1" height="1" fill-opacity="0.85"/>
<rect x="20" y="22" width="1" height="1" fill-opacity="0.84"/>
<rect x="21" y="22" width="1" height="1" fill-opacity="0.25"/>
<rect x="22" y="22" width="1" height="1" fill-opacity="0.58"/>
<rect x="23" y="22" width="1" height="1" fill-opacity="0.17"/>
<rect x="25" y="22" width="1" height="1" fill-opacity="0.01"/>
<rect x="7" y="23" width="1" height="1" fill-opacity="0.01"/>
<rect x="9" y="23" width="1" height="1" fill-opacity="0.53"/>
<rect x="10" y="23" width="1" height="1" fill-opacity="0.23"/>
<rect x="11" y="23" width="1" height="1" fill-opacity="0.05"/>
<rect x="12" y="23" width="1" height="1" fill-opacity="0.99"/>
<rect x="13" y="23" width="1" height="1"/>
<rect x="14" y="23" width="1" height="1" fill-opacity="0.6"/>
<rect x="16" y="23" width="1" height="1" fill-opacity="0.56"/>
<rect x="17" y="23" width="1" height="1" fill-opacity="0.87"/>
<rect x="18" y="23" width="1" height="1" fill-opacity="0.11"/>
<rect x="19" y="23" width="1" height="1"/>
<rect x="20" y="23" width="1" height="1" fill-opacity="0.71"/>
<rect x="22" y="23" width="1" height="1" fill-opacity="0.24"/>
<rect x="23" y="23" width="1" height="1" fill-opacity="0.07"/>
<rect x="10" y="24" width="1" height="1" fill-opacity="0.22"/>
<rect x="11" y="24" width="1" height="1" fill-opacity="0.05"/>
<rect x="12" y="24" width="1" height="1" fill-opacity="0.92"/>
<rect x="13" y="24" width="2" height="1"/>
<rect x="15" y="24" width="1" height="1" fill-opacity="0.03"/>
<rect x="16" y="24" width="1" height="1" fill-opacity="0.48"/>
<rect x="17" y="24" width="1" height="1" fill-opacity="0.98"/>
<rect x="18" y="24" width="1" height="1" fill-opacity="0.03"/>
<rect x="19" y="24" width="1" height="1" fill-opacity="0.47"/>
<rect x="20" y="24" width="1" height="1" fill-opacity="0.64"/>
<rect x="21" y="24" width="1" height="1" fill-opacity="0.26"/>
<rect x="22" y="24" width="1" height="1" fill-opacity="0.07"/>
<rect x="23" y="24" width="1" height="1" fill-opacity="0.02"/>
<rect x="11" y="25" width="1" height="1" fill-opacity="0.01"/>
<rect x="12" y="25" width="1" height="1" fill-opacity="0.44"/>
<rect x="13" y="25" width="1" height="1" fill-opacity="0.97"/>
<rect x="14" y="25" width="1" height="1" fill-opacity="0.84"/>
<rect x="15" y="25" width="1" height="1" fill-opacity="0.26"/>
<rect x="16" y="25" width="1" height="1" fill-opacity="0.95"/>
<rect x="17" y="25" width="1" height="1"/>
<rect x="18" y="25" width="1" height="1" fill-opacity="0.17"/>
<rect x="19" y="25" width="1" height="1" fill-opacity="0.58"/>
<rect x="20" y="25" width="1" height="1" fill-opacity="0.18"/>
<rect x="21" y="25" width="1" height="1" fill-opacity="0.12"/>
<rect x="9" y="26" width="1" height="1" fill-opacity="0.03"/>
<rect x="10" y="26" width="1" height="1" fill-opacity="0.87"/>
<rect x="11" y="26" width="1" height="1" fill-opacity="0.41"/>
<rect x="12" y="26" width="1" height="1" fill-opacity="0.15"/>
<rect x="13" y="26" width="1" height="1" fill-opacity="0.41"/>
<rect x="14" y="26" width="1" height="1" fill-opacity="0.24"/>
<rect x="15" y="26" width="1" height="1" fill-opacity="0.61"/>
<rect x="16" y="26" width="2" height="1"/>
<rect x="18" y="26" width="1" height="1" fill-opacity="0.24"/>
<rect x="19" y="26" width="1" height="1" fill-opacity="0.15"/>
<rect x="20" y="26" width="1" height="1" fill-opacity="0.05"/>
<rect x="9" y="27" width="1" height="1" fill-opacity="0.01"/>
<rect x="10" y="27" width="1" height="1" fill-opacity="0.45"/>
<rect x="11" y="27" width="1" height="1" fill-opacity="0.14"/>
<rect x="12" y="27" width="1" height="1" fill-opacity="0.12"/>
<rect x="13" y="27" width="1" height="1" fill-opacity="0.09"/>
<rect x="15" y="27" width="1" height="1" fill-opacity="0.83"/>
<rect x="16" y="27" width="2" height="1"/>
<rect x="18" y="27" width="1" height="1" fill-opacity="0.14"/>
<rect x="14" y="28" width="1" height="1" fill-opacity="0.17"/>
<rect x="15" y="28" width="1" height="1" fill-opacity="0.88"/>
<rect x="16" y="28" width="1" height="1" fill-opacity="0.82"/>
<rect x="17" y="28" width="1" height="1" fill-opacity="0.5"/>
<rect x="19" y="28" width="1" height="1" fill-opacity="0.01"/>
<rect x="9" y="29" width="1" height="1" fill-opacity="0.01"/>
<rect x="10" y="29" width="1" height="1" fill-opacity="0.02"/>
<rect x="11" y="29" width="1" height="1" fill-opacity="0.1"/>
<rect x="12" y="29" width="1" height="1" fill-opacity="0.9"/>
<rect x="13" y="29" width="1" height="1" fill-opacity="0.31"/>
<rect x="14" y="29" width="1" height="1" fill-opacity="0.09"/>
<rect x="15" y="29" width="1" height="1" fill-opacity="0.08"/>
<rect x="16" y="29" width="1" height="1" fill-opacity="0.34"/>
<rect x="17" y="29" width="1" height="1" fill-opacity="0.29"/>
<rect x="19" y="29" width="1" height="1" fill-opacity="0.01"/>
<rect x="11" y="30" width="1" height="1" fill-opacity="0.04"/>
<rect x="12" y="30" width="1" height="1" fill-opacity="0.45"/>
<rect x="13" y="30" width="2" height="1" fill-opacity="0.11"/>
<rect x="16" y="30" width="1" height="1" fill-opacity="0.35"/>
<rect x="17" y="30" width="1" height="1" fill-opacity="0.36"/>
<rect x="19" y="30" width="1" height="1" fill-opacity="0.01"/>
<rect x="14" y="31" width="1" height="1" fill-opacity="0.14"/>
<rect x="15" y="31" width="1" height="1" fill-opacity="0.03"/>
</g>
</svg>`;

  function svgDataUri(svg){ return 'data:image/svg+xml,' + encodeURIComponent(svg); }
  window.SITE_DEFAULT_MARK_SVG = DEFAULT_MARK_SVG;
  window.SITE_DEFAULT_MARK_DATA_URI = svgDataUri(DEFAULT_MARK_SVG);

  // ---------- Asset loading with graceful fallback ----------
  // Tries each URL in order (skipping blanks) and calls back with the
  // first one that actually loads. A data: URI is assumed valid
  // without a network round-trip. If nothing loads - a file is
  // missing, misnamed, or not uploaded yet - it calls back with the
  // built-in avatar mark instead, so a bad path never shows a broken
  // image anywhere on the site. Same behavior as the per-app template.
  function pickFirstLoadable(urls, callback){
    var candidates = (urls || []).filter(function (u) { return !!u; });
    var fallback = window.SITE_DEFAULT_MARK_DATA_URI;
    function tryAt(i){
      if (i >= candidates.length){ callback(fallback, false); return; }
      var url = candidates[i];
      if (url.indexOf('data:') === 0){ callback(url, true); return; }
      var probe = new Image();
      probe.onload = function () { callback(url, true); };
      probe.onerror = function () { tryAt(i + 1); };
      probe.src = url;
    }
    tryAt(0);
  }
  window.SITE_pickFirstLoadable = pickFirstLoadable;

  function guessMimeType(href){
    if (!href) return null;
    if (href.indexOf('data:') === 0){
      var dataMatch = href.match(/^data:([^;,]+)/);
      return dataMatch ? dataMatch[1] : null;
    }
    var clean = href.split('#')[0].split('?')[0];
    var ext = (clean.split('.').pop() || '').toLowerCase();
    var extToMime = {
      png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg',
      svg: 'image/svg+xml', gif: 'image/gif', webp: 'image/webp',
      ico: 'image/x-icon'
    };
    return extToMime[ext] || null;
  }
  function setLink(rel, href){
    if (!href) return;
    var el = document.querySelector('link[rel="' + rel + '"]');
    if (!el){
      el = document.createElement('link');
      el.setAttribute('rel', rel);
      document.head.appendChild(el);
    }
    el.setAttribute('href', href);
    if (rel === 'icon'){
      var mime = guessMimeType(href);
      if (mime) el.setAttribute('type', mime); else el.removeAttribute('type');
    }
  }
  window.SITE_setLink = setLink;

  // ---------- Theme + favicon (same convention as the per-app pages) ----------
  function applySiteTheme(){
    var cfg = window.SITE_CONFIG || {};
    if (cfg.accentColor) document.documentElement.style.setProperty('--accent', cfg.accentColor);
    pickFirstLoadable([cfg.assets && cfg.assets.favicon], function (resolvedUrl, isRealAsset) {
      if (isRealAsset) setLink('icon', resolvedUrl);
    });
    setLink('apple-touch-icon', window.SITE_DEFAULT_MARK_DATA_URI);
    pickFirstLoadable([cfg.assets && cfg.assets.logo, cfg.assets && cfg.assets.favicon], function (resolvedUrl, isRealAsset) {
      if (isRealAsset) setLink('apple-touch-icon', resolvedUrl);
    });
  }

  // ---------- Header ----------
  // activeUrl: pass the current page's canonical URL (SITE_CONFIG.homeUrl
  // or SITE_CONFIG.appsUrl) so the matching nav item gets aria-current.
  function renderSiteHeader(activeUrl){
    var cfg = window.SITE_CONFIG || {};
    var link = document.getElementById('brandLink');
    var mark = document.getElementById('brandMark');
    var text = document.getElementById('brandText');
    var nav = document.getElementById('headerNav');

    if (link) link.href = cfg.homeUrl || '/';
    if (text) text.textContent = cfg.siteName || '';
    if (mark){
      mark.innerHTML = DEFAULT_MARK_SVG;
      pickFirstLoadable([cfg.assets && cfg.assets.logo], function (resolvedUrl, isRealAsset) {
        if (isRealAsset){
          var img = document.createElement('img');
          img.src = resolvedUrl;
          img.alt = '';
          mark.innerHTML = '';
          mark.appendChild(img);
        }
      });
    }
    if (nav){
      nav.innerHTML = '';
      (cfg.nav || []).forEach(function(item){
        var a = document.createElement('a');
        a.href = item.url;
        a.textContent = item.label;
        if (activeUrl && item.url === activeUrl){
          a.setAttribute('aria-current', 'page');
          a.className = 'is-active';
        }
        nav.appendChild(a);
      });
    }
  }
  window.SITE_renderHeader = renderSiteHeader;

  // ---------- Footer ----------
  function renderSiteFooter(){
    var cfg = window.SITE_CONFIG || {};
    var footer = document.getElementById('siteFooter');
    if (!footer) return;
    footer.innerHTML = '';

    var top = document.createElement('div');
    top.className = 'footer-top';

    var copy = document.createElement('span');
    copy.textContent = (cfg.footer && cfg.footer.copyrightText) || '';
    top.appendChild(copy);

    (cfg.nav || []).forEach(function(item){
      var dot = document.createElement('span');
      dot.className = 'footer-dot';
      dot.setAttribute('aria-hidden', 'true');
      top.appendChild(dot);

      var a = document.createElement('a');
      a.href = item.url;
      a.textContent = item.label;
      top.appendChild(a);
    });

    footer.appendChild(top);

    var updatedText = (cfg.footer && cfg.footer.updatedText) || '';
    if (updatedText) {
      var updated = document.createElement('p');
      updated.className = 'footer-updated';
      updated.textContent = updatedText;
      footer.appendChild(updated);
    }
  }
  window.SITE_renderFooter = renderSiteFooter;

  // ---------- App icon with graceful fallback ----------
  // Renders `assets/<app.id>.png` (as set on app.icon in apps.data.js)
  // into `container`. Shown immediately, and left in place if the
  // file is missing, misnamed, or not uploaded yet: the site's own
  // pixel-portrait mark (same one used for the header brand and the
  // hero visual) - never a broken-image icon, and never a plain
  // first-letter tile.
  function renderAppIcon(container, app){
    if (!container || !app) return;
    container.innerHTML = '';
    container.style.setProperty('--app-accent', app.accentColor || (window.SITE_CONFIG || {}).accentColor || '#2F6FED');
    var placeholder = document.createElement('span');
    placeholder.className = 'app-icon-fallback';
    placeholder.setAttribute('aria-hidden', 'true');
    placeholder.innerHTML = DEFAULT_MARK_SVG;
    container.appendChild(placeholder);
    pickFirstLoadable([app.icon], function (resolvedUrl, isRealAsset) {
      if (!isRealAsset) return;
      var img = document.createElement('img');
      img.src = resolvedUrl;
      img.alt = '';
      img.loading = 'lazy';
      container.innerHTML = '';
      container.appendChild(img);
    });
  }
  window.SITE_renderAppIcon = renderAppIcon;

  // ---------- Lightbox (popup viewer for screenshots + featured video) ----------
  // Opens a screenshot or the demo video large, centered over the
  // page. Ratio is never computed in JS - the media keeps its own
  // intrinsic width/height and CSS only caps max-width/max-height
  // (see .lightbox-media in style.css), so whatever shape the image
  // or video actually is, it fits the screen with no cropping and no
  // scrollbars, and never overflows the viewport.
  //
  // Back-button behavior: opening pushes one history entry. Pressing
  // Back closes the popup (via popstate) and leaves you on this same
  // page - it never carries you to whatever page came before this
  // one. Closing any other way (✕, Escape, backdrop click) undoes
  // that same history entry with history.back(), so the two stay in
  // sync and Back never has a "phantom" extra step later.
  var lightboxState = null;

  function closeLightbox(fromPopState){
    if (!lightboxState) return;
    var state = lightboxState;
    lightboxState = null;
    document.removeEventListener('keydown', state.onKeydown);
    window.removeEventListener('popstate', state.onPopState);
    if (state.overlay.parentNode) state.overlay.parentNode.removeChild(state.overlay);
    document.body.classList.remove('lightbox-open');
    if (!fromPopState) history.back(); // consume the entry pushed on open
  }

  function openLightbox(kind, src, opts){
    opts = opts || {};
    closeLightbox(false); // only one popup at a time

    var overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', kind === 'video' ? 'Video preview' : 'Screenshot preview');

    var stage = document.createElement('div');
    stage.className = 'lightbox-stage';
    overlay.appendChild(stage);

    var closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.className = 'lightbox-close';
    closeBtn.setAttribute('aria-label', 'Close');
    closeBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6 6 18"/></svg>';
    overlay.appendChild(closeBtn);

    var gallery = opts.gallery || null; // array of {src, alt} - screenshots only
    var index = opts.index || 0;
    var counter = null;

    function renderMedia(mediaKind, mediaSrc, mediaOpts){
      stage.innerHTML = '';
      var el;
      if (mediaKind === 'video'){
        el = document.createElement('video');
        el.setAttribute('controls', '');
        el.setAttribute('playsinline', '');
        el.setAttribute('autoplay', '');
        if (mediaOpts.poster) el.poster = mediaOpts.poster;
      } else {
        el = document.createElement('img');
        el.alt = mediaOpts.alt || '';
      }
      el.className = 'lightbox-media';
      el.src = mediaSrc;
      stage.appendChild(el);
    }

    function show(i){
      index = (i + gallery.length) % gallery.length;
      renderMedia('image', gallery[index].src, { alt: gallery[index].alt });
      if (counter) counter.textContent = (index + 1) + ' / ' + gallery.length;
    }

    if (gallery && gallery.length > 1){
      var prevBtn = document.createElement('button');
      prevBtn.type = 'button';
      prevBtn.className = 'lightbox-nav prev';
      prevBtn.setAttribute('aria-label', 'Previous screenshot');
      prevBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 6l-6 6 6 6"/></svg>';
      var nextBtn = document.createElement('button');
      nextBtn.type = 'button';
      nextBtn.className = 'lightbox-nav next';
      nextBtn.setAttribute('aria-label', 'Next screenshot');
      nextBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 6l6 6-6 6"/></svg>';
      prevBtn.addEventListener('click', function (e) { e.stopPropagation(); show(index - 1); });
      nextBtn.addEventListener('click', function (e) { e.stopPropagation(); show(index + 1); });
      overlay.appendChild(prevBtn);
      overlay.appendChild(nextBtn);

      counter = document.createElement('div');
      counter.className = 'lightbox-counter';
      overlay.appendChild(counter);

      show(index);
    } else {
      renderMedia(kind, src, opts);
    }

    function onKeydown(e){
      if (e.key === 'Escape'){ closeLightbox(false); return; }
      if (gallery && gallery.length > 1){
        if (e.key === 'ArrowLeft') show(index - 1);
        else if (e.key === 'ArrowRight') show(index + 1);
      }
    }
    function onPopState(){ closeLightbox(true); }

    overlay.addEventListener('click', function (e) { if (e.target === overlay) closeLightbox(false); });
    closeBtn.addEventListener('click', function () { closeLightbox(false); });
    document.addEventListener('keydown', onKeydown);
    window.addEventListener('popstate', onPopState);

    document.body.appendChild(overlay);
    document.body.classList.add('lightbox-open');
    history.pushState({ lightbox: true }, '', location.href);

    lightboxState = { overlay: overlay, onKeydown: onKeydown, onPopState: onPopState };
  }
  window.SITE_openLightbox = openLightbox;

  // ---------- Featured app spotlight (video, description, highlights) ----------
  // Reads window.FEATURED_APP (from /featured.app.details.js) and cross-
  // references its `appId` against the `apps` list (SITE_APPS) to pull
  // name/tagline/url/icon/accentColor/category/platforms - so those
  // never need to be duplicated in featured.app.details.js.
  // If there's no config, or `appId` doesn't match any app, the whole
  // section hides itself instead of showing anything broken/empty.
  function renderFeaturedApp(container, apps){
    if (!container) return;
    var section = container.closest ? container.closest('section') : container.parentNode;
    var cfg = window.FEATURED_APP;
    var app = null;
    if (cfg && cfg.appId){
      (apps || []).some(function (a) { if (a.id === cfg.appId) { app = a; return true; } return false; });
    }
    if (!cfg || !app){
      if (section) section.hidden = true;
      return;
    }
    if (section) section.hidden = false;
    container.innerHTML = '';
    container.style.setProperty('--app-accent', app.accentColor || (window.SITE_CONFIG || {}).accentColor || '#2F6FED');

    var wrap = document.createElement('div');
    wrap.className = 'featured-app';

    // ---------- Media column: video (with graceful fallback) + optional screenshots ----------
    var media = document.createElement('div');
    media.className = 'featured-app-media';

    var frame = document.createElement('div');
    frame.className = 'featured-video-frame';
    media.appendChild(frame);

    function showVideoFallback(){
      frame.innerHTML = '';
      var fallback = document.createElement('div');
      fallback.className = 'featured-video-fallback';
      var iconWrap = document.createElement('div');
      iconWrap.className = 'app-icon featured-video-fallback-icon';
      fallback.appendChild(iconWrap);
      var note = document.createElement('p');
      note.textContent = 'Demo video coming soon';
      fallback.appendChild(note);
      frame.appendChild(fallback);
      renderAppIcon(iconWrap, app);
    }

    var videoCfg = cfg.video || {};
    if (videoCfg.src){
      var video = document.createElement('video');
      video.setAttribute('controls', '');
      video.setAttribute('playsinline', '');
      video.preload = 'none';
      video.addEventListener('error', showVideoFallback);
      video.src = videoCfg.src;
      frame.appendChild(video);
      pickFirstLoadable([videoCfg.poster, app.icon], function (resolvedUrl, isRealAsset) {
        if (isRealAsset) video.poster = resolvedUrl;
      });

      // Little expand button so the demo can be viewed larger in the
      // lightbox popup without hijacking clicks on the video itself
      // (those still just play/pause it, as usual).
      var expandBtn = document.createElement('button');
      expandBtn.type = 'button';
      expandBtn.className = 'video-expand-btn';
      expandBtn.setAttribute('aria-label', 'Expand video');
      expandBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 4H4v5M15 4h5v5M9 20H4v-5M15 20h5v-5"/></svg>';
      expandBtn.addEventListener('click', function () {
        video.pause();
        openLightbox('video', video.currentSrc || videoCfg.src, { poster: video.poster });
      });
      frame.appendChild(expandBtn);
    } else {
      showVideoFallback();
    }

    var screenshots = (cfg.screenshots || []).filter(function (s) { return !!s; });
    if (screenshots.length){
      var strip = document.createElement('div');
      strip.className = 'screenshot-strip';
      var gallery = screenshots.map(function (s) { return { src: s, alt: '' }; });
      var VISIBLE_SHOTS = 2;
      var visibleShots = screenshots.slice(0, VISIBLE_SHOTS);

      visibleShots.forEach(function (src, shotIndex) {
        var img = document.createElement('img');
        img.src = src;
        img.alt = '';
        img.loading = 'lazy';
        img.tabIndex = 0;
        img.setAttribute('role', 'button');
        img.setAttribute('aria-label', 'View screenshot ' + (shotIndex + 1) + ' larger');
        img.onerror = function () { img.remove(); };
        img.addEventListener('click', function () {
          openLightbox('image', src, { gallery: gallery, index: shotIndex });
        });
        img.addEventListener('keydown', function (e) {
          if (e.key === 'Enter' || e.key === ' '){
            e.preventDefault();
            openLightbox('image', src, { gallery: gallery, index: shotIndex });
          }
        });
        strip.appendChild(img);
      });

      // Anything past the first few stays out of the strip itself -
      // a "+N" tile (using the next hidden shot as its backdrop)
      // opens the same popup, starting right where the strip left
      // off, and the popup's own arrows still page through all of
      // them from there.
      var hiddenCount = screenshots.length - visibleShots.length;
      if (hiddenCount > 0){
        var moreTile = document.createElement('button');
        moreTile.type = 'button';
        moreTile.className = 'screenshot-more-tile';
        moreTile.style.backgroundImage = 'url(' + screenshots[VISIBLE_SHOTS] + ')';
        moreTile.setAttribute('aria-label', 'View ' + hiddenCount + ' more screenshot' + (hiddenCount === 1 ? '' : 's'));
        var moreLabel = document.createElement('span');
        moreLabel.textContent = '+' + hiddenCount;
        moreTile.appendChild(moreLabel);
        moreTile.addEventListener('click', function () {
          openLightbox('image', screenshots[VISIBLE_SHOTS], { gallery: gallery, index: VISIBLE_SHOTS });
        });
        strip.appendChild(moreTile);
      }
      media.appendChild(strip);
    }

    wrap.appendChild(media);

    // ---------- Copy column: eyebrow, name, description, highlights, meta, CTA ----------
    var copy = document.createElement('div');
    copy.className = 'featured-app-copy';

    if (cfg.eyebrow){
      var badge = document.createElement('p');
      badge.className = 'featured-app-badge';
      badge.textContent = cfg.eyebrow;
      copy.appendChild(badge);
    }

    var name = document.createElement('h3');
    name.className = 'featured-app-name';
    name.textContent = app.name || '';
    copy.appendChild(name);

    if (app.tagline){
      var tagline = document.createElement('p');
      tagline.className = 'featured-app-tagline';
      tagline.textContent = app.tagline;
      copy.appendChild(tagline);
    }

    var description = cfg.longDescription || app.description || '';
    if (description){
      var desc = document.createElement('p');
      desc.className = 'featured-app-description';
      desc.textContent = description;
      copy.appendChild(desc);
    }

    if ((cfg.highlights || []).length){
      var list = document.createElement('ul');
      list.className = 'featured-highlights';
      cfg.highlights.forEach(function (text) {
        var li = document.createElement('li');
        li.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m5 13 4 4L19 7"/></svg>';
        var span = document.createElement('span');
        span.textContent = text;
        li.appendChild(span);
        list.appendChild(li);
      });
      copy.appendChild(list);
    }

    var meta = document.createElement('div');
    meta.className = 'app-card-meta featured-app-meta';
    if (app.category){
      var tag = document.createElement('span');
      tag.className = 'app-tag';
      tag.textContent = app.category;
      meta.appendChild(tag);
    }
    var platIcons = document.createElement('span');
    platIcons.className = 'app-platform-icons';
    (app.platforms || []).forEach(function (pid) {
      var span = document.createElement('span');
      span.setAttribute('aria-label', window.SITE_platformLabel ? window.SITE_platformLabel(pid) : pid);
      span.title = window.SITE_platformLabel ? window.SITE_platformLabel(pid) : pid;
      span.innerHTML = window.SITE_platformIcon ? window.SITE_platformIcon(pid) : '';
      platIcons.appendChild(span);
    });
    meta.appendChild(platIcons);
    copy.appendChild(meta);

    var ctaRow = document.createElement('div');
    ctaRow.className = 'cta-row featured-app-cta';
    var isSoon = app.status === 'soon';
    var cta = document.createElement(isSoon ? 'span' : 'a');
    cta.className = 'btn-primary' + (isSoon ? ' is-disabled' : '');
    if (!isSoon) cta.href = app.url;
    cta.textContent = isSoon ? 'Coming soon' : (cfg.ctaLabel || 'Get the app');
    ctaRow.appendChild(cta);
    copy.appendChild(ctaRow);

    wrap.appendChild(copy);
    container.appendChild(wrap);
  }
  window.SITE_renderFeaturedApp = renderFeaturedApp;

  // ---------- Platform metadata (icons + display labels) ----------
  // Shared by the All Apps grid/filter and the Home page's Featured
  // Apps cards, so a platform badge always looks the same everywhere.
  // Same icon set/style as platforms.config.js's APP_PLATFORM_ICONS -
  // add an id here to give a new platform its own icon; anything
  // missing falls back to a generic square icon.
  var PLATFORM_ICONS = {
    android: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="m5 3 14 9-14 9V3Z"/></svg>',
    ios: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.4 12.9c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.8-3.5.8-.7 0-1.8-.8-3-.8-1.5 0-3 .9-3.8 2.3-1.6 2.8-.4 7 1.2 9.3.8 1.1 1.7 2.4 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3 .7c1.2 0 2-1.1 2.8-2.3.9-1.3 1.2-2.5 1.2-2.6-.1 0-2.4-.9-2.4-3.7Zm-2.6-6.8c.7-.8 1.1-1.9 1-3-1 0-2.1.6-2.8 1.4-.6.7-1.1 1.8-1 2.9 1.1.1 2.1-.5 2.8-1.3Z"/></svg>',
    web: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9s1.3-6.4 3.8-9Z"/></svg>',
    windows: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 5.5 10.4 4.4V11H3V5.5Zm0 13L10.4 19.6V13H3v5.5ZM11.3 4.3 21 3v7.9h-9.7V4.3Zm0 8.7H21V21l-9.7-1.3v-6.7Z"/></svg>',
    macos: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.4 12.9c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.8-3.5.8-.7 0-1.8-.8-3-.8-1.5 0-3 .9-3.8 2.3-1.6 2.8-.4 7 1.2 9.3.8 1.1 1.7 2.4 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3 .7c1.2 0 2-1.1 2.8-2.3.9-1.3 1.2-2.5 1.2-2.6-.1 0-2.4-.9-2.4-3.7Z"/></svg>',
    linux: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="8" r="4"/><path d="M7 21c0-3 2-5 5-5s5 2 5 5"/></svg>'
  };
  var PLATFORM_LABELS = {
    android: 'Android', ios: 'iOS', web: 'Web', windows: 'Windows', macos: 'macOS', linux: 'Linux'
  };
  var DEFAULT_PLATFORM_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M9 9h.01M15 9h.01M9 15h6"/></svg>';
  window.SITE_PLATFORM_LABELS = PLATFORM_LABELS;
  window.SITE_platformLabel = function (id) { return PLATFORM_LABELS[id] || id; };
  window.SITE_platformIcon = function (id) { return PLATFORM_ICONS[id] || DEFAULT_PLATFORM_ICON; };

  document.addEventListener('DOMContentLoaded', applySiteTheme);
})();
