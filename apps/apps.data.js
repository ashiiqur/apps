/**
 * All Apps - App List Configuration
 * =====================================================
 * apps/index.html (the "All Apps" tab) and the Home page's Featured
 * Apps section both load this ONE file and build everything from
 * the array below: the icon grid, search index, and the Device /
 * Category filter options (those dropdowns are generated from
 * whatever platforms/categories appear below - you never edit them
 * by hand).
 *
 * -------------------------------------------------------------------
 * HOW TO ADD A NEW APP
 * -------------------------------------------------------------------
 * 1. Upload its icon as apps/assets/<id>.png (square, ideally 512x512
 *    or larger - it's downscaled in the grid). Until it's uploaded,
 *    the app still shows fine with a generated monogram tile instead
 *    of a broken image.
 * 2. Copy any object in the SITE_APPS array below as a starting
 *    point and paste it in as a new entry (order doesn't matter -
 *    featured apps and sorting are handled automatically).
 * 3. Fill in the fields - see the comments on the first entry below
 *    for what each one does.
 * 4. Save. Nothing else to touch - not index.html, not
 *    apps/index.html - both pick it up automatically.
 * 5. Optional but recommended: add a matching <url> block to
 *    /sitemap.xml for the app's own page (see the comment in that
 *    file).
 */

window.SITE_APPS = [
  {
    // Unique, lowercase, hyphenated. Used to match apps/assets/<id>.png
    // and as the row's key - never reused, even if the app is removed.
    id: 'qr-generator',

    name: 'QR Generator',

    // One short line shown on the app's card in the grid.
    tagline: 'Turn any text into a scan.',

    // A sentence or two - used for the card's longer description and
    // as alt/search text. Not shown on every card layout, but always
    // indexed by the search bar.
    description: 'Turn links, Wi-Fi passwords, contact cards, and plain text into a clean, customizable QR code in one tap.',

    // Where the card links to - this app's own landing page (built
    // from the app.details.js / platforms.config.js template).
    url: 'https://apps.ashiqur.in/apps/qr-generator/',

    // apps/assets/<id>.png - upload it there. Falls back to a
    // generated monogram tile in accentColor if missing.
    icon: 'assets/qr-generator.png',

    // This app's own accent color (matches its app.details.js). Used
    // for the fallback monogram tile and a thin card accent.
    accentColor: '#2F6FED',

    // One category - shown as a tag on the card and feeds the
    // Category filter dropdown. Use whatever categories make sense;
    // new ones just start appearing in the dropdown automatically.
    category: 'Utilities',

    // Every platform this app is actually available on, using the
    // same ids as platforms.config.js: 'android', 'ios', 'web',
    // 'windows', 'macos', 'linux'. Feeds the Device filter dropdown.
    platforms: ['android'],

    // 'live' - shown normally, filters/searches as available.
    // 'soon' - shown with a "Coming soon" badge, card not clickable.
    status: 'live',

    // true = eligible for the Home page's Featured Apps section
    // (shows the first few featured apps, in array order).
    featured: true,

    // Used only to sort "Newest" - format YYYY-MM-DD.
    releaseDate: '2026-06-18'
  }

  // ---------------------------------------------------------------
  // ADD YOUR NEXT APP HERE - copy the block above, paste as a new
  // entry below (don't forget the comma above it), and fill it in.
  // ---------------------------------------------------------------
  // ,{
  //   id: 'my-new-app',
  //   name: 'My New App',
  //   tagline: 'A one-line hook.',
  //   description: 'A sentence or two describing what it does.',
  //   url: 'https://apps.ashiqur.in/apps/my-new-app/',
  //   icon: 'assets/my-new-app.png',
  //   accentColor: '#00C896',
  //   category: 'Productivity',
  //   platforms: ['android', 'ios'],
  //   status: 'live',
  //   featured: false,
  //   releaseDate: '2026-09-01'
  // }
];
