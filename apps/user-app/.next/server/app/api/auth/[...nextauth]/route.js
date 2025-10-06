"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fabhishekyadav%2FDesktop%2Fcoinpay%2Fapps%2Fuser-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fabhishekyadav%2FDesktop%2Fcoinpay%2Fapps%2Fuser-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fabhishekyadav%2FDesktop%2Fcoinpay%2Fapps%2Fuser-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fabhishekyadav%2FDesktop%2Fcoinpay%2Fapps%2Fuser-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_abhishekyadav_Desktop_coinpay_apps_user_app_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"/Users/abhishekyadav/Desktop/coinpay/apps/user-app/app/api/auth/[...nextauth]/route.ts\",\n    nextConfigOutput,\n    userland: _Users_abhishekyadav_Desktop_coinpay_apps_user_app_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmFiaGlzaGVreWFkYXYlMkZEZXNrdG9wJTJGY29pbnBheSUyRmFwcHMlMkZ1c2VyLWFwcCUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZhYmhpc2hla3lhZGF2JTJGRGVza3RvcCUyRmNvaW5wYXklMkZhcHBzJTJGdXNlci1hcHAmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ3NDO0FBQ25IO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG9jcy8/ZjQ4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvYWJoaXNoZWt5YWRhdi9EZXNrdG9wL2NvaW5wYXkvYXBwcy91c2VyLWFwcC9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvYWJoaXNoZWt5YWRhdi9EZXNrdG9wL2NvaW5wYXkvYXBwcy91c2VyLWFwcC9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fabhishekyadav%2FDesktop%2Fcoinpay%2Fapps%2Fuser-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fabhishekyadav%2FDesktop%2Fcoinpay%2Fapps%2Fuser-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.ts":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/../../node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/auth */ \"(rsc)/./app/lib/auth.ts\");\n\n\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(_lib_auth__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFnQztBQUNlO0FBRS9DLE1BQU1FLFVBQVVGLGdEQUFRQSxDQUFDQyxrREFBV0E7QUFFTSIsInNvdXJjZXMiOlsid2VicGFjazovL2RvY3MvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cz9jOGE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCJcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9hdXRoXCJcblxuY29uc3QgaGFuZGxlciA9IE5leHRBdXRoKGF1dGhPcHRpb25zKVxuXG5leHBvcnQgeyBoYW5kbGVyIGFzIEdFVCwgaGFuZGxlciBhcyBQT1NUIH0iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJhdXRoT3B0aW9ucyIsImhhbmRsZXIiLCJHRVQiLCJQT1NUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./app/lib/auth.ts":
/*!*************************!*\
  !*** ./app/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var _repo_db_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @repo/db/client */ \"(rsc)/../../packages/db/index.ts\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/../../node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/../../node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: \"Credentials\",\n            credentials: {\n                name: {\n                    label: \"Name\",\n                    type: \"text\",\n                    placeholder: \"your name\"\n                },\n                phone: {\n                    label: \"Phone number\",\n                    type: \"tel\",\n                    maxlength: \"10\",\n                    placeholder: \"1231231231\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            // Authorize handles both sign-in and sign-up: if user exists we verify password, otherwise create a new user\n            async authorize (credentials) {\n                if (!credentials || !credentials.phone || !credentials.password) {\n                    // Missing required fields\n                    throw new Error(\"Missing phone or password\");\n                }\n                // Normalize phone (remove non-digits)\n                const phone = String(credentials.phone).replace(/\\D/g, \"\");\n                if (phone.length < 6) {\n                    throw new Error(\"Invalid phone number\");\n                }\n                // Check for existing user\n                const existingUser = await _repo_db_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findFirst({\n                    where: {\n                        number: phone\n                    }\n                });\n                if (existingUser) {\n                    const passwordValidation = await bcryptjs__WEBPACK_IMPORTED_MODULE_2___default().compare(credentials.password, existingUser.password);\n                    if (passwordValidation) {\n                        return {\n                            id: existingUser.id.toString(),\n                            name: existingUser.name,\n                            email: existingUser.number\n                        };\n                    }\n                    // Wrong password\n                    throw new Error(\"Invalid phone or password\");\n                }\n                // Create new user (sign-up on first use)\n                try {\n                    const hashedPassword = await bcryptjs__WEBPACK_IMPORTED_MODULE_2___default().hash(credentials.password, 10);\n                    const user = await _repo_db_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.create({\n                        data: {\n                            name: credentials.name || null,\n                            number: phone,\n                            password: hashedPassword\n                        }\n                    });\n                    return {\n                        id: user.id.toString(),\n                        name: user.name,\n                        email: user.number\n                    };\n                } catch (e) {\n                    console.error(\"Error creating user in authorize:\", e);\n                    throw new Error(\"Unable to create user\");\n                }\n            }\n        })\n    ],\n    secret: process.env.JWT_SECRET || process.env.NEXTAUTH_SECRET || \"secret\",\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token.name = user.name || token.name;\n                token.email = user.email || token.email;\n            }\n            return token;\n        },\n        // Populate session.user with id/email/name and ensure Balance exists\n        async session ({ token, session }) {\n            session.user.id = token.sub;\n            session.user.token = token.jti;\n            session.user.name = token.name || session.user.name;\n            session.user.email = token.email || session.user.email;\n            // Ensure balance exists for this user, but don't disconnect Prisma here (it is a shared client)\n            try {\n                if (session.user?.id) {\n                    await _repo_db_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].balance.upsert({\n                        where: {\n                            userId: Number(session.user.id)\n                        },\n                        update: {},\n                        create: {\n                            userId: Number(session.user.id),\n                            amount: 0,\n                            locked: 0\n                        }\n                    });\n                }\n            } catch (e) {\n                console.error(\"Error upserting balance in session callback:\", e);\n            }\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/user/signin\"\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDdUIsS0FBSyxHQUFHQSxNQUFNRyxHQUFHO1lBQzlCRixRQUFReEIsSUFBSSxDQUFDZCxJQUFJLEdBQUdxQyxNQUFNckMsSUFBSSxJQUFJc0MsUUFBUXhCLElBQUksQ0FBQ2QsSUFBSTtZQUNuRHNDLFFBQVF4QixJQUFJLENBQUNRLEtBQUssR0FBR2UsTUFBTWYsS0FBSyxJQUFJZ0IsUUFBUXhCLElBQUksQ0FBQ1EsS0FBSztZQUV0RCxnR0FBZ0c7WUFDaEcsSUFBSTtnQkFDQSxJQUFJZ0IsUUFBUXhCLElBQUksRUFBRU0sSUFBSTtvQkFDbEIsTUFBTXpCLHVEQUFFQSxDQUFDOEMsT0FBTyxDQUFDQyxNQUFNLENBQUM7d0JBQ3BCMUIsT0FBTzs0QkFBRTJCLFFBQVFDLE9BQU9OLFFBQVF4QixJQUFJLENBQUNNLEVBQUU7d0JBQUU7d0JBQ3pDeUIsUUFBUSxDQUFDO3dCQUNUcEIsUUFBUTs0QkFDSmtCLFFBQVFDLE9BQU9OLFFBQVF4QixJQUFJLENBQUNNLEVBQUU7NEJBQzlCMEIsUUFBUTs0QkFDUkMsUUFBUTt3QkFDWjtvQkFDSjtnQkFDSjtZQUNKLEVBQUUsT0FBT3BCLEdBQUc7Z0JBQ1JDLFFBQVFDLEtBQUssQ0FBQyxnREFBZ0RGO1lBQ2xFO1lBRUEsT0FBT1c7UUFDWDtJQUNKO0lBQ0FVLE9BQU87UUFDSEMsUUFBUTtJQUNaO0FBQ0osRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2RvY3MvLi9hcHAvbGliL2F1dGgudHM/NmJmYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGIgZnJvbSBcIkByZXBvL2RiL2NsaWVudFwiO1xuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdGpzXCI7XG5cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9ucyA9IHtcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICAgICAgICBuYW1lOiAnQ3JlZGVudGlhbHMnLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiB7IGxhYmVsOiBcIk5hbWVcIiwgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcInlvdXIgbmFtZVwiIH0sXG4gICAgICAgICAgICAgICAgcGhvbmU6IHsgbGFiZWw6IFwiUGhvbmUgbnVtYmVyXCIsIHR5cGU6IFwidGVsXCIsIG1heGxlbmd0aDogXCIxMFwiLCBwbGFjZWhvbGRlcjogXCIxMjMxMjMxMjMxXCIgfSxcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogXCJQYXNzd29yZFwiLCB0eXBlOiBcInBhc3N3b3JkXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIEF1dGhvcml6ZSBoYW5kbGVzIGJvdGggc2lnbi1pbiBhbmQgc2lnbi11cDogaWYgdXNlciBleGlzdHMgd2UgdmVyaWZ5IHBhc3N3b3JkLCBvdGhlcndpc2UgY3JlYXRlIGEgbmV3IHVzZXJcbiAgICAgICAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFsczogYW55KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjcmVkZW50aWFscyB8fCAhY3JlZGVudGlhbHMucGhvbmUgfHwgIWNyZWRlbnRpYWxzLnBhc3N3b3JkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE1pc3NpbmcgcmVxdWlyZWQgZmllbGRzXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBwaG9uZSBvciBwYXNzd29yZCcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIE5vcm1hbGl6ZSBwaG9uZSAocmVtb3ZlIG5vbi1kaWdpdHMpXG4gICAgICAgICAgICAgICAgY29uc3QgcGhvbmUgPSBTdHJpbmcoY3JlZGVudGlhbHMucGhvbmUpLnJlcGxhY2UoL1xcRC9nLCAnJyk7XG4gICAgICAgICAgICAgICAgaWYgKHBob25lLmxlbmd0aCA8IDYpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHBob25lIG51bWJlcicpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGZvciBleGlzdGluZyB1c2VyXG4gICAgICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgZGIudXNlci5maW5kRmlyc3QoeyB3aGVyZTogeyBudW1iZXI6IHBob25lIH0gfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZXhpc3RpbmdVc2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhc3N3b3JkVmFsaWRhdGlvbiA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKGNyZWRlbnRpYWxzLnBhc3N3b3JkLCBleGlzdGluZ1VzZXIucGFzc3dvcmQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocGFzc3dvcmRWYWxpZGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBleGlzdGluZ1VzZXIuaWQudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBleGlzdGluZ1VzZXIubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogZXhpc3RpbmdVc2VyLm51bWJlclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIFdyb25nIHBhc3N3b3JkXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBwaG9uZSBvciBwYXNzd29yZCcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBuZXcgdXNlciAoc2lnbi11cCBvbiBmaXJzdCB1c2UpXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaChjcmVkZW50aWFscy5wYXNzd29yZCwgMTApO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgZGIudXNlci5jcmVhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGNyZWRlbnRpYWxzLm5hbWUgfHwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXI6IHBob25lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBoYXNoZWRQYXNzd29yZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB1c2VyLmlkLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogdXNlci5udW1iZXJcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIHVzZXIgaW4gYXV0aG9yaXplOicsIGUpO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBjcmVhdGUgdXNlcicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgXSxcbiAgICBzZWNyZXQ6IHByb2Nlc3MuZW52LkpXVF9TRUNSRVQgfHwgcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVUIHx8IFwic2VjcmV0XCIsXG4gICAgY2FsbGJhY2tzOiB7XG4gICAgICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyIH06IHsgdG9rZW46IGFueTsgdXNlcjogYW55IH0pIHtcbiAgICAgICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICAgICAgdG9rZW4ubmFtZSA9IHVzZXIubmFtZSB8fCB0b2tlbi5uYW1lO1xuICAgICAgICAgICAgICAgIHRva2VuLmVtYWlsID0gdXNlci5lbWFpbCB8fCB0b2tlbi5lbWFpbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gUG9wdWxhdGUgc2Vzc2lvbi51c2VyIHdpdGggaWQvZW1haWwvbmFtZSBhbmQgZW5zdXJlIEJhbGFuY2UgZXhpc3RzXG4gICAgICAgIGFzeW5jIHNlc3Npb24oeyB0b2tlbiwgc2Vzc2lvbiB9OiBhbnkpIHtcbiAgICAgICAgICAgIHNlc3Npb24udXNlci5pZCA9IHRva2VuLnN1YjtcbiAgICAgICAgICAgIHNlc3Npb24udXNlci50b2tlbiA9IHRva2VuLmp0aTtcbiAgICAgICAgICAgIHNlc3Npb24udXNlci5uYW1lID0gdG9rZW4ubmFtZSB8fCBzZXNzaW9uLnVzZXIubmFtZTtcbiAgICAgICAgICAgIHNlc3Npb24udXNlci5lbWFpbCA9IHRva2VuLmVtYWlsIHx8IHNlc3Npb24udXNlci5lbWFpbDtcblxuICAgICAgICAgICAgLy8gRW5zdXJlIGJhbGFuY2UgZXhpc3RzIGZvciB0aGlzIHVzZXIsIGJ1dCBkb24ndCBkaXNjb25uZWN0IFByaXNtYSBoZXJlIChpdCBpcyBhIHNoYXJlZCBjbGllbnQpXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChzZXNzaW9uLnVzZXI/LmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGRiLmJhbGFuY2UudXBzZXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IHVzZXJJZDogTnVtYmVyKHNlc3Npb24udXNlci5pZCkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZToge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IE51bWJlcihzZXNzaW9uLnVzZXIuaWQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NrZWQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cHNlcnRpbmcgYmFsYW5jZSBpbiBzZXNzaW9uIGNhbGxiYWNrOicsIGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gc2Vzc2lvbjtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcGFnZXM6IHtcbiAgICAgICAgc2lnbkluOiAnL3VzZXIvc2lnbmluJ1xuICAgIH1cbn07Il0sIm5hbWVzIjpbImRiIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsImJjcnlwdCIsImF1dGhPcHRpb25zIiwicHJvdmlkZXJzIiwibmFtZSIsImNyZWRlbnRpYWxzIiwibGFiZWwiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJwaG9uZSIsIm1heGxlbmd0aCIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwiRXJyb3IiLCJTdHJpbmciLCJyZXBsYWNlIiwibGVuZ3RoIiwiZXhpc3RpbmdVc2VyIiwidXNlciIsImZpbmRGaXJzdCIsIndoZXJlIiwibnVtYmVyIiwicGFzc3dvcmRWYWxpZGF0aW9uIiwiY29tcGFyZSIsImlkIiwidG9TdHJpbmciLCJlbWFpbCIsImhhc2hlZFBhc3N3b3JkIiwiaGFzaCIsImNyZWF0ZSIsImRhdGEiLCJlIiwiY29uc29sZSIsImVycm9yIiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIkpXVF9TRUNSRVQiLCJORVhUQVVUSF9TRUNSRVQiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsInNlc3Npb24iLCJzdWIiLCJqdGkiLCJiYWxhbmNlIiwidXBzZXJ0IiwidXNlcklkIiwiTnVtYmVyIiwidXBkYXRlIiwiYW1vdW50IiwibG9ja2VkIiwicGFnZXMiLCJzaWduSW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/../../packages/db/index.ts":
