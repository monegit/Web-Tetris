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

/***/ "./Scripts/config.ts":
/*!***************************!*\
  !*** ./Scripts/config.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"boardSize\": () => (/* binding */ boardSize),\n/* harmony export */   \"tileSize\": () => (/* binding */ tileSize)\n/* harmony export */ });\nconst tileSize = 20;\nconst boardSize = {\n  width: 100,\n  height: 300\n};\n\n//# sourceURL=webpack://tetris/./Scripts/config.ts?");

/***/ }),

/***/ "./Scripts/main.ts":
/*!*************************!*\
  !*** ./Scripts/main.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./Scripts/config.ts\");\n/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tile */ \"./Scripts/tile.ts\");\n\n\nconst canvas = document.getElementById(\"game-tetris\");\nconst game = canvas.getContext(\"2d\");\ncanvas.width = _config__WEBPACK_IMPORTED_MODULE_0__.boardSize.width;\ncanvas.height = _config__WEBPACK_IMPORTED_MODULE_0__.boardSize.height;\ngame.fillStyle = \"red\";\ngame.fillRect(0, 0, canvas.width, canvas.height);\n(0,_tile__WEBPACK_IMPORTED_MODULE_1__.drawTile)(game, _tile__WEBPACK_IMPORTED_MODULE_1__.TileData.TILE_CLEVELAND_Z);\n\n// function drawGame() {}\n\n//# sourceURL=webpack://tetris/./Scripts/main.ts?");

/***/ }),

/***/ "./Scripts/tile.ts":
/*!*************************!*\
  !*** ./Scripts/tile.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TileData\": () => (/* binding */ TileData),\n/* harmony export */   \"drawTile\": () => (/* binding */ drawTile)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./Scripts/config.ts\");\n\n\n// source: https://www.joe.co.uk/gaming/tetris-block-names-221127\n\nconst TileData = {\n  TILE_ORANGE_RICKY: [] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0],\n  TILE_BLUE_RICKY: [] = [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0],\n  TILE_CLEVELAND_Z: [] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1],\n  TILE_RHODE_ISLAND_Z: [] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0],\n  TILE_HERO: [] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],\n  TILE_TEEWEE: [] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1],\n  TILE_SMASHBOY: [] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1]\n};\nfunction drawTile(game, tile) {\n  tile.forEach((element, i) => {\n    if (element == 1) drawBox(i % 4, Math.floor(i / 4), game);\n  });\n}\nfunction drawBox(x, y, game) {\n  game.fillStyle = \"blue\";\n  game.fillRect(x * _config__WEBPACK_IMPORTED_MODULE_0__.tileSize, y * _config__WEBPACK_IMPORTED_MODULE_0__.tileSize, _config__WEBPACK_IMPORTED_MODULE_0__.tileSize, _config__WEBPACK_IMPORTED_MODULE_0__.tileSize);\n}\n\n//# sourceURL=webpack://tetris/./Scripts/tile.ts?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./Scripts/main.ts");
/******/ 	
/******/ })()
;