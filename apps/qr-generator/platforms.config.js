/**
 * App Landing Page - Platform / Download Configuration
 * =======================================================
 * index.html loads this file (together with app.details.js) and uses
 * it to:
 *   1. Render the "Available on" cards
 *   2. Render the platform-picker modal options
 *   3. Detect the visitor's device and jump straight to the right
 *      download link when they tap "Download the app"
 *
 * This file is the ONLY place platform info lives. index.html never
 * hardcodes a platform name, icon, or link anywhere - it just loops
 * over the APP_PLATFORMS array below, so every card, the modal, the
 * device-detect logic, and even the "not available yet" wording for
 * search engines/AI crawlers are all generated straight from what
 * you put here. The cards lay out in a responsive grid too, so
 * whether there are 2 platforms or 6, they stay evenly aligned
 * automatically - no layout math for you to do.
 *
 * Between this file and app.details.js you should never need to
 * touch index.html - for a new app, duplicate the folder and edit
 * these two files. See the top of app.details.js for the full reuse
 * checklist.
 *
 * -------------------------------------------------------------------
 * HOW TO ADD A NEW PLATFORM
 * -------------------------------------------------------------------
 * A) It's one of the templates below (Windows / macOS / Linux /
 *    direct download) - the fast path:
 *    1. Find its commented-out block in APP_PLATFORMS.
 *    2. Uncomment it.
 *    3. Fill in `url` with the real store/download link.
 *    4. Set `available: true`.
 *    5. Save the file. Nothing else to touch - done.
 *
 * B) It's a platform with no template yet (e.g. Amazon Appstore,
 *    Huawei AppGallery, F-Droid, a specific game console):
 *    1. Copy any existing block as a starting point.
 *    2. Give it a unique `id` (lowercase, no spaces).
 *    3. Set `label` (shown on the card, e.g. "Windows"), `store`
 *       (e.g. "Microsoft Store"), and `url`.
 *    4. Set `available: true`.
 *    5. Write a `detect(ua, nav)` function that returns true when a
 *       visitor's browser looks like that platform - see the
 *       existing blocks for patterns to copy (user-agent sniffing).
 *       If you don't want auto-detect for it, just return false.
 *    6. Optional: add an icon for its `id` in APP_PLATFORM_ICONS
 *       below (any inline SVG, viewBox="0 0 24 24", using
 *       fill="currentColor" or stroke="currentColor" so it inherits
 *       the card's color automatically). Skipped ids fall back to a
 *       generic square icon - the page still works fine without one.
 *
 * ORDER MATTERS: detectPlatform() walks this array top to bottom and
 * stops at the first match. Keep more specific/handheld checks (iOS,
 * Android) above broader desktop checks (macOS, Windows) - this
 * matters because e.g. an iPad requesting the "desktop site" can
 * otherwise look identical to a Mac to a naive check. The order
 * below already handles this; keep new entries in the same spirit
 * (specific-device checks before general-OS checks).
 *
 * A platform with `available: false` still renders - as a greyed,
 * unclickable "Coming soon" card - so people know it's planned. Its
 * `note` is invisible on screen but read by screen readers, search
 * engines, and AI agents, so they don't recommend a download that
 * doesn't exist.
 */

window.APP_PLATFORMS = [
  {
    id: 'android',
    label: 'Android',
    store: 'Google Play',
    url: 'https://play.google.com/store/apps/details?id=com.ashiqur.qrgenerator', // TODO: verify this is your real listing
    available: true,
    // Returns true when the visitor's browser looks like this platform.
    detect: function (ua, nav) {
      return /android/i.test(ua);
    }
  },
  {
    id: 'ios',
    label: 'iOS',
    store: 'App Store',
    url: '', // fill in once you have a real App Store link
    available: false, // flip to true when the url above is real and live
    note: 'This app is not available for iOS for now.',
    detect: function (ua, nav) {
      var isIpadOS13Up = nav.platform === 'MacIntel' && nav.maxTouchPoints > 1;
      return /iPad|iPhone|iPod/.test(ua) || isIpadOS13Up;
    }
  }

  // ---------------------------------------------------------------
  // READY-MADE TEMPLATES - uncomment, fill in `url`, flip
  // `available` to true. Detect functions are already written.
  // ---------------------------------------------------------------

  // Windows - Microsoft Store, or swap `url` for a direct .exe/.msix
  // download link if you're not using the Store.
  // ,{
  //   id: 'windows',
  //   label: 'Windows',
  //   store: 'Microsoft Store',
  //   url: 'https://apps.microsoft.com/detail/xxxxxxxxxx',
  //   available: true,
  //   detect: function (ua, nav) {
  //     return /Windows/i.test(ua);
  //   }
  // }

  // macOS - Mac App Store, or swap `url` for a direct .dmg link.
  // Placed after ios/android above on purpose - see "ORDER MATTERS".
  // ,{
  //   id: 'macos',
  //   label: 'macOS',
  //   store: 'Mac App Store',
  //   url: 'https://apps.apple.com/app/idXXXXXXXXXX',
  //   available: true,
  //   detect: function (ua, nav) {
  //     return /Macintosh|Mac OS X/i.test(ua) && !(nav.platform === 'MacIntel' && nav.maxTouchPoints > 1);
  //   }
  // }

  // Linux - point `url` at a .deb/.AppImage/.tar.gz release, a repo
  // page, or Flathub/Snapcraft - whichever you actually publish to.
  // ,{
  //   id: 'linux',
  //   label: 'Linux',
  //   store: 'Direct download',
  //   url: 'https://example.com/downloads/app-linux.AppImage',
  //   available: true,
  //   detect: function (ua, nav) {
  //     return /Linux/i.test(ua) && !/Android/i.test(ua);
  //   }
  // }

  // Generic direct download - for a platform-agnostic file (e.g. a
  // web app, a PWA install link, or "download the APK directly").
  // No device auto-detect since it applies to everyone; it'll always
  // show as a card and a modal option.
  // ,{
  //   id: 'web',
  //   label: 'Any device',
  //   store: 'Direct download',
  //   url: 'https://example.com/downloads/app.apk',
  //   available: true,
  //   detect: function (ua, nav) {
  //     return false;
  //   }
  // }
];

