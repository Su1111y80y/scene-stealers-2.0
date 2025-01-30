// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1Fqy1":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "bed887d14d6bcbeb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"gLLPy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _tmdbServiceJs = require("./services/tmdbService.js");
var _tmdbServiceJsDefault = parcelHelpers.interopDefault(_tmdbServiceJs);
var _configJs = require("./config.js");
var _configJsDefault = parcelHelpers.interopDefault(_configJs);
var _dataStorageJs = require("./dataStorage.js");
//selector
const hamburger = document.querySelector("#hamburger-menu");
const exitBtn = document.querySelector("#exit-btn");
const header = document.querySelector("#header");
const navbar = document.querySelector("#navbar");
const listItemsLink = document.querySelector("#listItemsLink");
const linkHome = document.querySelector("#linkHome");
const linkJournal = document.querySelector("#linkJournal");
const linkEvents = document.querySelector("#linkEvents");
const linkRegister = document.querySelector("#linkRegister");
let divContainer;
//hamburger click
hamburger.addEventListener("click", ()=>{
    // console.log("clicked");
    // document.querySelector(".navigation").classList.toggle("change");
    //make a container for links
    divContainer = document.createElement("div");
    divContainer.setAttribute("id", "divContainer");
    divContainer.className = "absolute w-full h-full top-[7rem] bg-secondaryColor z-50"; // Added z-50
    //show the navbar
    navbar.classList.remove("hidden", "laptop:flex");
    navbar.classList.add("flex", "flex-col");
    //styling the links
    linkHome.className = "text-primaryColor mt-12 text-4xl flex justify-center items-center hover:text-5xl hover:underline";
    linkJournal.className = "text-primaryColor mt-12 text-4xl flex justify-center items-center  hover:text-5xl hover:underline";
    linkEvents.className = "text-primaryColor mt-12 text-4xl flex justify-center items-center  hover:text-5xl hover:underline";
    linkRegister.className = "text-primaryColor mt-12 text-4xl flex justify-center items-center  hover:text-5xl hover:underline";
    //hide the hamburger menu and show the exit buttons
    hamburger.classList.add("hidden");
    exitBtn.classList.remove("hidden");
    // append links
    divContainer.appendChild(linkHome);
    divContainer.appendChild(linkJournal);
    divContainer.appendChild(linkEvents);
    divContainer.appendChild(linkRegister);
    //append to header container
    header.appendChild(divContainer);
});
//exit btn click
exitBtn.addEventListener("click", ()=>{
    // console.log("clicked");
    // document.querySelector(".navigation").classList.toggle("change");
    //show the navbar
    navbar.classList.add("hidden", "laptop:flex");
    navbar.classList.remove("flex", "flex-col");
    //styling the links
    linkHome.classList.remove("text-primaryColor", "mt-12", "text-4xl", "flex", "justify-center", "items-center", "hover:text-5xl", "hover:underline");
    linkJournal.classList.remove("text-primaryColor", "mt-12", "text-4xl", "flex", "justify-center", "items-center", "hover:text-5xl", "hover:underline");
    linkEvents.classList.remove("text-primaryColor", "mt-12", "text-4xl", "flex", "justify-center", "items-center", "hover:text-5xl", "hover:underline");
    linkRegister.classList.remove("text-primaryColor", "mt-12", "text-4xl", "flex", "justify-center", "items-center", "hover:text-5xl", "hover:underline");
    //hide the exit button and show the hamburger
    hamburger.classList.remove("hidden");
    exitBtn.classList.add("hidden");
    //remove div
    if (divContainer !== null) header.removeChild(divContainer);
});
// search
//selectors
const userInput = document.querySelector("#userInput");
// const queryText = document.getElementById("queryText");
// const container = document.querySelector("#container");
//session storage input
let querySearch = JSON.parse(sessionStorage.getItem("query")) || [];
//trigger change event by updating the value
userInput.addEventListener("change", updateValue);
//updating the session storage item
async function updateValue(e) {
    // queryText.textContent = e.target.value;
    sessionStorage.setItem("query", JSON.stringify([
        e.target.value
    ]));
// window.userInput.reload();
}
//output session storage item
// console.log(querySearch);
// Fetch search movies from TMDB
async function searchMovies(query) {
    try {
        // Fetch search movies from TMDB
        const search = await (0, _tmdbServiceJsDefault.default).searchMovie(query);
        //render output to html
        renderMovieSearch(search, header);
    } catch (error) {
        console.error("Error fetching movies:", error);
    }
}
//render output to html
function renderMovieSearch(search, container) {
    if (!search) return;
    //make a container for search
    divContainer = document.createElement("div");
    divContainer.setAttribute("id", "divContainer");
    divContainer.className = "absolute w-full px-[3rem] top-[7rem] bg-secondaryColor";
    // search.results.length
    for(let i = 0; i < 5; i++){
        //title
        const title = document.createElement("h2");
        title.textContent = search.results[i].title;
        title.className = "text-primaryColor  text-2xl flex justify-center items-center  hover:underline z-200";
        // text
        const text = document.createElement("p");
        text.textContent = search.results[i].overview;
        text.className = "text-primaryColor  flex ml-12 mb-[2rem] ";
        //create img
        // const img = document.createElement("img");
        //append to card
        divContainer.appendChild(title);
        divContainer.appendChild(text);
        // console.log(querySearch.length);
        if (querySearch.length === 1) {
            //append to container
            container.appendChild(divContainer);
            //append to container
            header.appendChild(divContainer);
        }
    }
}
console.log(sessionStorage.getItem("query"));
if (sessionStorage.getItem("query") !== null) {
    let reload = true;
    if (reload) // window.location.reload();
    // sessionStorage.setItem("query").remove;
    reload = false;
}
searchMovies(JSON.parse(sessionStorage.getItem("query")));
// end of search
/**
 * Fetches and displays popular movies in the movie container
 * Creates movie cards with poster, title, year, and rating
 */ async function displayMovies() {
    try {
        // Fetch popular movies from TMDB
        const movies = (await (0, _tmdbServiceJsDefault.default).getPopularMovies()).results;
        const movieContainer = document.getElementById("movie-cards");
        if (!movieContainer) return;
        movieContainer.innerHTML = ""; // Clear existing content
        // Create and append movie cards
        movies.forEach((movie)=>{
            const movieCard = document.createElement("div");
            movieCard.className = "bg-white rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-all flex flex-col justify-between";
            const movieImage = document.createElement("img");
            movieImage.className = "w-full h-auto";
            movieImage.alt = `${movie.title}Poster`;
            movieImage.src = movie.poster_path ? (0, _configJsDefault.default).imageBaseUrl + movie.poster_path : "./images/no-poster.jpg";
            const movieDetails = document.createElement("div");
            movieDetails.className = "p-4";
            const movieTitle = document.createElement("h3");
            movieTitle.textContent = movie.title;
            movieTitle.className = "text-xl font-bold mb-2";
            const movieDate = document.createElement("p");
            movieDate.className = "text-gray-700 text-base";
            movieDate.textContent = new Date(movie.release_date).getFullYear();
            const movieRating = document.createElement("p");
            movieRating.className = "text-gray-600 text-sm mt-2";
            movieRating.textContent = movie.vote_average;
            const btnContainer = document.createElement("div");
            btnContainer.className = "flex gap-1 justify-end items-center bg-[#a5b4fc] z-50 px-4 py-2";
            const heart = document.createElement("img");
            heart.className = "w-8";
            heart.src = new URL(require("2ca79b2203478094")).href;
            if ((0, _dataStorageJs.isInFavorites)(movie.id)) heart.src = new URL(require("50d2bc1feed03c0")).href;
            const save = document.createElement("img");
            save.className = "w-6";
            save.src = new URL(require("aefa51d781f9ee1c")).href;
            if ((0, _dataStorageJs.isInWatchlist)(movie.id)) save.src = new URL(require("2ae08c762e4d3f03")).href;
            const favBtn = document.createElement("a");
            favBtn.className = "py-2 rounded-lg text-white cursor-pointer";
            const saveBtn = document.createElement("a");
            saveBtn.className = "px-4 py-2 rounded-lg text-white cursor-pointer";
            favBtn.addEventListener("click", ()=>{
                if ((0, _dataStorageJs.isInFavorites)(movie.id)) {
                    alert(`${movie.title} is already in your favorites!`);
                    return;
                }
                if ((0, _dataStorageJs.addToFavorites)(movie)) {
                    heart.src = new URL(require("50d2bc1feed03c0")).href;
                    alert(`${movie.title} added to favorites!`);
                }
            });
            saveBtn.addEventListener("click", ()=>{
                if ((0, _dataStorageJs.isInWatchlist)(movie.id)) {
                    alert(`${movie.title} is already in your watchlist!`);
                    return;
                }
                if ((0, _dataStorageJs.addToWatchlist)(movie)) {
                    save.src = new URL(require("2ae08c762e4d3f03")).href;
                    alert(`${movie.title} added to your watchlist!`);
                }
            });
            favBtn.appendChild(heart);
            saveBtn.appendChild(save);
            btnContainer.appendChild(saveBtn);
            btnContainer.appendChild(favBtn);
            movieDetails.appendChild(movieTitle);
            movieDetails.appendChild(movieDate);
            movieDetails.appendChild(movieRating);
            movieCard.appendChild(movieImage);
            movieCard.appendChild(movieDetails);
            movieContainer.appendChild(movieCard);
            movieCard.appendChild(btnContainer);
        });
    } catch (error) {
        console.error("Error fetching movies:", error);
    }
}
// Initialize the movie display on page load
displayMovies();
document.addEventListener("DOMContentLoaded", ()=>{
    const heroContainer = document.getElementById("hero-content");
    // Create animated header
    const header = document.createElement("h1");
    header.textContent = "Welcome to SceneStealers";
    header.classList.add("text-6xl", "text-white", "font-['Bungee']", "opacity-0", "translate-y-12");
    heroContainer.appendChild(header);
    // Apply fade-in animation with delay
    setTimeout(()=>{
        header.classList.remove("opacity-0", "translate-y-12");
        header.classList.add("transition-all", "duration-1000", "opacity-100", "translate-y-0");
    }, 300);
    // Create animated subheading
    const subheading = document.createElement("p");
    subheading.textContent = "Discover the latest movies, trending stars, and all things cinema!";
    subheading.classList.add("text-xl", "text-white", "mt-4", "mb-8", "opacity-0", "translate-y-12");
    heroContainer.appendChild(subheading);
    // Apply fade-in animation with delay
    setTimeout(()=>{
        subheading.classList.remove("opacity-0", "translate-y-12");
        subheading.classList.add("transition-all", "duration-1000", "opacity-100", "translate-y-0");
    }, 600);
    // Add movie details (Posters and Titles)
    const movieContainer = document.createElement("div");
    movieContainer.classList.add("relative", "w-full", "h-96", "overflow-hidden");
    heroContainer.appendChild(movieContainer);
    // Movie Data (Use relative paths for images)
    const movies = [
        {
            title: "Mufasa: The Lion King",
            description: "Fortsetzung zu Disneys Realfilm-Remake Der K\xf6nig der L\xf6wen von 2019. Mufasa: The Lion King wird von Barry Jenkins inszeniert.",
            poster: new URL(require("5f9cc350673e5fae")).href
        },
        {
            title: "Kraven the Hunter",
            description: "Sergei Kravinoff leidet unter der komplexen Beziehung zu seinem kaltherzigen und skrupellosen Vater.",
            poster: new URL(require("b4f0528a9e610fc6")).href
        },
        {
            title: "Venom: The Last Dance",
            description: "Der Reporter Eddie Brock und Venom sind auf der Flucht vor dem Gesetz und einer geheimen Spezialeinheit des US-Milit\xe4rs.",
            poster: new URL(require("88948ea4f21612ce")).href
        }
    ];
    // Create movie cards for the slideshow
    movies.forEach((movie, index)=>{
        const movieCard = document.createElement("div");
        movieCard.classList.add("absolute", "w-full", "h-full", "opacity-0", "transform", "transition-all", "duration-1000");
        movieCard.setAttribute("data-index", index);
        movieContainer.appendChild(movieCard);
        const movieImage = document.createElement("img");
        movieImage.src = movie.poster;
        movieImage.alt = `${movie.title} Poster`;
        movieImage.classList.add("w-full", "h-full", "object-cover", "rounded-lg");
        movieCard.appendChild(movieImage);
        const movieTitle = document.createElement("h2");
        movieTitle.textContent = movie.title;
        movieTitle.classList.add("absolute", "bottom-10", "left-10", "text-white", "text-2xl", "font-bold", "opacity-0", "translate-y-12");
        movieCard.appendChild(movieTitle);
        const movieDescription = document.createElement("p");
        movieDescription.textContent = movie.description;
        movieDescription.classList.add("absolute", "bottom-4", "left-10", "text-white", "text-sm", "opacity-0", "translate-y-12");
        movieCard.appendChild(movieDescription);
    });
    // Function to animate the slideshow
    let currentSlide = 0;
    const totalSlides = movies.length;
    const showSlide = (index)=>{
        const slides = document.querySelectorAll("[data-index]");
        slides.forEach((slide, idx)=>{
            if (idx === index) {
                slide.classList.remove("opacity-0", "translate-y-12");
                slide.classList.add("opacity-100", "translate-y-0", "transition-all", "duration-1000");
            } else {
                slide.classList.remove("opacity-100", "translate-y-0");
                slide.classList.add("opacity-0", "translate-y-12", "transition-all", "duration-1000");
            }
        });
        // Animate the text
        const title = slides[index].querySelector("h2");
        const description = slides[index].querySelector("p");
        title.classList.remove("opacity-0", "translate-y-12");
        title.classList.add("opacity-100", "translate-y-0", "transition-all", "duration-1000");
        description.classList.remove("opacity-0", "translate-y-12");
        description.classList.add("opacity-100", "translate-y-0", "transition-all", "duration-1000");
    };
    // Initial slide
    showSlide(currentSlide);
    // Set up the slideshow transition every 3 seconds
    setInterval(()=>{
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }, 3000); // Change slide every 3 seconds
});

},{"./services/tmdbService.js":"6jqhD","./config.js":"jtCLN","./dataStorage.js":"h1A0m","2ca79b2203478094":"aJFga","50d2bc1feed03c0":"5z692","aefa51d781f9ee1c":"7SJpA","2ae08c762e4d3f03":"1eov2","5f9cc350673e5fae":"f6bsm","b4f0528a9e610fc6":"4TGWK","88948ea4f21612ce":"eo0ev","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6jqhD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _configJs = require("../config.js");
var _configJsDefault = parcelHelpers.interopDefault(_configJs);
/**
 * Service class for handling TMDB API requests
 */ class TMDBService {
    /**
     * Fetches popular movies from TMDB API
     * @returns {Promise<Object>} JSON response containing popular movies
     */ async getPopularMovies() {
        const response = await fetch(`${(0, _configJsDefault.default).tmdbBaseUrl}/movie/popular?api_key=${(0, _configJsDefault.default).tmdbApiKey}`);
        return await response.json();
    }
    /**
     * Fetches detailed information for a specific movie including credits
     * @param {string} movieId - The ID of the movie to fetch
     * @returns {Promise<Object>} JSON response containing movie details
     */ async getMovieDetails(movieId) {
        const response = await fetch(`${(0, _configJsDefault.default).tmdbBaseUrl}/movie/${movieId}?api_key=${(0, _configJsDefault.default).tmdbApiKey}&append_to_response=credits,videos,keywords,recommendations`);
        return await response.json();
    }
    /**
     * Searches for movies using a query string
     * @param {string} query - The search query
     * @returns {Promise<Object>} JSON response containing search results
     */ async searchMovies(query) {
        const response = await fetch(`${(0, _configJsDefault.default).tmdbBaseUrl}/search/movie?api_key=${(0, _configJsDefault.default).tmdbApiKey}&query=${encodeURIComponent(query)}`);
        return await response.json();
    }
}
exports.default = new TMDBService();

},{"../config.js":"jtCLN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jtCLN":[function(require,module,exports,__globalThis) {
/**
 * Configuration object for TMDB API
 * @constant {Object} config
 * @property {string} tmdbApiKey - API key for TMDB authentication
 * @property {string} tmdbBaseUrl - Base URL for TMDB API endpoints
 * @property {string} imageBaseUrl - Base URL for TMDB image CDN
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const config = {
    tmdbApiKey: '68e0f582ce41f63a89232fc0cfe1c798',
    tmdbBaseUrl: 'https://api.themoviedb.org/3',
    imageBaseUrl: 'https://image.tmdb.org/t/p/w500'
};
exports.default = config;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"h1A0m":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addToFavorites", ()=>addToFavorites);
parcelHelpers.export(exports, "removeFromFavorites", ()=>removeFromFavorites);
parcelHelpers.export(exports, "getFavorites", ()=>getFavorites);
parcelHelpers.export(exports, "isInFavorites", ()=>isInFavorites);
parcelHelpers.export(exports, "saveMovieReview", ()=>saveMovieReview);
parcelHelpers.export(exports, "getMovieReview", ()=>getMovieReview);
parcelHelpers.export(exports, "addToWatchlist", ()=>addToWatchlist);
parcelHelpers.export(exports, "getWatchlist", ()=>getWatchlist);
parcelHelpers.export(exports, "isInWatchlist", ()=>isInWatchlist);
parcelHelpers.export(exports, "removeFromWatchlist", ()=>removeFromWatchlist);
const addToFavorites = (movie)=>{
    if (isInFavorites(movie.id)) return false;
    const currFavs = getFavorites();
    const updatedFavs = [
        movie,
        ...currFavs
    ];
    localStorage.setItem("favorites", JSON.stringify(updatedFavs));
    return true;
};
const removeFromFavorites = (movieId)=>{
    const favorites = getFavorites();
    const updatedFavorites = favorites.filter((movie)=>movie.id !== movieId);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
};
const getFavorites = ()=>{
    return JSON.parse(localStorage.getItem("favorites")) || [];
};
const isInFavorites = (movieId)=>{
    const favorites = getFavorites();
    return favorites.some((movie)=>movie.id === movieId);
};
const saveMovieReview = (movieId, review)=>{
    const reviews = JSON.parse(localStorage.getItem("movieReviews")) || {};
    reviews[movieId] = review;
    localStorage.setItem("movieReviews", JSON.stringify(reviews));
};
const getMovieReview = (movieId)=>{
    const reviews = JSON.parse(localStorage.getItem("movieReviews")) || {};
    return reviews[movieId] || {
        rating: 0,
        comment: ""
    };
};
const addToWatchlist = (movie)=>{
    const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    const updatedWatchlist = [
        movie,
        ...watchlist
    ];
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
};
const getWatchlist = ()=>{
    return JSON.parse(localStorage.getItem("watchlist")) || [];
};
const isInWatchlist = (movieId)=>{
    const watchlist = getWatchlist();
    return watchlist.some((movie)=>movie.id === movieId);
};
const removeFromWatchlist = (movieId)=>{
    const watchlist = getWatchlist();
    const updatedWatchlist = watchlist.filter((movie)=>movie.id !== movieId);
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aJFga":[function(require,module,exports,__globalThis) {
module.exports = require("657afbebbb2213a7").getBundleURL('gnRNX') + "heart-regular.ff5c3a90.svg" + "?" + Date.now();

},{"657afbebbb2213a7":"lgJ39"}],"lgJ39":[function(require,module,exports,__globalThis) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"5z692":[function(require,module,exports,__globalThis) {
module.exports = require("36aeb1bab24a799").getBundleURL('gnRNX') + "heart-solid.6b9d832b.svg" + "?" + Date.now();

},{"36aeb1bab24a799":"lgJ39"}],"7SJpA":[function(require,module,exports,__globalThis) {
module.exports = require("37422e36c6034541").getBundleURL('gnRNX') + "bookmark-regular.9c9ccded.svg" + "?" + Date.now();

},{"37422e36c6034541":"lgJ39"}],"1eov2":[function(require,module,exports,__globalThis) {
module.exports = require("adb8afa77ace3fbd").getBundleURL('gnRNX') + "bookmark-solid.afbd767d.svg" + "?" + Date.now();

},{"adb8afa77ace3fbd":"lgJ39"}],"f6bsm":[function(require,module,exports,__globalThis) {
module.exports = require("36eaab85c32e0577").getBundleURL('gnRNX') + "mufasa.5bec6b5c.png" + "?" + Date.now();

},{"36eaab85c32e0577":"lgJ39"}],"4TGWK":[function(require,module,exports,__globalThis) {
module.exports = require("440c8cb15b779b00").getBundleURL('gnRNX') + "kraven.33fdd2a1.png" + "?" + Date.now();

},{"440c8cb15b779b00":"lgJ39"}],"eo0ev":[function(require,module,exports,__globalThis) {
module.exports = require("4fd184ef1c509570").getBundleURL('gnRNX') + "venom.169db06e.png" + "?" + Date.now();

},{"4fd184ef1c509570":"lgJ39"}]},["1Fqy1","gLLPy"], "gLLPy", "parcelRequire94c2")

//# sourceMappingURL=index.4d6bcbeb.js.map
