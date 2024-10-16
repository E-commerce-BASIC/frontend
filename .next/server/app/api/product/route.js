"use strict";
(() => {
var exports = {};
exports.id = 9500;
exports.ids = [9500];
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

/***/ 72431:
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

// NAMESPACE OBJECT: ./app/api/product/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET),
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(89335);
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 48 modules
var axios = __webpack_require__(62410);
// EXTERNAL MODULE: ./node_modules/next/headers.js
var headers = __webpack_require__(40063);
;// CONCATENATED MODULE: ./app/api/product/route.js
// import ClothingProduct from "@/models/Product";



const POST = async (req)=>{
    const authToken = (0,headers.cookies)().get(process.env.authToken)?.value || "";
    const formData = await req.formData();
    const clothingProduct = await axios/* default */.Z.post(process.env.api + "/product", formData, {
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    });
    if (!clothingProduct) return next_response/* default */.Z.json({
        status: 400,
        message: "Product not created"
    });
    return next_response/* default */.Z.json({
        status: 201,
        message: "Product created successfully",
        data: clothingProduct.data
    });
};
const GET = async (req)=>{
    const authToken = (0,headers.cookies)().get(process.env.authToken)?.value || "";
    const products = await axios/* default */.Z.get(process.env.api + "/product/getallproduct");
    if (!products) {
        return next_response/* default */.Z.json({
            status: 400,
            message: "No products found"
        });
    } else {
        return next_response/* default */.Z.json({
            status: 200,
            message: "Products fetched successfully",
            data: products.data
        });
    }
};

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fproduct%2Froute&name=app%2Fapi%2Fproduct%2Froute&pagePath=private-next-app-dir%2Fapi%2Fproduct%2Froute.js&appDir=C%3A%5CUsers%5CCC%5CDesktop%5CEcommerce%5Cfrontend%5Capp&appPaths=%2Fapi%2Fproduct%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/product/route","pathname":"/api/product","filename":"route","bundlePath":"app/api/product/route"},"resolvedPagePath":"C:\\Users\\CC\\Desktop\\Ecommerce\\frontend\\app\\api\\product\\route.js","nextConfigOutput":""}
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

    const originalPathname = "/api/product/route"

    

/***/ }),

/***/ 40063:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


module.exports = __webpack_require__(74937);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2697,5501,9335,2410], () => (__webpack_exec__(72431)));
module.exports = __webpack_exports__;

})();