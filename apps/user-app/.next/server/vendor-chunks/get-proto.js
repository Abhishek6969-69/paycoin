"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/get-proto";
exports.ids = ["vendor-chunks/get-proto"];
exports.modules = {

/***/ "(ssr)/../../node_modules/get-proto/Object.getPrototypeOf.js":
/*!*************************************************************!*\
  !*** ../../node_modules/get-proto/Object.getPrototypeOf.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar $Object = __webpack_require__(/*! es-object-atoms */ \"(ssr)/../../node_modules/es-object-atoms/index.js\");\n\n/** @type {import('./Object.getPrototypeOf')} */\nmodule.exports = $Object.getPrototypeOf || null;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzL2dldC1wcm90by9PYmplY3QuZ2V0UHJvdG90eXBlT2YuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsY0FBYyxtQkFBTyxDQUFDLDBFQUFpQjs7QUFFdkMsV0FBVyxtQ0FBbUM7QUFDOUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb2NzLy4uLy4uL25vZGVfbW9kdWxlcy9nZXQtcHJvdG8vT2JqZWN0LmdldFByb3RvdHlwZU9mLmpzPzQ1MWMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJ2VzLW9iamVjdC1hdG9tcycpO1xuXG4vKiogQHR5cGUge2ltcG9ydCgnLi9PYmplY3QuZ2V0UHJvdG90eXBlT2YnKX0gKi9cbm1vZHVsZS5leHBvcnRzID0gJE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBudWxsO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/get-proto/Object.getPrototypeOf.js\n");

/***/ }),

/***/ "(ssr)/../../node_modules/get-proto/Reflect.getPrototypeOf.js":
/*!**************************************************************!*\
  !*** ../../node_modules/get-proto/Reflect.getPrototypeOf.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\n/** @type {import('./Reflect.getPrototypeOf')} */\nmodule.exports = (typeof Reflect !== 'undefined' && Reflect.getPrototypeOf) || null;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzL2dldC1wcm90by9SZWZsZWN0LmdldFByb3RvdHlwZU9mLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLFdBQVcsb0NBQW9DO0FBQy9DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG9jcy8uLi8uLi9ub2RlX21vZHVsZXMvZ2V0LXByb3RvL1JlZmxlY3QuZ2V0UHJvdG90eXBlT2YuanM/ZTUwZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbi8qKiBAdHlwZSB7aW1wb3J0KCcuL1JlZmxlY3QuZ2V0UHJvdG90eXBlT2YnKX0gKi9cbm1vZHVsZS5leHBvcnRzID0gKHR5cGVvZiBSZWZsZWN0ICE9PSAndW5kZWZpbmVkJyAmJiBSZWZsZWN0LmdldFByb3RvdHlwZU9mKSB8fCBudWxsO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/get-proto/Reflect.getPrototypeOf.js\n");

/***/ }),

