<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// Service Worker for NEXUS REALITY
// Enables offline functionality and faster loading

const CACHE_NAME = 'nexus-reality-v1';
const urlsToCache = [
  '/ultimate-perfectionist-app/',
  '/ultimate-perfectionist-app/index.html',
  '/ultimate-perfectionist-app/app.html',
  '/ultimate-perfectionist-app/study-plan.html',
  '/ultimate-perfectionist-app/daily-tracker.html',
  '/ultimate-perfectionist-app/pyq-solver.html',
  '/ultimate-perfectionist-app/weak-topic-analyzer.html',
  '/ultimate-perfectionist-app/formula-sheets.html',
  '/ultimate-perfectionist-app/rank-predictor.html',
  '/ultimate-perfectionist-app/test.html',
  '/ultimate-perfectionist-app/dashboard.html',
  '/ultimate-perfectionist-app/quick-revision.html',
  '/ultimate-perfectionist-app/simulations.html',
  '/ultimate-perfectionist-app/chapter-viewer.html',
  '/ultimate-perfectionist-app/manifest.json'
];

// Install event - cache resources
self.addEventListener('install', event => {
  console.log('🎯 Service Worker: Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('📦 Service Worker: Caching files');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('✅ Service Worker: Activated');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('🗑️ Service Worker: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // Clone the request
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(response => {
          // Check if valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clone the response
          const responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });

          return response;
        }).catch(() => {
          // Offline fallback
          return caches.match('/ultimate-perfectionist-app/index.html');
        });
      })
  );
});

// Background sync for offline data
self.addEventListener('sync', event => {
  if (event.tag === 'sync-progress') {
    event.waitUntil(syncProgress());
  }
});

async function syncProgress() {
  console.log('🔄 Syncing progress data...');
  // Sync logic here if needed
}

// Push notifications (for future use)
self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : 'New update available!',
    icon: '/ultimate-perfectionist-app/icon-192.png',
    badge: '/ultimate-perfectionist-app/badge-72.png',
    vibrate: [200, 100, 200],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };

  event.waitUntil(
    self.registration.showNotification('NEXUS REALITY', options)
  );
});

console.log('🎯 NEXUS REALITY Service Worker loaded!');
</body>
</html>