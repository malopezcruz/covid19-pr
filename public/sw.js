if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,c,n)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const t={uri:location.origin+s.slice(1)};return Promise.all(c.map(s=>{switch(s){case"exports":return a;case"module":return t;default:return e(s)}})).then(e=>{const s=n(...e);return a.default||(a.default=s),a})}))}}define("./sw.js",["./workbox-dcd0ea99"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/11.5729ab1486133ab54a15.js",revision:"6637136c5231013a8c469e033450534d"},{url:"/_next/static/chunks/3.b9d2e9b7024507707971.js",revision:"ef77703ee8b06096b380fa2c96d7683b"},{url:"/_next/static/chunks/a9a7754c.6bd81357ee75f2cb654b.js",revision:"d6fb91e614a9aa538c67713624c5ad21"},{url:"/_next/static/chunks/cb1608f2.fd75f6ee65a63d9f3425.js",revision:"b1be8d0d8e91839d8e2d7fa30a0bcc2e"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.49fd86fb7a171aeb00c2.js",revision:"db1b9659c67f01fe466281b5427c3981"},{url:"/_next/static/chunks/framework.97fa84ef20540191e268.js",revision:"74e2884781b65b1f8656ee9a44d64e84"},{url:"/_next/static/chunks/main-d64b3afa852108f5eaec.js",revision:"f75ea386bd3ac5a8dfe7c59327ed3818"},{url:"/_next/static/chunks/pages/_app-d5519e132ec0307a31b7.js",revision:"77089db16a78a1da70b23064992c4573"},{url:"/_next/static/chunks/pages/_error-b52f8b678ce4b85a362a.js",revision:"0ffc5512b987cb9dbdf2f00ea42a8761"},{url:"/_next/static/chunks/pages/index-f406b9f2bcaa0e38b890.js",revision:"c2815ccbbbe6f52f40c26d351020a4ad"},{url:"/_next/static/chunks/polyfills-a98cee78eb8282e29fb6.js",revision:"b6d968e5af60e0e204db3d6890e0baca"},{url:"/_next/static/chunks/webpack-90075e6e80d7078cd968.js",revision:"1328fd3452a30b389e912c88c44b5995"},{url:"/_next/static/css/1637bfce8f152a8bb4c0.css",revision:"84d0ecc246bac2b8e8964f11f5457945"},{url:"/_next/static/gVyHLveeRm_t6AOW1PAbH/_buildManifest.js",revision:"1851186e3d103cea061ec7545fce349a"},{url:"/_next/static/gVyHLveeRm_t6AOW1PAbH/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/favicon.ico",revision:"65773e27935107e411dde90c246813c0"},{url:"/fonts/lato-v16-latin-900.woff",revision:"a82ff6ac9208656f9a21a65dfacbcae3"},{url:"/fonts/lato-v16-latin-900.woff2",revision:"947e87c53b5765bfc8982613ccd789e9"},{url:"/fonts/lato-v16-latin-regular.woff",revision:"b8ee546acd6cc0c49f42ad3d48ef244f"},{url:"/fonts/lato-v16-latin-regular.woff2",revision:"b4d2c4c39853ee244272c04999b230ba"},{url:"/icons/icon-192x192.png",revision:"0aacdbafd9de1c00e31f977eb7e40038"},{url:"/icons/icon-512x512.png",revision:"1e3a07ff08c832fe819fec1464b5828d"},{url:"/icons/maskable_icon.png",revision:"cca3a6d47969b98ba4b2f03a3b51e693"},{url:"/manifest.json",revision:"8c23e9bd834745d6320949c94e77fafc"},{url:"/robot.txt",revision:"4727e603f59a962899d30070bf280e81"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
