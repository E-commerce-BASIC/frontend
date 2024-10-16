"use strict";
(() => {
var exports = {};
exports.id = 217;
exports.ids = [217];
exports.modules = {

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 21414:
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

// NAMESPACE OBJECT: ./app/api/Admin/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/next/headers.js
var headers = __webpack_require__(40063);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(89335);
;// CONCATENATED MODULE: ./app/api/Admin/route.js
// import ClothingProduct from "@/models/Product";



const POST = async (req)=>{
// const authToken = cookies().get(process.env.authToken)?.value || "";
// const { items } = await req.json(); // Expecting items from the request body
// try {
//   // Ensure you are sending the headers correctly in the axios request
//   const cart = await axios.post(
//     `${process.env.api}/order`,
//     {
//       product_id: items[0].productId,
//       quantity: items[0].quantity,
//     },
//     {
//       headers: {
//         Authorization: `Bearer ${authToken}`,
//       },
//     }
//   );
//   return NextResponse.json({
//     message: "hello",
//     cart: cart.data, // Access the data from the response
//   });
// } catch (error) {
//   console.error(error); // Use console.error for logging errors
//   return NextResponse.json({
//     message: "hello",
//     error: error.response?.data || error.message, // Return more useful error information
//   }, { status: error.response?.status || 500 }); // Set appropriate HTTP status
// }
};

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2FAdmin%2Froute&name=app%2Fapi%2FAdmin%2Froute&pagePath=private-next-app-dir%2Fapi%2FAdmin%2Froute.js&appDir=C%3A%5CUsers%5CCC%5CDesktop%5CEcommerce%5Cfrontend%5Capp&appPaths=%2Fapi%2FAdmin%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/Admin/route","pathname":"/api/Admin","filename":"route","bundlePath":"app/api/Admin/route"},"resolvedPagePath":"C:\\Users\\CC\\Desktop\\Ecommerce\\frontend\\app\\api\\Admin\\route.js","nextConfigOutput":""}
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

    const originalPathname = "/api/Admin/route"

    

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
var __webpack_exports__ = __webpack_require__.X(0, [2697,5501,9335], () => (__webpack_exec__(21414)));
module.exports = __webpack_exports__;

})();