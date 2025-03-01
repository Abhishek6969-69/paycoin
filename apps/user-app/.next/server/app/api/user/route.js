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
exports.id = "app/api/user/route";
exports.ids = ["app/api/user/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "./action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "./request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "./static-generation-async-storage.external":
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fuser%2Froute&page=%2Fapi%2Fuser%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Froute.ts&appDir=%2FUsers%2Fabhishekyadav%2FDesktop%2Fcoinpay%2Fapps%2Fuser-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fabhishekyadav%2FDesktop%2Fcoinpay%2Fapps%2Fuser-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fuser%2Froute&page=%2Fapi%2Fuser%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Froute.ts&appDir=%2FUsers%2Fabhishekyadav%2FDesktop%2Fcoinpay%2Fapps%2Fuser-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fabhishekyadav%2FDesktop%2Fcoinpay%2Fapps%2Fuser-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_abhishekyadav_Desktop_coinpay_apps_user_app_app_api_user_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/user/route.ts */ \"(rsc)/./app/api/user/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/user/route\",\n        pathname: \"/api/user\",\n        filename: \"route\",\n        bundlePath: \"app/api/user/route\"\n    },\n    resolvedPagePath: \"/Users/abhishekyadav/Desktop/coinpay/apps/user-app/app/api/user/route.ts\",\n    nextConfigOutput,\n    userland: _Users_abhishekyadav_Desktop_coinpay_apps_user_app_app_api_user_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/user/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ1c2VyJTJGcm91dGUmcGFnZT0lMkZhcGklMkZ1c2VyJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGdXNlciUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmFiaGlzaGVreWFkYXYlMkZEZXNrdG9wJTJGY29pbnBheSUyRmFwcHMlMkZ1c2VyLWFwcCUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZhYmhpc2hla3lhZGF2JTJGRGVza3RvcCUyRmNvaW5wYXklMkZhcHBzJTJGdXNlci1hcHAmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ3dCO0FBQ3JHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG9jcy8/ZTlkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvYWJoaXNoZWt5YWRhdi9EZXNrdG9wL2NvaW5wYXkvYXBwcy91c2VyLWFwcC9hcHAvYXBpL3VzZXIvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3VzZXIvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS91c2VyXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS91c2VyL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL2FiaGlzaGVreWFkYXYvRGVza3RvcC9jb2lucGF5L2FwcHMvdXNlci1hcHAvYXBwL2FwaS91c2VyL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS91c2VyL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fuser%2Froute&page=%2Fapi%2Fuser%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Froute.ts&appDir=%2FUsers%2Fabhishekyadav%2FDesktop%2Fcoinpay%2Fapps%2Fuser-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fabhishekyadav%2FDesktop%2Fcoinpay%2Fapps%2Fuser-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/user/route.ts":
/*!*******************************!*\
  !*** ./app/api/user/route.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/../../node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var app_lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/lib/auth */ \"(rsc)/./app/lib/auth.ts\");\n/* harmony import */ var _repo_db_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @repo/db/client */ \"(rsc)/../../packages/db/index.ts\");\n\n\n // Adjust the import path based on your setup\n // Adjust this path to your Prisma client instance\nasync function GET() {\n    try {\n        // Get session\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(app_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n        console.log(session, \"hiii\");\n        if (!session || !session.user || !session.user.id) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        // Fetch user from the database\n        const user = await _repo_db_client__WEBPACK_IMPORTED_MODULE_3__[\"default\"].user.findUnique({\n            where: {\n                id: session.user.id\n            },\n            select: {\n                id: true,\n                name: true,\n                email: true,\n                profileImage: true\n            }\n        });\n        if (!user) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"User not found\"\n            }, {\n                status: 404\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(user);\n    } catch (error) {\n        console.error(\"Error fetching user data:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to fetch user data\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3VzZXIvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTJDO0FBQ0U7QUFDRixDQUFDLDZDQUE2QztBQUNwRCxDQUFDLGtEQUFrRDtBQUVqRixlQUFlSTtJQUNwQixJQUFJO1FBQ0YsY0FBYztRQUNkLE1BQU1DLFVBQVUsTUFBTUosMkRBQWdCQSxDQUFDQyxxREFBV0E7UUFDbERJLFFBQVFDLEdBQUcsQ0FBQ0YsU0FBUTtRQUNwQixJQUFJLENBQUNBLFdBQVcsQ0FBQ0EsUUFBUUcsSUFBSSxJQUFJLENBQUNILFFBQVFHLElBQUksQ0FBQ0MsRUFBRSxFQUFFO1lBQ2pELE9BQU9ULHFEQUFZQSxDQUFDVSxJQUFJLENBQ3RCO2dCQUFFQyxPQUFPO1lBQWUsR0FDeEI7Z0JBQUVDLFFBQVE7WUFBSTtRQUVsQjtRQUVBLCtCQUErQjtRQUMvQixNQUFNSixPQUFPLE1BQU1MLHVEQUFNQSxDQUFDSyxJQUFJLENBQUNLLFVBQVUsQ0FBQztZQUN4Q0MsT0FBTztnQkFBRUwsSUFBSUosUUFBUUcsSUFBSSxDQUFDQyxFQUFFO1lBQUM7WUFDN0JNLFFBQVE7Z0JBQ05OLElBQUk7Z0JBQ0pPLE1BQU07Z0JBQ05DLE9BQU87Z0JBQ1BDLGNBQWM7WUFDaEI7UUFDRjtRQUVBLElBQUksQ0FBQ1YsTUFBTTtZQUNULE9BQU9SLHFEQUFZQSxDQUFDVSxJQUFJLENBQ3RCO2dCQUFFQyxPQUFPO1lBQWlCLEdBQzFCO2dCQUFFQyxRQUFRO1lBQUk7UUFFbEI7UUFFQSxPQUFPWixxREFBWUEsQ0FBQ1UsSUFBSSxDQUFDRjtJQUMzQixFQUFFLE9BQU9HLE9BQU87UUFDZEwsUUFBUUssS0FBSyxDQUFDLDZCQUE2QkE7UUFDM0MsT0FBT1gscURBQVlBLENBQUNVLElBQUksQ0FDdEI7WUFBRUMsT0FBTztRQUE0QixHQUNyQztZQUFFQyxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2RvY3MvLi9hcHAvYXBpL3VzZXIvcm91dGUudHM/YTljOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gXCJhcHAvbGliL2F1dGhcIjsgLy8gQWRqdXN0IHRoZSBpbXBvcnQgcGF0aCBiYXNlZCBvbiB5b3VyIHNldHVwXG5pbXBvcnQgcHJpc21hIGZyb20gXCJAcmVwby9kYi9jbGllbnRcIjsgLy8gQWRqdXN0IHRoaXMgcGF0aCB0byB5b3VyIFByaXNtYSBjbGllbnQgaW5zdGFuY2VcbmltcG9ydCBkYiBmcm9tIFwiQHJlcG8vZGIvY2xpZW50XCJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XG4gIHRyeSB7XG4gICAgLy8gR2V0IHNlc3Npb25cbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XG4gICAgY29uc29sZS5sb2coc2Vzc2lvbixcImhpaWlcIilcbiAgICBpZiAoIXNlc3Npb24gfHwgIXNlc3Npb24udXNlciB8fCAhc2Vzc2lvbi51c2VyLmlkKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgIHsgZXJyb3I6IFwiVW5hdXRob3JpemVkXCIgfSxcbiAgICAgICAgeyBzdGF0dXM6IDQwMSB9XG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIEZldGNoIHVzZXIgZnJvbSB0aGUgZGF0YWJhc2VcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZTogeyBpZDogc2Vzc2lvbi51c2VyLmlkIH0sXG4gICAgICBzZWxlY3Q6IHtcbiAgICAgICAgaWQ6IHRydWUsXG4gICAgICAgIG5hbWU6IHRydWUsXG4gICAgICAgIGVtYWlsOiB0cnVlLFxuICAgICAgICBwcm9maWxlSW1hZ2U6IHRydWUsIC8vIEVuc3VyZSB5b3VyIERCIGhhcyB0aGlzIGZpZWxkXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgIHsgZXJyb3I6IFwiVXNlciBub3QgZm91bmRcIiB9LFxuICAgICAgICB7IHN0YXR1czogNDA0IH1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHVzZXIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB1c2VyIGRhdGE6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7IGVycm9yOiBcIkZhaWxlZCB0byBmZXRjaCB1c2VyIGRhdGFcIiB9LFxuICAgICAgeyBzdGF0dXM6IDUwMCB9XG4gICAgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImdldFNlcnZlclNlc3Npb24iLCJhdXRoT3B0aW9ucyIsInByaXNtYSIsIkdFVCIsInNlc3Npb24iLCJjb25zb2xlIiwibG9nIiwidXNlciIsImlkIiwianNvbiIsImVycm9yIiwic3RhdHVzIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwic2VsZWN0IiwibmFtZSIsImVtYWlsIiwicHJvZmlsZUltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/user/route.ts\n");

