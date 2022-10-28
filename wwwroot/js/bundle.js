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

/***/ "./Scripts/Board.js":
/*!**************************!*\
  !*** ./Scripts/Board.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Tile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tile.js */ \"./Scripts/Tile.js\");\n\n\n/** @type {HTMLCanvasElement} */\nconst canvas = document.getElementById(\"game-tetris\");\nconst game = canvas.getContext(\"2d\");\ngame.fillStyle = \"red\";\ngame.fillRect(0, 0, canvas.width, canvas.height);\n(0,_Tile_js__WEBPACK_IMPORTED_MODULE_0__.drawBox)(game);\n\n// function drawGame() {}\n\n//# sourceURL=webpack://tetris/./Scripts/Board.js?");

/***/ }),

/***/ "./Scripts/Tile.js":
/*!*************************!*\
  !*** ./Scripts/Tile.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drawBox\": () => (/* binding */ drawBox)\n/* harmony export */ });\n// source: https://www.joe.co.uk/gaming/tetris-block-names-221127\n\n// prettier-ignore\nconst TILE_ORANGE_RICKY = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0];\n// prettier-ignore\nconst TILE_BLUE_RICKY = [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0];\n// prettier-ignore\nconst TILE_CLEVELAND_Z = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1];\n// prettier-ignore\nconst TILE_RHODE_ISLAND_Z = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0];\n// prettier-ignore\nconst TILE_HERO = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1];\n// prettier-ignore\nconst TILE_TEEWEE = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1];\n// prettier-ignore\nconst TILE_SMASHBOY = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1];\n\n/**\n * 타일의 모양을 데이터화 한 enum 형식의 변수\n * @readonly\n * @enum {number}\n */\nconst TileData = {\n  TILE_BLUE_RICKY,\n  TILE_CLEVELAND_Z,\n  TILE_HERO,\n  TILE_ORANGE_RICKY,\n  TILE_RHODE_ISLAND_Z,\n  TILE_SMASHBOY,\n  TILE_TEEWEE\n};\n\n/**\n * @param {TileData[]} tile 타일 모양\n * @param {CanvasRenderingContext2D} game 게임 캔버스\n * use: /Tile/Tile.TILE_BLUE_RICKY\n */\nfunction drawTile(game, tile) {\n  drawBox(game);\n}\n\n/**\n * @param {CanvasRenderingContext2D} game 상자를 그릴 캔버스\n */\nfunction drawBox(game) {\n  game.fillStyle = \"blue\";\n  game.fillRect(0, 0, 10, 10);\n}\n\n//# sourceURL=webpack://tetris/./Scripts/Tile.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./Scripts/Board.js");
/******/ 	
/******/ })()
;