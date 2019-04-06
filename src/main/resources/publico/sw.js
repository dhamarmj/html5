var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
    '/css/bootstrap.css',
    '/js/serviceWorker.js',
    '/sw.js',
    '/js/dexie.js',
    '/js/table.js',
    '/js/mainController.js',
    '/'
];

self.addEventListener('install', function (event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});


self.addEventListener('fetch', function (event) {
    event.respondWith(
        fetch(event.request) //Trata de cargar online
            .catch(function () { //No? busca en cache
                caches.match(event.request)

            })
            .then(
                function (response) { //Si, sigue normal
                    return response

                })
    );
});



