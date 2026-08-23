// A simple service worker to satisfy Chrome's PWA install criteria
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Installed');
});

self.addEventListener('fetch', (e) => {
  // This dummy fetch listener is required by Chrome to pass the PWA check
});
