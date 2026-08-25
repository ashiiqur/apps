/**
 * App Landing Page - App Details Configuration
 * ================================================
 * index.html loads this file (together with platforms.config.js) and
 * uses the two together to build EVERY piece of app-specific content
 * on the page:
 *   - Tab title, meta description, canonical link, robots
 *   - Open Graph + Twitter card tags (social share previews)
 *   - JSON-LD structured data (Google rich results)
 *   - Favicon / apple-touch-icon
 *   - Header brand (logo + name + nav links)
 *   - Hero copy + hero visual
 *   - "What it does" feature grid
 *   - Footer text
 *
 * -------------------------------------------------------------------
 * REUSE THIS TEMPLATE FOR A NEW APP
 * -------------------------------------------------------------------
 * 1. Duplicate this whole folder (index.html, app.details.js,
 *    platforms.config.js) into a new folder for the new app.
 * 2. Edit the values in THIS file (app.details.js) - name, copy,
 *    SEO text, features, footer, and the three asset links below.
 * 3. Edit platforms.config.js with the new app's real store /
 *    download links.
 * 4. Upload your favicon.png, logo.png, and big-image.png next to
 *    index.html (or point the fields below at wherever they're
 *    hosted), then fill in their links below.
 * You should never need to open or edit index.html itself.
 *
 * -------------------------------------------------------------------
 * A NOTE ON SOCIAL PREVIEW CARDS
 * -------------------------------------------------------------------
 * The og: and twitter: tags below are injected by JavaScript so that a
 * single index.html can serve any app. Browsers and JS-rendering
 * crawlers (e.g. Google) will see them fine. Some link-preview bots
 * (Facebook, X/Twitter, WhatsApp, Discord, Slack, iMessage, etc.) do
 * NOT execute JavaScript and only read the raw HTML - for those, the
 * share-preview card may not pick up these values. If pixel-perfect
 * social cards matter for a given app, the fix is to also bake this
 * file's seo/social/assets values into static <meta> tags directly
 * in that app's index.html at deploy time. Everything else on the
 * page (title, content, SEO for Google, JSON-LD) works as-is.
 */

