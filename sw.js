// Minimal service worker — its presence (with a fetch handler) is part of
// what qualifies this page as an installable app on Android/Chrome.
// It does not cache anything; every request just passes straight through.
self.addEventListener('install', function(event){
  self.skipWaiting();
});
self.addEventListener('activate', function(event){
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', function(event){
  event.respondWith(fetch(event.request));
});
