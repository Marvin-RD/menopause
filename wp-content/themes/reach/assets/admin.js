/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./_src/admin.js":
/*!***********************!*\
  !*** ./_src/admin.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_admin_quicktags_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/admin/quicktags.js */ \"./_src/scripts/admin/quicktags.js\");\n\n\n/* eslint-disable-next-line import/no-unresolved */\n;\n\n//# sourceURL=webpack://reach/./_src/admin.js?");

/***/ }),

/***/ "./_src/scripts/admin/quicktags.js":
/*!*****************************************!*\
  !*** ./_src/scripts/admin/quicktags.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* global acf */\n\nif ('acf' in window && 'add_filter' in acf) {\n  acf.add_filter('wysiwyg_quicktags_settings', function addQuicktagsSettings(qtInit, id, field) {\n    if (field[0]) {\n      const editorWrap = field[0].querySelector('[data-toolbar]');\n      if (editorWrap.getAttribute('data-toolbar') === 'basic_formatting') {\n        qtInit.buttons = 'strong,em,link,close';\n      } else if (editorWrap.getAttribute('data-toolbar') === 'extended_formatting') {\n        qtInit.buttons = 'strong,em,link,ul,ol,li,close';\n      }\n    }\n    return qtInit;\n  });\n}\n\n//# sourceURL=webpack://reach/./_src/scripts/admin/quicktags.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./_src/admin.js");
/******/ 	
/******/ })()
;