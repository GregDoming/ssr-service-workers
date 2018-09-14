// SERVICE WORKER WILL BE REGISTERED HERE ---------------------------
// Make sure service workers are supported
if ('serviceWorker' in navigator) {
  // register service worker on window load event
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('sw_cached_pages.js')
      .then(reg => console.log('Service Worker: Registered'))
      .catch(err => console.log(`Service Worker: Error: ${err}`));
  });
}