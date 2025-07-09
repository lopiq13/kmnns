self.addEventListener("install", event => {
    event.waitUntil(
      caches.open("koty-cache").then(cache => {
        return cache.addAll([
          "./",
          "./index.html",
          "./style.css",
          "./script.js",
          "./manifest.json",
          "./kot1.jpg",
          "./kot.jpg",
          "./video.mp4"
        ]);
      })
    );
  });
  
  self.addEventListener("fetch", event => {
    event.respondWith(
      caches.match(event.request).then(response => response || fetch(event.request))
    );
  });
  