/***/ "(ssr)/../../node_modules/get-proto/index.js":
/*!*********************************************!*\
  !*** ../../node_modules/get-proto/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar reflectGetProto = __webpack_require__(/*! ./Reflect.getPrototypeOf */ \"(ssr)/../../node_modules/get-proto/Reflect.getPrototypeOf.js\");\nvar originalGetProto = __webpack_require__(/*! ./Object.getPrototypeOf */ \"(ssr)/../../node_modules/get-proto/Object.getPrototypeOf.js\");\n\nvar getDunderProto = __webpack_require__(/*! dunder-proto/get */ \"(ssr)/../../node_modules/dunder-proto/get.js\");\n\n/** @type {import('.')} */\nmodule.exports = reflectGetProto\n\t? function getProto(O) {\n\t\t// @ts-expect-error TS can't narrow inside a closure, for some reason\n\t\treturn reflectGetProto(O);\n\t}\n\t: originalGetProto\n\t\t? function getProto(O) {\n\t\t\tif (!O || (typeof O !== 'object' && typeof O !== 'function')) {\n\t\t\t\tthrow new TypeError('getProto: not an object');\n\t\t\t}\n\t\t\t// @ts-expect-error TS can't narrow inside a closure, for some reason\n\t\t\treturn originalGetProto(O);\n\t\t}\n\t\t: getDunderProto\n\t\t\t? function getProto(O) {\n\t\t\t\t// @ts-expect-error TS can't narrow inside a closure, for some reason\n\t\t\t\treturn getDunderProto(O);\n\t\t\t}\n\t\t\t: null;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzL2dldC1wcm90by9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYixzQkFBc0IsbUJBQU8sQ0FBQyw4RkFBMEI7QUFDeEQsdUJBQXVCLG1CQUFPLENBQUMsNEZBQXlCOztBQUV4RCxxQkFBcUIsbUJBQU8sQ0FBQyxzRUFBa0I7O0FBRS9DLFdBQVcsYUFBYTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RvY3MvLi4vLi4vbm9kZV9tb2R1bGVzL2dldC1wcm90by9pbmRleC5qcz9kYzBmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIHJlZmxlY3RHZXRQcm90byA9IHJlcXVpcmUoJy4vUmVmbGVjdC5nZXRQcm90b3R5cGVPZicpO1xudmFyIG9yaWdpbmFsR2V0UHJvdG8gPSByZXF1aXJlKCcuL09iamVjdC5nZXRQcm90b3R5cGVPZicpO1xuXG52YXIgZ2V0RHVuZGVyUHJvdG8gPSByZXF1aXJlKCdkdW5kZXItcHJvdG8vZ2V0Jyk7XG5cbi8qKiBAdHlwZSB7aW1wb3J0KCcuJyl9ICovXG5tb2R1bGUuZXhwb3J0cyA9IHJlZmxlY3RHZXRQcm90b1xuXHQ/IGZ1bmN0aW9uIGdldFByb3RvKE8pIHtcblx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTIGNhbid0IG5hcnJvdyBpbnNpZGUgYSBjbG9zdXJlLCBmb3Igc29tZSByZWFzb25cblx0XHRyZXR1cm4gcmVmbGVjdEdldFByb3RvKE8pO1xuXHR9XG5cdDogb3JpZ2luYWxHZXRQcm90b1xuXHRcdD8gZnVuY3Rpb24gZ2V0UHJvdG8oTykge1xuXHRcdFx0aWYgKCFPIHx8ICh0eXBlb2YgTyAhPT0gJ29iamVjdCcgJiYgdHlwZW9mIE8gIT09ICdmdW5jdGlvbicpKSB7XG5cdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ2dldFByb3RvOiBub3QgYW4gb2JqZWN0Jyk7XG5cdFx0XHR9XG5cdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTIGNhbid0IG5hcnJvdyBpbnNpZGUgYSBjbG9zdXJlLCBmb3Igc29tZSByZWFzb25cblx0XHRcdHJldHVybiBvcmlnaW5hbEdldFByb3RvKE8pO1xuXHRcdH1cblx0XHQ6IGdldER1bmRlclByb3RvXG5cdFx0XHQ/IGZ1bmN0aW9uIGdldFByb3RvKE8pIHtcblx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUyBjYW4ndCBuYXJyb3cgaW5zaWRlIGEgY2xvc3VyZSwgZm9yIHNvbWUgcmVhc29uXG5cdFx0XHRcdHJldHVybiBnZXREdW5kZXJQcm90byhPKTtcblx0XHRcdH1cblx0XHRcdDogbnVsbDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/get-proto/index.js\n");

/***/ }),

/***/ "(action-browser)/../../node_modules/get-proto/Object.getPrototypeOf.js":
/*!*************************************************************!*\
  !*** ../../node_modules/get-proto/Object.getPrototypeOf.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar $Object = __webpack_require__(/*! es-object-atoms */ \"(action-browser)/../../node_modules/es-object-atoms/index.js\");\n\n/** @type {import('./Object.getPrototypeOf')} */\nmodule.exports = $Object.getPrototypeOf || null;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uLi8uLi9ub2RlX21vZHVsZXMvZ2V0LXByb3RvL09iamVjdC5nZXRQcm90b3R5cGVPZi5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYixjQUFjLG1CQUFPLENBQUMscUZBQWlCOztBQUV2QyxXQUFXLG1DQUFtQztBQUM5QyIsInNvdXJjZXMiOlsid2VicGFjazovL2RvY3MvLi4vLi4vbm9kZV9tb2R1bGVzL2dldC1wcm90by9PYmplY3QuZ2V0UHJvdG90eXBlT2YuanM/ZGJhMSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnZXMtb2JqZWN0LWF0b21zJyk7XG5cbi8qKiBAdHlwZSB7aW1wb3J0KCcuL09iamVjdC5nZXRQcm90b3R5cGVPZicpfSAqL1xubW9kdWxlLmV4cG9ydHMgPSAkT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IG51bGw7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(action-browser)/../../node_modules/get-proto/Object.getPrototypeOf.js\n");

/***/ }),

/***/ "(action-browser)/../../node_modules/get-proto/Reflect.getPrototypeOf.js":
/*!**************************************************************!*\
  !*** ../../node_modules/get-proto/Reflect.getPrototypeOf.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\n/** @type {import('./Reflect.getPrototypeOf')} */\nmodule.exports = (typeof Reflect !== 'undefined' && Reflect.getPrototypeOf) || null;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uLi8uLi9ub2RlX21vZHVsZXMvZ2V0LXByb3RvL1JlZmxlY3QuZ2V0UHJvdG90eXBlT2YuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsV0FBVyxvQ0FBb0M7QUFDL0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb2NzLy4uLy4uL25vZGVfbW9kdWxlcy9nZXQtcHJvdG8vUmVmbGVjdC5nZXRQcm90b3R5cGVPZi5qcz8zZTUyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuLyoqIEB0eXBlIHtpbXBvcnQoJy4vUmVmbGVjdC5nZXRQcm90b3R5cGVPZicpfSAqL1xubW9kdWxlLmV4cG9ydHMgPSAodHlwZW9mIFJlZmxlY3QgIT09ICd1bmRlZmluZWQnICYmIFJlZmxlY3QuZ2V0UHJvdG90eXBlT2YpIHx8IG51bGw7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(action-browser)/../../node_modules/get-proto/Reflect.getPrototypeOf.js\n");

