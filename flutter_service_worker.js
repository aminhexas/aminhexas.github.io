'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/assets/images/Xai_logo_small.ico": "0661b016cc7fd8e6734440f11b110b16",
"assets/assets/images/usm_hexai_logo_small.ico": "cb468deb0e422d766f05f6c2dc64a35f",
"assets/assets/images/pitt_hexai_logo.png": "450f0799dd31e1c756afa9a2f5484825",
"assets/assets/images/kurt.jpg": "2c1cc26161d792ca29c6963e412fc51a",
"assets/assets/images/topbar6.png": "83b02e29cd02b0278b69f53e8ddd0887",
"assets/assets/images/topbar3.png": "a078eba856b1f006130e89efc6e29160",
"assets/assets/images/Johannesplate.jpg": "ad76105b19f731bb3a6bdbcb35005402",
"assets/assets/images/pitt_hexai_logo_white.png": "450f0799dd31e1c756afa9a2f5484825",
"assets/assets/images/bambang.jpg": "05e5bffd20832e566d96a99d3697d0df",
"assets/assets/images/lisaparker.jpg": "476331b9f2cb900d6b78d1fabd45df92",
"assets/assets/images/talk1.png": "cceefcdd8a0e7b48a21ac712fd6dd18d",
"assets/assets/images/deeptka.png": "e243bf20ccdad797e31628573197db28",
"assets/assets/images/operativenotes.jpg": "95c2e46c875836a958b0a5f7840b7862",
"assets/assets/images/logo.png": "547200cd9474590fa26ee6fecf2842ec",
"assets/assets/images/yanshanwang.jpg": "6f244191b97cfb9fb734ab7a9fa872ab",
"assets/assets/images/tjalogo.ico": "461844b8d3a9aaa4d1b4862318d2fe49",
"assets/assets/images/crt.png": "fbaa6f0baf590f5621c0bfc52fb877bd",
"assets/assets/images/test.txt": "9434d5a16716fa970b95c28d9a3baedf",
"assets/assets/images/kneesegment.png": "e4fa28933765fd4d61be87e4d098cc52",
"assets/assets/images/topbar7.png": "1c6c9ce486ab52432955caafb64fa2b4",
"assets/assets/images/emma.jpg": "82a7e57d1c3c9e8fe68b8a2ab8290528",
"assets/assets/images/Pitthexai_logo_icon.png": "da0a448fa1aafa8fbb061c191ed62f44",
"assets/assets/images/Xai_logo_small.png": "05101533db978831a7b6857591cf03db",
"assets/assets/images/Xai_logo_small.jpg": "843433bcb6ed839ecd7635a0a558ae93",
"assets/assets/images/topbar4.png": "b6b51b70b6d8faf401abae4537af7d3b",
"assets/assets/images/aptafti.png": "43c9be4d40cea39a7566bb56f80daddc",
"assets/assets/images/talk2.png": "b0a9b15827d4513cc71e199201481ef7",
"assets/assets/images/text.txt": "68b329da9893e34099c7d8ad5cb9c940",
"assets/assets/images/topbar1.png": "d76bf9fc810316bc2f29f4859bafd098",
"assets/assets/images/beth.png": "0e35ecf9944db464a026ec483edf65c9",
"assets/assets/images/Pitthexai_logo.png": "97cae661f6ee227ae07dc9b170d0d81f",
"assets/assets/images/topbar5.png": "92fded979b4f007db8b5750036d49de8",
"assets/assets/images/jayirrgang.jpg": "08b5e14b949f61711d6cd0d354db2f44",
"assets/assets/images/sam.jpg": "4ab9c5b753e6584ce48809c47c746572",
"assets/assets/images/topbar2.png": "b0571b1f04ecd712e53e7d5a960ea695",
"assets/assets/images/summerschool2022_1.png": "9c172a2a8dd97a3b3cf2070132002df3",
"assets/assets/images/summerschool2022_2.png": "c6c1451cc5f148fd71d0e9742752c4aa",
"assets/assets/images/logo.ico": "2ac1463f53bb391eb4e97cd5eb7f7f30",
"assets/assets/images/kennurish.jpg": "d829749833a707b90152d5de615f06c1",
"assets/assets/images/usm_hexai_logo_small.png": "f0669273a9aa2c42fd10e24f3dd9f7b3",
"assets/assets/images/kneeyolo.png": "66284944875c631b1e3baefd2cb6472f",
"assets/assets/images/operativenotes.png": "44c004a0e15b96ea0f5ed5c6f2c2e6cf",
"assets/NOTICES": "b98da8378f67a226e80331a8bd01d231",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/AssetManifest.json": "fd1bcc3a520a1e2f5769922ce459e610",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/shaders/ink_sparkle.frag": "8e596c8302a3836af212bc0b4737d318",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"main.dart.js": "98f51f6cabad20fb483f1a77f63bb5cf",
"favicon.png": "2f4cd74573c9f8f3032078fe15a2328f",
"icons/Icon-512.png": "fa4876f3c627583bfa3aba80440bf5e6",
"icons/Icon-maskable-192.png": "6f761a64d4b8f7eec0775242fdc6e8d4",
"icons/Icon-maskable-512.png": "fa4876f3c627583bfa3aba80440bf5e6",
"icons/Icon-192.png": "6f761a64d4b8f7eec0775242fdc6e8d4",
"version.json": "fe0e5401cf93bc91d742c720405a8dae",
"manifest.json": "6d567b6b02837c8eb3ae8e3b7396b956",
"index.html": "db6d2819248009394ec05448c416c812",
"/": "db6d2819248009394ec05448c416c812"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
