/// <reference lib="webworker" />

export default null

declare let self: ServiceWorkerGlobalScope

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('green-design-system-v1').then((cache) => {
      return cache.addAll(['/', '/components'])
    }),
  )
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request)
    }),
  )
})