/*!**********************************!*\
  !*** ../../packages/db/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prismaClientSingleton = ()=>{\n    return new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n};\nconst prisma = globalThis.prismaGlobal ?? prismaClientSingleton();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\nif (true) globalThis.prismaGlobal = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vcGFja2FnZXMvZGIvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTZDO0FBRTdDLE1BQU1DLHdCQUF3QjtJQUM1QixPQUFPLElBQUlELHdEQUFZQTtBQUN6QjtBQU1BLE1BQU1FLFNBQW1EQyxXQUFXQyxZQUFZLElBQUlIO0FBRXBGLGlFQUFlQyxNQUFNQSxFQUFBO0FBRXJCLElBQUlHLElBQXlCLEVBQWNGLFdBQVdDLFlBQVksR0FBR0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb2NzLy4uLy4uL3BhY2thZ2VzL2RiL2luZGV4LnRzP2RmYjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5cbmNvbnN0IHByaXNtYUNsaWVudFNpbmdsZXRvbiA9ICgpID0+IHtcbiAgcmV0dXJuIG5ldyBQcmlzbWFDbGllbnQoKVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIHZhciBwcmlzbWFHbG9iYWw6IHVuZGVmaW5lZCB8IFJldHVyblR5cGU8dHlwZW9mIHByaXNtYUNsaWVudFNpbmdsZXRvbj5cbn1cblxuY29uc3QgcHJpc21hOiBSZXR1cm5UeXBlPHR5cGVvZiBwcmlzbWFDbGllbnRTaW5nbGV0b24+ID0gZ2xvYmFsVGhpcy5wcmlzbWFHbG9iYWwgPz8gcHJpc21hQ2xpZW50U2luZ2xldG9uKClcblxuZXhwb3J0IGRlZmF1bHQgcHJpc21hXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSBnbG9iYWxUaGlzLnByaXNtYUdsb2JhbCA9IHByaXNtYSJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWFDbGllbnRTaW5nbGV0b24iLCJwcmlzbWEiLCJnbG9iYWxUaGlzIiwicHJpc21hR2xvYmFsIiwicHJvY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/../../packages/db/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fabhishekyadav%2FDesktop%2Fcoinpay%2Fapps%2Fuser-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fabhishekyadav%2FDesktop%2Fcoinpay%2Fapps%2Fuser-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();