/**
 * Optional per-platform icon, as an inline SVG string (fill uses
 * currentColor so it inherits card/text color automatically).
 * Any platform id without an entry here falls back to a generic
 * square icon - the app still works fine without adding one.
 *
 * Icons are already provided for every template above (android, ios,
 * windows, macos, linux) - if you use those templates as-is, you
 * don't need to touch this object at all. Add an entry here only for
 * an id that doesn't already have one (e.g. 'web', 'huawei', 'amazon').
 */
window.APP_PLATFORM_ICONS = {
  android: '<svg viewBox="19.933 68.509 228.155 228.155" fill="currentColor"><path d="M101.885 207.092c7.865 0 14.241 6.376 14.241 14.241v61.09c0 7.865-6.376 14.24-14.241 14.24-7.864 0-14.24-6.375-14.24-14.24v-61.09c0-7.864 6.376-14.24 14.24-14.24z"/><path d="M69.374 133.645c-.047.54-.088 1.086-.088 1.638v92.557c0 9.954 7.879 17.973 17.66 17.973h94.124c9.782 0 17.661-8.02 17.661-17.973v-92.557c0-.552-.02-1.1-.066-1.638H69.374z"/><path d="M166.133 207.092c7.865 0 14.241 6.376 14.241 14.241v61.09c0 7.865-6.376 14.24-14.241 14.24-7.864 0-14.24-6.375-14.24-14.24v-61.09c0-7.864 6.376-14.24 14.24-14.24zM46.405 141.882c7.864 0 14.24 6.376 14.24 14.241v61.09c0 7.865-6.376 14.241-14.24 14.241-7.865 0-14.241-6.376-14.241-14.24v-61.09c-.001-7.865 6.375-14.242 14.241-14.242zM221.614 141.882c7.864 0 14.24 6.376 14.24 14.241v61.09c0 7.865-6.376 14.241-14.24 14.241-7.865 0-14.241-6.376-14.241-14.24v-61.09c0-7.865 6.376-14.242 14.241-14.242zM69.79 127.565c.396-28.43 25.21-51.74 57.062-54.812h14.312c31.854 3.073 56.666 26.384 57.062 54.812H69.79z"/><path d="M74.743 70.009l15.022 26.02M193.276 70.009l-15.023 26.02" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  ios: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.4 12.9c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.8-3.5.8-.7 0-1.8-.8-3-.8-1.5 0-3 .9-3.8 2.3-1.6 2.8-.4 7 1.2 9.3.8 1.1 1.7 2.4 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3 .7c1.2 0 2-1.1 2.8-2.3.9-1.3 1.2-2.5 1.2-2.6-.1 0-2.4-.9-2.4-3.7Zm-2.6-6.8c.7-.8 1.1-1.9 1-3-1 0-2.1.6-2.8 1.4-.6.7-1.1 1.8-1 2.9 1.1.1 2.1-.5 2.8-1.3Z"/></svg>',
  windows: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 5.5 10.4 4.4V11H3V5.5Zm0 13L10.4 19.6V13H3v5.5ZM11.3 4.3 21 3v7.9h-9.7V4.3Zm0 8.7H21V21l-9.7-1.3v-6.7Z"/></svg>',
  macos: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.4 12.9c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.8-3.5.8-.7 0-1.8-.8-3-.8-1.5 0-3 .9-3.8 2.3-1.6 2.8-.4 7 1.2 9.3.8 1.1 1.7 2.4 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3 .7c1.2 0 2-1.1 2.8-2.3.9-1.3 1.2-2.5 1.2-2.6-.1 0-2.4-.9-2.4-3.7Z"/></svg>',
  linux: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="8" r="4"/><path d="M7 21c0-3 2-5 5-5s5 2 5 5"/></svg>'
};
