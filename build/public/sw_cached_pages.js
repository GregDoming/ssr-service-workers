// ACTUAL SERVICE WORKER --------------------------------------
const cacheName = 'v1'; // Change to v2, see what happens

const cacheAssets = [
  'indexTEST.html',
  'client_bundle.js'
];

// Call Install Event
// This is where we will handle caching the assets 
self.addEventListener('install', e => {
  console.log('Service Worker: Installed');

  // wait until promise is finished until it gets rid of the service worker
  e.waitUntil(
    // caches is a storage api
    caches
      .open(cacheName)
      .then(cache => {
        console.log('Service Worker: Caching Files');
        cache.addAll(cacheAssets);
      }) // When everything is done, we can skip waiting 
      .then(() => self.skipWaiting())
      // NOW, FILES SHOULD BE IN CACHE!
  );
});

// Call Activate Event
self.addEventListener('activate', e => {
  console.log('Service Worker: Activated');
  // Remove unwanted caches
  // Loop thru caches. 
  // Condition that says - If current cache isn't cache we are looping thru (the current iteration),
  // then we want to delete it 
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if(cache !== cacheName) {
            console.log('Service Worker: Clearning Old Cache');
            return caches.delete(cache);
          }
        })
      )
    })
  )
});

// Call Fetch Event -- SHOW CACHED FILES IF WE'RE OFFLINE
self.addEventListener('fetch', e => {
  console.log('Service Worker: Fetching');
  // First check if live site is available, if not load cached site
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request))); // if not loaded, will pull from cache
})