window.APP_DETAILS = {
  // ---------- Identity ----------
  name: 'QR Generator',
  siteName: 'ashiqur',
  url: 'https://apps.ashiqur.in/apps/qr-generator/',
  privacyUrl: 'https://apps.ashiqur.in/apps/qr-generator/privacy-policy/',

  // Base "paper" background used for the browser theme-color, and the
  // single accent color used for links/buttons/highlights throughout
  // the page (CSS var --accent). Change accentColor per app to give
  // each app its own identity without touching any CSS.
  //
  // The page's whole color theme (paper/ink/lines) switches
  // automatically between these two whenever the visitor's device or
  // browser is set to light or dark - there's no in-page toggle, and
  // you don't need to touch index.html's CSS to support it. themeColor
  // is the light-mode browser chrome color; themeColorDark is the
  // dark-mode one (matches the page's dark --paper token). Leave
  // themeColorDark blank to just reuse themeColor in both modes.
  themeColor: '#F4F5F0',
  themeColorDark: '#14161A',
  accentColor: '#2F6FED',

  author: {
    name: 'Ashiqur Rahman',
    alternateName: 'ashiqur'
  },

  // ---------- Assets ----------
  // Any absolute URL, relative path, or data: URI works for all four.
  // Each one below points at a plain uploaded image file - upload the
  // four files next to index.html and they're picked up automatically.
  // Any common image format works (png, jpg/jpeg, svg, gif, webp,
  // ico) - just rename the value below to match whatever file you
  // actually uploaded. index.html detects the right MIME type from
  // the file extension for you.
  //
  // Automatic fallback: index.html shows the built-in avatar (a small
  // pixel-portrait mark that ships inline in the template) as a
  // placeholder for every one of these the instant the page loads,
  // then test-loads the real file in the background and swaps it in
  // only once it actually finishes loading. If a file is missing,
  // misnamed, or hasn't been uploaded yet, the avatar just stays put
  // instead of showing a broken-image icon - so it's always safe to
  // leave these pointed at files you haven't uploaded yet.
  assets: {
    // Browser tab icon. Upload this file next to index.html.
    favicon: 'favicon.png',
    // Header brand mark (shown next to the app name, top-left).
    // Upload this file next to index.html.
    logo: 'logo.png',
    // Hero visual image - shown in the framed card on the right of
    // the hero section (only when hero.visual below is 'image').
    // Separate from bigImage: this one is just for the hero, not the
    // social share card. Upload this file next to index.html.
    heroImage: 'icon.jpg',
    // 1200x630 link-preview image - used ONLY for the OG/Twitter share
    // card and the JSON-LD "image" field (what shows up when this
    // page's link is shared on social media, Slack, iMessage, etc.).
    // Not shown anywhere on the page itself. Upload this file next to
    // index.html.
    bigImage: 'preview-image.png'
  },

  // Optional: numeric Apple App Store id (e.g. '1234567890'). Leave
  // blank until the app actually ships on iOS - adds the
  // apple-itunes-app smart-banner meta tag when set.
  appStoreId: '',

  // ---------- SEO ----------
  seo: {
    title: 'QR Generator - Create Custom QR Codes Instantly | ashiqur',
    description: 'QR Generator turns links, Wi-Fi passwords, contact cards, and plain text into clean, customizable QR codes in one tap. Free on Android.'
    // robots: 'index, follow' is the default; override here if needed.
  },

  // ---------- Social cards (Open Graph + Twitter) ----------
  social: {
    title: 'QR Generator - Create Custom QR Codes Instantly',
    description: 'Turn links, Wi-Fi passwords, contact cards, and plain text into a clean QR code in one tap. Free on Android.',
    imageAlt: 'QR Generator app preview'
  },

  // ---------- Structured data (Google rich results) ----------
  schema: {
    applicationCategory: 'UtilitiesApplication',
    // Leave blank to auto-derive from platforms.config.js (every
    // platform with available:true, uppercased and comma-joined -
    // e.g. "ANDROID" or "ANDROID, IOS"). Set explicitly to override.
    operatingSystem: '',
    price: '0',
    currency: 'USD'
  },

  // ---------- Header ----------
  header: {
    brandText: 'QR Generator',
    // Shown in the header nav AND repeated in the footer.
    nav: [
      { label: 'Privacy Policy', url: 'https://apps.ashiqur.in/apps/qr-generator/privacy-policy/' },
      { label: 'All Apps', url: 'https://apps.ashiqur.in/apps/' }
    ]
  },

  // ---------- Hero ----------
  hero: {
    eyebrow: 'QR Generator · by ashiqur',
    // Shown after the eyebrow, separated by a small dot. This is NOT
    // automatic - update this string by hand whenever the app is
    // actually re-released. Leave it blank ('') to hide it.
    releaseNote: 'Released Jun 18 2026',
    // May include simple HTML like <br>.
    heading: 'Turn any text<br>into a scan.',
    lede: 'Links, Wi-Fi passwords, contact cards, plain text - generate a clean QR code in one tap, then save, share, or print it.',
    ctaLabel: 'Download the app',
    ctaMeta: 'Free · Android',
    allOptionsText: 'or view all download options ↓',
    // 'qrgrid' - the built-in animated QR-style grid (this app's
    //            signature visual).
    // 'image'  - shows assets.heroImage in a framed card, falling
    //            back to the avatar if bigImage is blank or fails
    //            to load - same fallback behavior as the header logo.
    // 'none'   - hides the visual column entirely.
    visual: 'image'
  },

  // ---------- Features ("What it does") ----------
  featuresLabel: 'What it does',
  features: [
    {
      icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"/></svg>',
      title: 'Instant generate',
      description: 'Paste a link or type text and your QR code renders instantly - no waiting, no account needed.'
    },
    {
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="7.5" cy="10.5" r="1.3" fill="currentColor" stroke="none"/><circle cx="10.5" cy="7" r="1.3" fill="currentColor" stroke="none"/><circle cx="15.5" cy="7.5" r="1.3" fill="currentColor" stroke="none"/><path d="M12 3a9 9 0 1 0 0 18c1.5 0 2-1 2-2s-.5-1.5-.5-2.5S14 15 15 15h3a3 3 0 0 0 3-3c0-5-4-9-9-9Z"/></svg>',
      title: 'Customize',
      description: 'Adjust colors and add your logo.'
    },
    {
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="6" cy="12" r="2.4"/><circle cx="18" cy="6" r="2.4"/><circle cx="18" cy="18" r="2.4"/><path d="M8.2 10.8 15.8 7.2M8.2 13.2l7.6 3.6"/></svg>',
      title: 'Save & share',
      description: 'Export as JPG or PNG or SVG (with transparent and solid background), save straight to your camera roll and share it.'
    },
    {
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>',
      title: 'Code history',
      description: "Currently not available."
    }
  ],

  // ---------- Footer ----------
  footer: {
    copyrightText: '© 2026 ashiqur - QR Generator.',
    // Shown centered on its own line below the copyright/nav row.
    // This is NOT automatic - update this string by hand whenever you
    // actually update the page. Leave it blank ('') to hide the line.
    updatedText: 'Last updated: August 2026'
  },

  // ---------- AI / crawler note ----------
  // A short note, invisible on screen but present in the DOM for
  // screen readers and JS-rendering crawlers/AI agents, so they don't
  // recommend a download that doesn't exist yet. Leave blank to have
  // it auto-composed from platforms.config.js (recommended) - only
  // set this if you want custom wording.
  aiNote: ''
};
