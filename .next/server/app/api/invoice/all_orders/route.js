"use strict";
(() => {
var exports = {};
exports.id = 6837;
exports.ids = [6837];
exports.modules = {

/***/ 39491:
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ 82361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 57147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 13685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 12781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 76224:
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ 57310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 59796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 13910:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/invoice/all_orders/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(89335);
// EXTERNAL MODULE: ./node_modules/next/headers.js
var headers = __webpack_require__(40063);
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 48 modules
var axios = __webpack_require__(62410);
;// CONCATENATED MODULE: ./app/api/invoice/all_orders/route.js
// import User from "@/models/User";



const GET = async (req)=>{
    const authToken = (0,headers.cookies)().get(process.env.authToken)?.value || "";
    const check = await axios/* default */.Z.get(`${process.env.api}/order/orders`, {
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    });
    return next_response/* default */.Z.json({
        status: 200,
        message: check.data
    });
};

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Finvoice%2Fall_orders%2Froute&name=app%2Fapi%2Finvoice%2Fall_orders%2Froute&pagePath=private-next-app-dir%2Fapi%2Finvoice%2Fall_orders%2Froute.js&appDir=C%3A%5CUsers%5CCC%5CDesktop%5CEcommerce%5Cfrontend%5Capp&appPaths=%2Fapi%2Finvoice%2Fall_orders%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/invoice/all_orders/route","pathname":"/api/invoice/all_orders","filename":"route","bundlePath":"app/api/invoice/all_orders/route"},"resolvedPagePath":"C:\\Users\\CC\\Desktop\\Ecommerce\\frontend\\app\\api\\invoice\\all_orders\\route.js","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...options,
      userland: route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/invoice/all_orders/route"

    

/***/ }),

/***/ 40063:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


module.exports = __webpack_require__(74937);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2697,5501,9335,2410], () => (__webpack_exec__(13910)));
module.exports = __webpack_exports__;

})();