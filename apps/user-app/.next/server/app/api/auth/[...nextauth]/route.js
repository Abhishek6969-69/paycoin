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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var _repo_db_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @repo/db/client */ \"(rsc)/../../packages/db/index.ts\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/../../node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/../../node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: \"Credentials\",\n            credentials: {\n                name: {\n                    label: \"Name\",\n                    type: \"text\",\n                    placeholder: \"your name\",\n                    required: true\n                },\n                phone: {\n                    label: \"Phone number\",\n                    type: \"tel\",\n                    maxlength: \"10\",\n                    placeholder: \"1231231231\",\n                    required: true\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\",\n                    required: true\n                }\n            },\n            // TODO: User credentials type from next-aut\n            async authorize (credentials) {\n                // Do zod validation, OTP validation here\n                const hashedPassword = await bcryptjs__WEBPACK_IMPORTED_MODULE_2___default().hash(credentials.password, 10);\n                const existingUser = await _repo_db_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findFirst({\n                    where: {\n                        number: credentials.phone\n                    }\n                });\n                if (existingUser) {\n                    const passwordValidation = await bcryptjs__WEBPACK_IMPORTED_MODULE_2___default().compare(credentials.password, existingUser.password);\n                    if (passwordValidation) {\n                        // console.log(existingUser.name)\n                        return {\n                            id: existingUser.id.toString(),\n                            name: existingUser.name,\n                            email: existingUser.number\n                        };\n                    }\n                    return null;\n                }\n                try {\n                    const user = await _repo_db_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.create({\n                        data: {\n                            name: credentials.name,\n                            number: credentials.phone,\n                            password: hashedPassword\n                        }\n                    });\n                    return {\n                        id: user.id.toString(),\n                        name: user.name,\n                        email: user.number\n                    };\n                } catch (e) {\n                    await _repo_db_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].$disconnect();\n                    console.error(e);\n                }\n                return null;\n            }\n        })\n    ],\n    secret: process.env.JWT_SECRET || \"secret\",\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token.name = user.name || token.name;\n                token.email = user.email || token.email;\n            }\n            return token;\n        },\n        // TODO: can u fix the type here? Using any is bad\n        async session ({ token, session }) {\n            // console.log(session,\"sss\")\n            session.user.id = token.sub;\n            session.user.token = token.jti;\n            session.user.name = token.name || session.user.name;\n            session.user.email = token.email || session.user.email;\n            try {\n                await _repo_db_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].balance.upsert({\n                    where: {\n                        userId: Number(session.user.id)\n                    },\n                    update: {},\n                    create: {\n                        userId: Number(session.user.id),\n                        amount: 0,\n                        locked: 0\n                    }\n                });\n            } catch (e) {\n                await _repo_db_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].$disconnect();\n            } finally{\n                async ()=>{\n                    await _repo_db_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].$disconnect(); // Close Prisma connection on successful execution\n                };\n            }\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/user/signin\"\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sQ0FBQ0MsTUFBTSxDQUFDO29CQUNwQnhCLE9BQU87d0JBQUV5QixRQUFRQyxPQUFPTixRQUFRdEIsSUFBSSxDQUFDTSxFQUFFO29CQUFFO29CQUN6Q3VCLFFBQVEsQ0FBQztvQkFDVHBCLFFBQVE7d0JBQ0prQixRQUFRQyxPQUFPTixRQUFRdEIsSUFBSSxDQUFDTSxFQUFFO3dCQUM5QndCLFFBQU87d0JBQ1BDLFFBQVE7b0JBQ1o7Z0JBQ0o7WUFDSixFQUNBLE9BQU1wQixHQUFFO2dCQUNQLE1BQU03Qix1REFBRUEsQ0FBQzhCLFdBQVc7WUFDckIsU0FDTztnQkFBRTtvQkFDTCxNQUFNOUIsdURBQUVBLENBQUM4QixXQUFXLElBQUksa0RBQWtEO2dCQUM1RTtZQUNGO1lBS0EsT0FBT1U7UUFDWDtJQUNKO0lBQ0FVLE9BQU87UUFDSEMsUUFBUTtJQUVkO0FBRUYsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RvY3MvLi9hcHAvbGliL2F1dGgudHM/NmJmYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGIgZnJvbSBcIkByZXBvL2RiL2NsaWVudFwiO1xuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIlxuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcblxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zID0ge1xuICAgIHByb3ZpZGVyczogW1xuICAgICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICAgICAgbmFtZTogJ0NyZWRlbnRpYWxzJyxcbiAgICAgICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICAgICAgbmFtZTp7bGFiZWw6XCJOYW1lXCIsIHR5cGU6XCJ0ZXh0XCIscGxhY2Vob2xkZXI6XCJ5b3VyIG5hbWVcIiwgcmVxdWlyZWQ6dHJ1ZX0sXG4gICAgICAgICAgICBwaG9uZTogeyBsYWJlbDogXCJQaG9uZSBudW1iZXJcIiwgdHlwZTogXCJ0ZWxcIiwgbWF4bGVuZ3RoOlwiMTBcIiwgIHBsYWNlaG9sZGVyOiBcIjEyMzEyMzEyMzFcIiwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiB7IGxhYmVsOiBcIlBhc3N3b3JkXCIsIHR5cGU6IFwicGFzc3dvcmRcIiwgcmVxdWlyZWQ6IHRydWUgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgLy8gVE9ETzogVXNlciBjcmVkZW50aWFscyB0eXBlIGZyb20gbmV4dC1hdXRcbiAgICAgICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHM6IGFueSkge1xuICAgICAgICAgICAgLy8gRG8gem9kIHZhbGlkYXRpb24sIE9UUCB2YWxpZGF0aW9uIGhlcmVcbiAgICAgICAgICAgIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2goY3JlZGVudGlhbHMucGFzc3dvcmQsIDEwKTtcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nVXNlciA9IGF3YWl0IGRiLnVzZXIuZmluZEZpcnN0KHtcbiAgICAgICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgICAgICBudW1iZXI6IGNyZWRlbnRpYWxzLnBob25lXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChleGlzdGluZ1VzZXIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXNzd29yZFZhbGlkYXRpb24gPSBhd2FpdCBiY3J5cHQuY29tcGFyZShjcmVkZW50aWFscy5wYXNzd29yZCwgZXhpc3RpbmdVc2VyLnBhc3N3b3JkKTtcbiAgICAgICAgICAgICAgICBpZiAocGFzc3dvcmRWYWxpZGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGV4aXN0aW5nVXNlci5uYW1lKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogZXhpc3RpbmdVc2VyLmlkLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBleGlzdGluZ1VzZXIubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBleGlzdGluZ1VzZXIubnVtYmVyXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGRiLnVzZXIuY3JlYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTpjcmVkZW50aWFscy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyOiBjcmVkZW50aWFscy5waG9uZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBoYXNoZWRQYXNzd29yZCxcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpZDogdXNlci5pZC50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogdXNlci5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogdXNlci5udW1iZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgICAgIGF3YWl0ICBkYi4kZGlzY29ubmVjdCgpXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgIF0sXG4gICAgc2VjcmV0OiBwcm9jZXNzLmVudi5KV1RfU0VDUkVUIHx8IFwic2VjcmV0XCIsXG4gICAgY2FsbGJhY2tzOiB7XG4gICAgICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyIH06e3Rva2VuOmFueSx1c2VyOmFueX0pIHtcbiAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgICB0b2tlbi5uYW1lID0gdXNlci5uYW1lIHx8IHRva2VuLm5hbWU7XG4gICAgICAgICAgICAgIHRva2VuLmVtYWlsPXVzZXIuZW1haWwgfHwgdG9rZW4uZW1haWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgICAgICB9LFxuICAgICAgICAvLyBUT0RPOiBjYW4gdSBmaXggdGhlIHR5cGUgaGVyZT8gVXNpbmcgYW55IGlzIGJhZFxuICAgICAgICBhc3luYyBzZXNzaW9uKHsgdG9rZW4sIHNlc3Npb24gfTogYW55KSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzZXNzaW9uLFwic3NzXCIpXG4gICAgICAgICAgICBzZXNzaW9uLnVzZXIuaWQgPSB0b2tlbi5zdWJcbiAgICAgICAgICAgIHNlc3Npb24udXNlci50b2tlbj10b2tlbi5qdGlcbiAgICAgICAgICAgIHNlc3Npb24udXNlci5uYW1lPXRva2VuLm5hbWUgfHwgc2Vzc2lvbi51c2VyLm5hbWU7ICBcbiAgICAgICAgICAgIHNlc3Npb24udXNlci5lbWFpbD10b2tlbi5lbWFpbCB8fCBzZXNzaW9uLnVzZXIuZW1haWw7XG4gICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgICAgYXdhaXQgZGIuYmFsYW5jZS51cHNlcnQoe1xuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyB1c2VySWQ6IE51bWJlcihzZXNzaW9uLnVzZXIuaWQpIH0sXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZToge30sIFxuICAgICAgICAgICAgICAgICAgICBjcmVhdGU6IHsgXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IE51bWJlcihzZXNzaW9uLnVzZXIuaWQpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDowLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2tlZDogMCxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2goZSl7XG4gICAgICAgICAgICAgYXdhaXQgZGIuJGRpc2Nvbm5lY3QoKSAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseXsoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGF3YWl0IGRiLiRkaXNjb25uZWN0KCk7IC8vIENsb3NlIFByaXNtYSBjb25uZWN0aW9uIG9uIHN1Y2Nlc3NmdWwgZXhlY3V0aW9uXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHNlc3Npb25cbiAgICAgICAgfVxuICAgIH0sXG4gICAgcGFnZXM6IHtcbiAgICAgICAgc2lnbkluOiAnL3VzZXIvc2lnbmluJ1xuICAgICAgIFxuICB9XG4gIFxufSJdLCJuYW1lcyI6WyJkYiIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJiY3J5cHQiLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsIm5hbWUiLCJjcmVkZW50aWFscyIsImxhYmVsIiwidHlwZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJwaG9uZSIsIm1heGxlbmd0aCIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwiaGFzaGVkUGFzc3dvcmQiLCJoYXNoIiwiZXhpc3RpbmdVc2VyIiwidXNlciIsImZpbmRGaXJzdCIsIndoZXJlIiwibnVtYmVyIiwicGFzc3dvcmRWYWxpZGF0aW9uIiwiY29tcGFyZSIsImlkIiwidG9TdHJpbmciLCJlbWFpbCIsImNyZWF0ZSIsImRhdGEiLCJlIiwiJGRpc2Nvbm5lY3QiLCJjb25zb2xlIiwiZXJyb3IiLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwic2Vzc2lvbiIsInN1YiIsImp0aSIsImJhbGFuY2UiLCJ1cHNlcnQiLCJ1c2VySWQiLCJOdW1iZXIiLCJ1cGRhdGUiLCJhbW91bnQiLCJsb2NrZWQiLCJwYWdlcyIsInNpZ25JbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/lib/auth.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/jose","vendor-chunks/next-auth","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/oauth","vendor-chunks/@babel","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fabhishekyadav%2FDesktop%2Fcoinpay%2Fapps%2Fuser-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fabhishekyadav%2FDesktop%2Fcoinpay%2Fapps%2Fuser-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();