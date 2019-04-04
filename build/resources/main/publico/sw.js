var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
    '/',
    '/css/bootstrap.css',
    '/js/serviceWorker.js',
    '/js/database.js',
    '/sw.js'
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
    var req = event.request;
    console.log('I am a request with url: ' +
        req.clone().url + ' Method: ' + req.clone().method)
    if (event.request.clone().method === 'GET') {
        event.respondWith(
            fetch(event.request) //Trata de cargar online
                .catch(function () {
                    caches.match(event.request)
                }) //No? busca en cache
                .then(function (response) {
                    return response
                })
        );
    } else if (event.request.clone().method === 'POST') {
        // attempt to send request normally
        event.respondWith(
            fetch(event.request)
                .catch(function () { // im online
                 //   submitFunction(event);
                })
                .then(function () { // offline
                    savePostRequests(html5_form)
                    document.getElementById("form").reset();
                })
        )
    }
});

function openDatabase() {
    // // if `flask-form` does not already exist in our browser (under
    // our site), it is created
    var indexedDBOpenRequest = indexedDB.open('html5_form', 1)
    indexedDBOpenRequest.onerror = function (error) {
        // error creating db
        console.error('IndexedDB error:', error)
    }
    indexedDBOpenRequest.onupgradeneeded = function () {
        // This should only executes if there's a need to
        // create/update db.
        this.result.createObjectStore('post_requests', {
            autoIncrement: true, keyPath: 'id'
        })
    }
// This will execute each time the database is opened.
    indexedDBOpenRequest.onsuccess = function () {
        our_db = this.result
    }
}

var our_db;
openDatabase();

self.addEventListener('message', function (event) {
    console.log('html5_form', event.data)
    if (event.data.hasOwnProperty('html5_form')) {
        // receives form data from script.js upon submission
        html5_form = event.data.html5_form
    }
});

function savePostRequests(payload) {
    var transaction = our_db.transaction(["post_requests"], "readwrite");
    var item = transaction.objectStore("post_requests");
    console.log("DIANTRE");
    item.add(
        payload
    );
}
