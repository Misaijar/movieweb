if (!self.define) {
  let e,
    i = {};
  const s = (s, n) => (
    (s = new URL(s + ".js", n).href),
    i[s] ||
      new Promise((i) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = s), (e.onload = i), document.head.appendChild(e);
        } else (e = s), importScripts(s), i();
      }).then(() => {
        let e = i[s];
        if (!e) throw new Error(`Module ${s} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, r) => {
    const o =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (i[o]) return;
    let c = {};
    const d = (e) => s(e, o),
      l = { module: { uri: o }, exports: c, require: d };
    i[o] = Promise.all(n.map((e) => l[e] || d(e))).then((e) => (r(...e), c));
  };
}
define(["./workbox-3625d7b0"], function (e) {
  "use strict";
  self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: "assets/DeveloperView-0bae778b.js", revision: null },
        { url: "assets/index-7d4213b0.js", revision: null },
        { url: "assets/index-f0b47f96.css", revision: null },
        { url: "assets/VideoTesterView-dcbcb6d0.js", revision: null },
        { url: "assets/workbox-window.prod.es5-dc90f814.js", revision: null },
        { url: "config.js", revision: "c3a5ddef583ef610437d8e826ee52fe2" },
        { url: "index.html", revision: "af33a6aef078c7877232f61c45956e72" },
        { url: "favicon.ico", revision: "de7674bb092bad4dc08dd526e8464697" },
        {
          url: "apple-touch-icon.png",
          revision: "cae0ab92548ba98dd5aeb34235f9617f",
        },
        {
          url: "safari-pinned-tab.svg",
          revision: "fd363adc5ac206e38c78a8a9d9bbde85",
        },
        {
          url: "android-chrome-192x192.png",
          revision: "496c321c53778a12b16f31802f6f2bc3",
        },
        {
          url: "android-chrome-512x512.png",
          revision: "9c2ae7b2713faecc1a99c7918c885934",
        },
        {
          url: "manifest.webmanifest",
          revision: "31b651545b2cf072f732b7c1609d61c5",
        },
      ],
      {}
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))
    );
});
