const CACHE_NAME = "taynplantz-v2";

const APP_FILES = [
  "./",
  "./index.html",
  "./taynplantz.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];

/* ==========================================
   INSTALL
========================================== */

self.addEventListener("install", event => {

  event.waitUntil(

    caches
      .open(CACHE_NAME)
      .then(cache => {

        return cache.addAll(APP_FILES);

      })

  );

  /*
   * Activate the new service worker immediately.
   */
  self.skipWaiting();

});

/* ==========================================
   ACTIVATE
========================================== */

self.addEventListener("activate", event => {

  event.waitUntil(

    caches
      .keys()
      .then(keys => {

        return Promise.all(

          keys
            .filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))

        );

      })
      .then(() => {

        return self.clients.claim();

      })

  );

});

/* ==========================================
   FETCH
========================================== */

self.addEventListener("fetch", event => {

  const request = event.request;

  /*
   * Only handle normal GET requests.
   */
  if (request.method !== "GET") {
    return;
  }

  /*
   * Don't interfere with external APIs.
   *
   * Pl@ntNet identification requests must go
   * directly to Pl@ntNet.
   */
  const url = new URL(request.url);

  if (url.origin !== self.location.origin) {
    return;
  }

  /*
   * Network-first:
   *
   * 1. Get the newest version from GitHub Pages.
   * 2. Update the cache.
   * 3. If offline, use the cached version.
   */
  event.respondWith(

    fetch(request)

      .then(response => {

        if (
          response &&
          response.status === 200 &&
          response.type === "basic"
        ) {

          const copy = response.clone();

          caches
            .open(CACHE_NAME)
            .then(cache => {

              cache.put(request, copy);

            });

        }

        return response;

      })

      .catch(() => {

        return caches.match(request);

      })

  );

});