/***/ }),

/***/ "(action-browser)/../../node_modules/get-proto/index.js":
/*!*********************************************!*\
  !*** ../../node_modules/get-proto/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar reflectGetProto = __webpack_require__(/*! ./Reflect.getPrototypeOf */ \"(action-browser)/../../node_modules/get-proto/Reflect.getPrototypeOf.js\");\nvar originalGetProto = __webpack_require__(/*! ./Object.getPrototypeOf */ \"(action-browser)/../../node_modules/get-proto/Object.getPrototypeOf.js\");\n\nvar getDunderProto = __webpack_require__(/*! dunder-proto/get */ \"(action-browser)/../../node_modules/dunder-proto/get.js\");\n\n/** @type {import('.')} */\nmodule.exports = reflectGetProto\n\t? function getProto(O) {\n\t\t// @ts-expect-error TS can't narrow inside a closure, for some reason\n\t\treturn reflectGetProto(O);\n\t}\n\t: originalGetProto\n\t\t? function getProto(O) {\n\t\t\tif (!O || (typeof O !== 'object' && typeof O !== 'function')) {\n\t\t\t\tthrow new TypeError('getProto: not an object');\n\t\t\t}\n\t\t\t// @ts-expect-error TS can't narrow inside a closure, for some reason\n\t\t\treturn originalGetProto(O);\n\t\t}\n\t\t: getDunderProto\n\t\t\t? function getProto(O) {\n\t\t\t\t// @ts-expect-error TS can't narrow inside a closure, for some reason\n\t\t\t\treturn getDunderProto(O);\n\t\t\t}\n\t\t\t: null;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uLi8uLi9ub2RlX21vZHVsZXMvZ2V0LXByb3RvL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLHNCQUFzQixtQkFBTyxDQUFDLHlHQUEwQjtBQUN4RCx1QkFBdUIsbUJBQU8sQ0FBQyx1R0FBeUI7O0FBRXhELHFCQUFxQixtQkFBTyxDQUFDLGlGQUFrQjs7QUFFL0MsV0FBVyxhQUFhO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG9jcy8uLi8uLi9ub2RlX21vZHVsZXMvZ2V0LXByb3RvL2luZGV4LmpzPzZhZGQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmVmbGVjdEdldFByb3RvID0gcmVxdWlyZSgnLi9SZWZsZWN0LmdldFByb3RvdHlwZU9mJyk7XG52YXIgb3JpZ2luYWxHZXRQcm90byA9IHJlcXVpcmUoJy4vT2JqZWN0LmdldFByb3RvdHlwZU9mJyk7XG5cbnZhciBnZXREdW5kZXJQcm90byA9IHJlcXVpcmUoJ2R1bmRlci1wcm90by9nZXQnKTtcblxuLyoqIEB0eXBlIHtpbXBvcnQoJy4nKX0gKi9cbm1vZHVsZS5leHBvcnRzID0gcmVmbGVjdEdldFByb3RvXG5cdD8gZnVuY3Rpb24gZ2V0UHJvdG8oTykge1xuXHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMgY2FuJ3QgbmFycm93IGluc2lkZSBhIGNsb3N1cmUsIGZvciBzb21lIHJlYXNvblxuXHRcdHJldHVybiByZWZsZWN0R2V0UHJvdG8oTyk7XG5cdH1cblx0OiBvcmlnaW5hbEdldFByb3RvXG5cdFx0PyBmdW5jdGlvbiBnZXRQcm90byhPKSB7XG5cdFx0XHRpZiAoIU8gfHwgKHR5cGVvZiBPICE9PSAnb2JqZWN0JyAmJiB0eXBlb2YgTyAhPT0gJ2Z1bmN0aW9uJykpIHtcblx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignZ2V0UHJvdG86IG5vdCBhbiBvYmplY3QnKTtcblx0XHRcdH1cblx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMgY2FuJ3QgbmFycm93IGluc2lkZSBhIGNsb3N1cmUsIGZvciBzb21lIHJlYXNvblxuXHRcdFx0cmV0dXJuIG9yaWdpbmFsR2V0UHJvdG8oTyk7XG5cdFx0fVxuXHRcdDogZ2V0RHVuZGVyUHJvdG9cblx0XHRcdD8gZnVuY3Rpb24gZ2V0UHJvdG8oTykge1xuXHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTIGNhbid0IG5hcnJvdyBpbnNpZGUgYSBjbG9zdXJlLCBmb3Igc29tZSByZWFzb25cblx0XHRcdFx0cmV0dXJuIGdldER1bmRlclByb3RvKE8pO1xuXHRcdFx0fVxuXHRcdFx0OiBudWxsO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(action-browser)/../../node_modules/get-proto/index.js\n");

/***/ })

};
;