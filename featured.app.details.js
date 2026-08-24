/**
 * Featured App Spotlight - Home Page Configuration
 * =====================================================
 * Powers the big "Featured app" section on the Home page - the one
 * with the video, the longer description, and the highlight list.
 * This is separate from the small "Featured apps" grid further down
 * (that one still comes from /apps/apps.data.js and just lists
 * cards); this file is for going deep on ONE app at a time.
 *
 * script.js reads this object (window.FEATURED_APP) and cross-
 * references `appId` against /apps/apps.data.js to pull the name,
 * tagline, url, icon, accent color, category, and platform list -
 * so you never have to duplicate those fields here. This file only
 * holds the extra stuff the small grid card doesn't have room for.
 *
 * -------------------------------------------------------------------
 * HOW TO SET OR CHANGE THE FEATURED APP
 * -------------------------------------------------------------------
 * 1. Set `appId` below to match an `id` in /apps/apps.data.js.
 * 2. Upload the video + poster (and any screenshots) into
 *    /assets/featured-app/ - see the README.txt in that folder.
 * 3. Fill in `highlights` with 3-4 short, specific selling points.
 * 4. Save. If `appId` doesn't match any app, or this file is
 *    missing/deleted, the whole spotlight section just hides itself
 *    - the rest of the page is unaffected.
 */

window.FEATURED_APP = {
  // Must match an `id` in /apps/apps.data.js. That entry supplies
  // the name, tagline, url, icon, accentColor, category, and
  // platforms shown in this section.
  appId: 'qr-generator',

  // Small label above the headline. Change or remove (set to '')
  // as you like.
  eyebrow: 'Featured app',

  // Optional. A sentence or two, longer/more specific than the
  // grid card's tagline. Leave '' to fall back to that app's
  // `description` field from apps.data.js instead.
  longDescription: '',

  // 3-4 short, specific bullet points - what actually makes this
  // app worth a look. Shown with checkmarks next to the video.
  highlights: [
    'Encode links, Wi-Fi logins, contact cards, or plain text in one tap',
    'Customize colors and style to match your brand',
    'No account and no ads - works fully offline'
  ],

  // Demo video. `src` can be .mp4 or .webm. If the file is missing
  // or not uploaded yet, the section falls back to the poster image
  // (or the app's icon, if that's missing too) with a small note -
  // never a broken player.
  video: {
    src: 'assets/featured-app/demo.mp4',
    poster: 'assets/featured-app/poster.jpg'
  },

  // Optional. A short strip of extra screenshots under the video.
  // Leave as an empty array to skip it entirely.
  screenshots: [
    'assets/featured-app/screenshot-1.jpg',
    'assets/featured-app/screenshot-2.png',
    'assets/featured-app/screenshot-3.png',
    'assets/featured-app/screenshot-4.png',
    'assets/featured-app/screenshot-5.jpg'
  ],

  // Button text for the link to the app's own page (the link target
  // itself is that app's `url` from apps.data.js).
  ctaLabel: 'Get the app'
};