/***/ }),

/***/ "(rsc)/./app/lib/auth.ts":
/*!*************************!*\
  !*** ./app/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var _repo_db_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @repo/db/client */ \"(rsc)/../../packages/db/index.ts\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/../../node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/../../node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: \"Credentials\",\n            credentials: {\n                name: {\n                    label: \"Name\",\n                    type: \"text\",\n                    placeholder: \"your name\",\n                    required: true\n                },\n                phone: {\n                    label: \"Phone number\",\n                    type: \"text\",\n                    placeholder: \"1231231231\",\n                    required: true\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\",\n                    required: true\n                }\n            },\n            // TODO: User credentials type from next-aut\n            async authorize (credentials) {\n                // Do zod validation, OTP validation here\n                const hashedPassword = await bcryptjs__WEBPACK_IMPORTED_MODULE_2___default().hash(credentials.password, 10);\n                const existingUser = await _repo_db_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findFirst({\n                    where: {\n                        number: credentials.phone\n                    }\n                });\n                if (existingUser) {\n                    const passwordValidation = await bcryptjs__WEBPACK_IMPORTED_MODULE_2___default().compare(credentials.password, existingUser.password);\n                    if (passwordValidation) {\n                        console.log(existingUser.name);\n                        return {\n                            id: existingUser.id.toString(),\n                            name: existingUser.name,\n                            email: existingUser.number\n                        };\n                    }\n                    return null;\n                }\n                try {\n                    const user = await _repo_db_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.create({\n                        data: {\n                            name: credentials.name,\n                            number: credentials.phone,\n                            password: hashedPassword\n                        }\n                    });\n                    return {\n                        id: user.id.toString(),\n                        name: user.name,\n                        email: user.number\n                    };\n                } catch (e) {\n                    await _repo_db_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].$disconnect();\n                    console.error(e);\n                }\n                return null;\n            }\n        })\n    ],\n    secret: process.env.JWT_SECRET || \"secret\",\n    callbacks: {\n        async jwt ({ token, user }) {\n            console.log(\"JWT user data:\", user); // Debugging\n            // When the user is returned from authorize, attach the name to the token\n            if (user) {\n                token.name = user.name || token.name;\n                token.email = user.email || token.email;\n            }\n            return token;\n        },\n        // TODO: can u fix the type here? Using any is bad\n        async session ({ token, session }) {\n            console.log(session, \"sss\");\n            session.user.id = token.sub;\n            session.user.token = token.jti;\n            session.user.name = token.name || session.user.name;\n            session.user.email = token.email || session.user.email;\n            try {\n                await _repo_db_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].balance.upsert({\n                    where: {\n                        userId: Number(session.user.id)\n                    },\n                    update: {},\n                    create: {\n                        userId: Number(session.user.id),\n                        amount: Number(Math.random() * 1000000),\n                        locked: 0\n                    }\n                });\n            } catch (e) {\n                await _repo_db_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].$disconnect();\n            } finally{\n                async ()=>{\n                    await _repo_db_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].$disconnect(); // Close Prisma connection on successful execution\n                };\n            }\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/user/signin\"\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDWSxNQUFNWixLQUFLLElBQUlhLFFBQVF2QixJQUFJLENBQUNVLEtBQUs7WUFDcEQsSUFBRztnQkFDQyxNQUFNM0IsdURBQUVBLENBQUMyQyxPQUFPLENBQUNDLE1BQU0sQ0FBQztvQkFDcEJ6QixPQUFPO3dCQUFFMEIsUUFBUUMsT0FBT04sUUFBUXZCLElBQUksQ0FBQ1EsRUFBRTtvQkFBRTtvQkFDekNzQixRQUFRLENBQUM7b0JBQ1RuQixRQUFRO3dCQUNKaUIsUUFBUUMsT0FBT04sUUFBUXZCLElBQUksQ0FBQ1EsRUFBRTt3QkFDOUJ1QixRQUFPRixPQUFRRyxLQUFLQyxNQUFNLEtBQUs7d0JBQy9CQyxRQUFRO29CQUNaO2dCQUNKO1lBQ0osRUFDQSxPQUFNckIsR0FBRTtnQkFDUCxNQUFNOUIsdURBQUVBLENBQUMrQixXQUFXO1lBQ3JCLFNBQ087Z0JBQUU7b0JBQ0wsTUFBTS9CLHVEQUFFQSxDQUFDK0IsV0FBVyxJQUFJLGtEQUFrRDtnQkFDNUU7WUFDRjtZQUtBLE9BQU9TO1FBQ1g7SUFDSjtJQUNBWSxPQUFPO1FBQ0hDLFFBQVE7SUFFZDtBQUVGLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb2NzLy4vYXBwL2xpYi9hdXRoLnRzPzZiZmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRiIGZyb20gXCJAcmVwby9kYi9jbGllbnRcIjtcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCJcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdGpzXCI7XG5cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9ucyA9IHtcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgICAgIG5hbWU6ICdDcmVkZW50aWFscycsXG4gICAgICAgICAgY3JlZGVudGlhbHM6IHtcbiAgICAgICAgICAgIG5hbWU6e2xhYmVsOlwiTmFtZVwiLCB0eXBlOlwidGV4dFwiLHBsYWNlaG9sZGVyOlwieW91ciBuYW1lXCIsIHJlcXVpcmVkOnRydWV9LFxuICAgICAgICAgICAgcGhvbmU6IHsgbGFiZWw6IFwiUGhvbmUgbnVtYmVyXCIsIHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCIxMjMxMjMxMjMxXCIsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogXCJQYXNzd29yZFwiLCB0eXBlOiBcInBhc3N3b3JkXCIsIHJlcXVpcmVkOiB0cnVlIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIC8vIFRPRE86IFVzZXIgY3JlZGVudGlhbHMgdHlwZSBmcm9tIG5leHQtYXV0XG4gICAgICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzOiBhbnkpIHtcbiAgICAgICAgICAgIC8vIERvIHpvZCB2YWxpZGF0aW9uLCBPVFAgdmFsaWRhdGlvbiBoZXJlXG4gICAgICAgICAgICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKGNyZWRlbnRpYWxzLnBhc3N3b3JkLCAxMCk7XG4gICAgICAgICAgICBjb25zdCBleGlzdGluZ1VzZXIgPSBhd2FpdCBkYi51c2VyLmZpbmRGaXJzdCh7XG4gICAgICAgICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyOiBjcmVkZW50aWFscy5waG9uZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoZXhpc3RpbmdVc2VyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFzc3dvcmRWYWxpZGF0aW9uID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUoY3JlZGVudGlhbHMucGFzc3dvcmQsIGV4aXN0aW5nVXNlci5wYXNzd29yZCk7XG4gICAgICAgICAgICAgICAgaWYgKHBhc3N3b3JkVmFsaWRhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhleGlzdGluZ1VzZXIubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGV4aXN0aW5nVXNlci5pZC50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogZXhpc3RpbmdVc2VyLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogZXhpc3RpbmdVc2VyLm51bWJlclxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBkYi51c2VyLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6Y3JlZGVudGlhbHMubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlcjogY3JlZGVudGlhbHMucGhvbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogaGFzaGVkUGFzc3dvcmQsXG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHVzZXIuaWQudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHVzZXIubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IHVzZXIubnVtYmVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICAgICBhd2FpdCAgZGIuJGRpc2Nvbm5lY3QoKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICBdLFxuICAgIHNlY3JldDogcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCB8fCBcInNlY3JldFwiLFxuICAgIGNhbGxiYWNrczoge1xuICAgICAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciB9Ont0b2tlbjphbnksdXNlcjphbnl9KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkpXVCB1c2VyIGRhdGE6XCIsIHVzZXIpOyAvLyBEZWJ1Z2dpbmdcbiAgICAgICAgICAgIC8vIFdoZW4gdGhlIHVzZXIgaXMgcmV0dXJuZWQgZnJvbSBhdXRob3JpemUsIGF0dGFjaCB0aGUgbmFtZSB0byB0aGUgdG9rZW5cbiAgICAgICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICAgIHRva2VuLm5hbWUgPSB1c2VyLm5hbWUgfHwgdG9rZW4ubmFtZTtcbiAgICAgICAgICAgICAgdG9rZW4uZW1haWw9dXNlci5lbWFpbCB8fCB0b2tlbi5lbWFpbFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICAgIH0sXG4gICAgICAgIC8vIFRPRE86IGNhbiB1IGZpeCB0aGUgdHlwZSBoZXJlPyBVc2luZyBhbnkgaXMgYmFkXG4gICAgICAgIGFzeW5jIHNlc3Npb24oeyB0b2tlbiwgc2Vzc2lvbiB9OiBhbnkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlc3Npb24sXCJzc3NcIilcbiAgICAgICAgICAgIHNlc3Npb24udXNlci5pZCA9IHRva2VuLnN1YlxuICAgICAgICAgICAgc2Vzc2lvbi51c2VyLnRva2VuPXRva2VuLmp0aVxuICAgICAgICAgICAgc2Vzc2lvbi51c2VyLm5hbWU9dG9rZW4ubmFtZSB8fCBzZXNzaW9uLnVzZXIubmFtZTsgIFxuICAgICAgICAgICAgc2Vzc2lvbi51c2VyLmVtYWlsPXRva2VuLmVtYWlsIHx8IHNlc3Npb24udXNlci5lbWFpbDtcbiAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICBhd2FpdCBkYi5iYWxhbmNlLnVwc2VydCh7XG4gICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IHVzZXJJZDogTnVtYmVyKHNlc3Npb24udXNlci5pZCkgfSxcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlOiB7fSwgIC8vIERvIG5vdGhpbmcgaWYgYmFsYW5jZSBleGlzdHNcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlOiB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBOdW1iZXIoc2Vzc2lvbi51c2VyLmlkKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6TnVtYmVyKChNYXRoLnJhbmRvbSgpICogMTAwMDAwMCkpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2tlZDogMCxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2goZSl7XG4gICAgICAgICAgICAgYXdhaXQgZGIuJGRpc2Nvbm5lY3QoKSAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseXsoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGF3YWl0IGRiLiRkaXNjb25uZWN0KCk7IC8vIENsb3NlIFByaXNtYSBjb25uZWN0aW9uIG9uIHN1Y2Nlc3NmdWwgZXhlY3V0aW9uXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHNlc3Npb25cbiAgICAgICAgfVxuICAgIH0sXG4gICAgcGFnZXM6IHtcbiAgICAgICAgc2lnbkluOiAnL3VzZXIvc2lnbmluJ1xuICAgICAgIFxuICB9XG4gIFxufSJdLCJuYW1lcyI6WyJkYiIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJiY3J5cHQiLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsIm5hbWUiLCJjcmVkZW50aWFscyIsImxhYmVsIiwidHlwZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJwaG9uZSIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwiaGFzaGVkUGFzc3dvcmQiLCJoYXNoIiwiZXhpc3RpbmdVc2VyIiwidXNlciIsImZpbmRGaXJzdCIsIndoZXJlIiwibnVtYmVyIiwicGFzc3dvcmRWYWxpZGF0aW9uIiwiY29tcGFyZSIsImNvbnNvbGUiLCJsb2ciLCJpZCIsInRvU3RyaW5nIiwiZW1haWwiLCJjcmVhdGUiLCJkYXRhIiwiZSIsIiRkaXNjb25uZWN0IiwiZXJyb3IiLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwic2Vzc2lvbiIsInN1YiIsImp0aSIsImJhbGFuY2UiLCJ1cHNlcnQiLCJ1c2VySWQiLCJOdW1iZXIiLCJ1cGRhdGUiLCJhbW91bnQiLCJNYXRoIiwicmFuZG9tIiwibG9ja2VkIiwicGFnZXMiLCJzaWduSW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/lib/auth.ts\n");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fuser%2Froute&page=%2Fapi%2Fuser%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Froute.ts&appDir=%2FUsers%2Fabhishekyadav%2FDesktop%2Fcoinpay%2Fapps%2Fuser-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fabhishekyadav%2FDesktop%2Fcoinpay%2Fapps%2Fuser-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();