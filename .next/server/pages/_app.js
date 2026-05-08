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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction App({ Component, pageProps }) {\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // Init Lenis smooth scroll\n        let lenis;\n        Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! lenis */ \"lenis\")).then(({ default: Lenis })=>{\n            lenis = new Lenis({\n                duration: 1.2,\n                easing: (t)=>Math.min(1, 1.001 - Math.pow(2, -10 * t)),\n                orientation: \"vertical\",\n                smoothWheel: true,\n                wheelMultiplier: 0.9,\n                touchMultiplier: 1.5\n            });\n            function raf(time) {\n                lenis.raf(time);\n                requestAnimationFrame(raf);\n            }\n            requestAnimationFrame(raf);\n        });\n        return ()=>{\n            if (lenis) lenis.destroy();\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"/Users/apple/Downloads/basamma-portfolio 2/pages/_app.js\",\n        lineNumber: 28,\n        columnNumber: 10\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQStCO0FBQ0c7QUFFbkIsU0FBU0MsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNsREgsZ0RBQVNBLENBQUM7UUFDUiwyQkFBMkI7UUFDM0IsSUFBSUk7UUFDSiwwR0FBTyxDQUFTQyxJQUFJLENBQUMsQ0FBQyxFQUFFQyxTQUFTQyxLQUFLLEVBQUU7WUFDdENILFFBQVEsSUFBSUcsTUFBTTtnQkFDaEJDLFVBQVU7Z0JBQ1ZDLFFBQVEsQ0FBQ0MsSUFBTUMsS0FBS0MsR0FBRyxDQUFDLEdBQUcsUUFBUUQsS0FBS0UsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLSDtnQkFDckRJLGFBQWE7Z0JBQ2JDLGFBQWE7Z0JBQ2JDLGlCQUFpQjtnQkFDakJDLGlCQUFpQjtZQUNuQjtZQUVBLFNBQVNDLElBQUlDLElBQUk7Z0JBQ2ZmLE1BQU1jLEdBQUcsQ0FBQ0M7Z0JBQ1ZDLHNCQUFzQkY7WUFDeEI7WUFDQUUsc0JBQXNCRjtRQUN4QjtRQUVBLE9BQU87WUFBUSxJQUFJZCxPQUFPQSxNQUFNaUIsT0FBTztRQUFJO0lBQzdDLEdBQUcsRUFBRTtJQUVMLHFCQUFPLDhEQUFDbkI7UUFBVyxHQUFHQyxTQUFTOzs7Ozs7QUFDakMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXNhbW1hLXBvcnRmb2xpby8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBJbml0IExlbmlzIHNtb290aCBzY3JvbGxcbiAgICBsZXQgbGVuaXM7XG4gICAgaW1wb3J0KCdsZW5pcycpLnRoZW4oKHsgZGVmYXVsdDogTGVuaXMgfSkgPT4ge1xuICAgICAgbGVuaXMgPSBuZXcgTGVuaXMoe1xuICAgICAgICBkdXJhdGlvbjogMS4yLFxuICAgICAgICBlYXNpbmc6ICh0KSA9PiBNYXRoLm1pbigxLCAxLjAwMSAtIE1hdGgucG93KDIsIC0xMCAqIHQpKSxcbiAgICAgICAgb3JpZW50YXRpb246ICd2ZXJ0aWNhbCcsXG4gICAgICAgIHNtb290aFdoZWVsOiB0cnVlLFxuICAgICAgICB3aGVlbE11bHRpcGxpZXI6IDAuOSxcbiAgICAgICAgdG91Y2hNdWx0aXBsaWVyOiAxLjUsXG4gICAgICB9KTtcblxuICAgICAgZnVuY3Rpb24gcmFmKHRpbWUpIHtcbiAgICAgICAgbGVuaXMucmFmKHRpbWUpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmFmKTtcbiAgICAgIH1cbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyYWYpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuICgpID0+IHsgaWYgKGxlbmlzKSBsZW5pcy5kZXN0cm95KCk7IH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPjtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJsZW5pcyIsInRoZW4iLCJkZWZhdWx0IiwiTGVuaXMiLCJkdXJhdGlvbiIsImVhc2luZyIsInQiLCJNYXRoIiwibWluIiwicG93Iiwib3JpZW50YXRpb24iLCJzbW9vdGhXaGVlbCIsIndoZWVsTXVsdGlwbGllciIsInRvdWNoTXVsdGlwbGllciIsInJhZiIsInRpbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJkZXN0cm95Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "lenis":
/*!************************!*\
  !*** external "lenis" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("lenis");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();