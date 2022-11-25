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

/***/ "./Scripts/board.ts":
/*!**************************!*\
  !*** ./Scripts/board.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Board\": () => (/* binding */ Board)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./Scripts/constants.ts\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./Scripts/game.ts\");\n/* harmony import */ var _piece__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./piece */ \"./Scripts/piece.ts\");\n\n\n\nclass Board {\n  constructor(ctx, ctxNext) {\n    this.ctx = ctx;\n    this.ctxNext = ctxNext;\n  }\n\n  // 새 게임이 시작되면 보드를 초기화한다.\n  reset() {\n    this.grid = this.getEmptyBoard();\n    this.piece = new _piece__WEBPACK_IMPORTED_MODULE_2__.Piece(this.ctx);\n    this.piece.setStartingPosition();\n    this.getNewPiece();\n  }\n  draw() {\n    this.piece.draw();\n    this.drawBoard();\n  }\n  drop() {\n    let p = {\n      ...this.piece,\n      y: this.piece.y + 1\n    };\n    if (this.valid(p)) {\n      this.piece.move(p);\n    } else {\n      this.freeze();\n      // this.clearLines();\n      if (this.piece.y === 0) {\n        // Game over\n        return false;\n      }\n      this.piece = this.next;\n      this.piece.ctx = this.ctx;\n      this.piece.setStartingPosition();\n      this.getNewPiece();\n    }\n    return true;\n  }\n  drawBoard() {\n    this.grid.forEach((row, y) => {\n      row.forEach((value, x) => {\n        if (value > 0) {\n          this.ctx.fillStyle = _constants__WEBPACK_IMPORTED_MODULE_0__.COLORS[value - 1];\n          this.ctx.fillRect(x, y, 1, 1);\n        }\n      });\n    });\n  }\n  getNewPiece() {\n    const {\n      width,\n      height\n    } = this.ctxNext.canvas;\n    this.next = new _piece__WEBPACK_IMPORTED_MODULE_2__.Piece(this.ctxNext);\n    this.ctxNext.clearRect(0, 0, width, height);\n    this.next.draw();\n  }\n\n  // 0으로 채워진 행렬을 얻는다.\n  getEmptyBoard() {\n    return Array.from({\n      length: _constants__WEBPACK_IMPORTED_MODULE_0__.ROWS\n    }, () => Array(_constants__WEBPACK_IMPORTED_MODULE_0__.COLS).fill(0));\n  }\n  valid(p) {\n    // this.freeze();\n    return p.shape.every((row, dy) => {\n      return row.every((value, dx) => {\n        let x = p.x + dx;\n        let y = p.y + dy;\n        return value === 0 || this.isInsideWalls(x, y) && this.notOccupied(x, y);\n      });\n    });\n  }\n  rotate(p) {\n    // 알고리즘 처리\n    for (let y = 0; y < p.shape.length; ++y) {\n      for (let x = 0; x < y; ++x) {\n        [p.shape[x][y], p.shape[y][x]] = [p.shape[y][x], p.shape[x][y]];\n      }\n    }\n\n    // 열 순서대로 뒤집는다.\n    p.shape.forEach(row => row.reverse());\n    return p;\n  }\n  isInsideWalls(x, y) {\n    return x >= 0 && x < _constants__WEBPACK_IMPORTED_MODULE_0__.COLS && y <= _constants__WEBPACK_IMPORTED_MODULE_0__.ROWS;\n  }\n  notOccupied(x, y) {\n    return this.grid[y] && this.grid[y][x] === 0;\n  }\n  getLineClearPoints(lines) {\n    return lines === 1 ? _constants__WEBPACK_IMPORTED_MODULE_0__.POINTS.SINGLE : lines === 2 ? _constants__WEBPACK_IMPORTED_MODULE_0__.POINTS.DOUBLE : lines === 3 ? _constants__WEBPACK_IMPORTED_MODULE_0__.POINTS.TRIPLE : lines === 4 ? _constants__WEBPACK_IMPORTED_MODULE_0__.POINTS.TETRIS : 0;\n  }\n  clearLines() {\n    let lines = 0;\n    this.grid.forEach((row, y) => {\n      // 모든 값이 0보다 큰지 비교한다.\n      if (row.every(value => value > 0)) {\n        lines++;\n        this.grid.splice(y, 1);\n\n        // 맨 위에 0으로 채워진 행을 추가한다.\n        this.grid.unshift(Array(_constants__WEBPACK_IMPORTED_MODULE_0__.COLS).fill(0));\n      }\n    });\n    if (lines > 0) {\n      // 지워진 줄이 있다면 점수를 더한다.\n      (0,_game__WEBPACK_IMPORTED_MODULE_1__.updateScore)(this.getLineClearPoints(lines));\n    }\n  }\n  freeze() {\n    this.piece.shape.forEach((row, y) => {\n      row.forEach((value, x) => {\n        if (value > 0) {\n          this.grid[y + this.piece.y][x + this.piece.x] = value;\n          console.log(this.grid);\n        }\n      });\n    });\n    this.clearLines();\n  }\n}\n\n//# sourceURL=webpack://tetris/./Scripts/board.ts?");

/***/ }),

/***/ "./Scripts/constants.ts":
/*!******************************!*\
  !*** ./Scripts/constants.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BLOCK_SIZE\": () => (/* binding */ BLOCK_SIZE),\n/* harmony export */   \"COLORS\": () => (/* binding */ COLORS),\n/* harmony export */   \"COLS\": () => (/* binding */ COLS),\n/* harmony export */   \"KEY\": () => (/* binding */ KEY),\n/* harmony export */   \"POINTS\": () => (/* binding */ POINTS),\n/* harmony export */   \"ROWS\": () => (/* binding */ ROWS),\n/* harmony export */   \"SHAPES\": () => (/* binding */ SHAPES)\n/* harmony export */ });\nconst COLS = 10;\nconst ROWS = 20;\nconst BLOCK_SIZE = 30;\nconst KEY = {\n  LEFT: 37,\n  RIGHT: 39,\n  DOWN: 40,\n  UP: 38,\n  SPACE: 32\n};\nObject.freeze(KEY);\nconst POINTS = {\n  SINGLE: 100,\n  DOUBLE: 300,\n  TRIPLE: 500,\n  TETRIS: 800,\n  SOFT_DROP: 1,\n  HARD_DROP: 2\n};\nObject.freeze(POINTS);\nconst COLORS = [\"cyan\", \"blue\", \"orange\", \"yellow\", \"green\", \"purple\", \"red\"];\nconst SHAPES = [[[0, 0, 1], [1, 1, 1], [0, 0, 0]], [[2, 2, 0], [0, 2, 2], [0, 0, 0]], [[0, 3, 3], [3, 3, 0], [0, 0, 0]], [[0, 4, 0], [4, 4, 4], [0, 0, 0]], [[5, 5], [5, 5]], [[6, 6, 6, 6], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]], [[7, 0, 0], [7, 7, 7], [0, 0, 0]]];\n\n//# sourceURL=webpack://tetris/./Scripts/constants.ts?");

/***/ }),

/***/ "./Scripts/game.ts":
/*!*************************!*\
  !*** ./Scripts/game.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"updateScore\": () => (/* binding */ updateScore)\n/* harmony export */ });\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./Scripts/board.ts\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./Scripts/constants.ts\");\n\n\nconst canvas = document.getElementById(\"game-tetris\");\nconst ctx = canvas.getContext(\"2d\");\nconst canvasNext = document.getElementById(\"game-tetris-next\");\nconst ctxNext = canvasNext.getContext(\"2d\");\nconst scoreElement = document.getElementById(\"game-score\");\n\n// 상수를 사용해 캔버스의 크기를 계산한다.\nctx.canvas.width = _constants__WEBPACK_IMPORTED_MODULE_1__.COLS * _constants__WEBPACK_IMPORTED_MODULE_1__.BLOCK_SIZE;\nctx.canvas.height = _constants__WEBPACK_IMPORTED_MODULE_1__.ROWS * _constants__WEBPACK_IMPORTED_MODULE_1__.BLOCK_SIZE;\nctxNext.canvas.width = _constants__WEBPACK_IMPORTED_MODULE_1__.BLOCK_SIZE * 4;\nctxNext.canvas.height = _constants__WEBPACK_IMPORTED_MODULE_1__.BLOCK_SIZE * 4;\n\n// 블록의 크기를 변경한다.\nctx.scale(_constants__WEBPACK_IMPORTED_MODULE_1__.BLOCK_SIZE, _constants__WEBPACK_IMPORTED_MODULE_1__.BLOCK_SIZE);\nctxNext.scale(_constants__WEBPACK_IMPORTED_MODULE_1__.BLOCK_SIZE, _constants__WEBPACK_IMPORTED_MODULE_1__.BLOCK_SIZE);\nconst moves = {\n  [_constants__WEBPACK_IMPORTED_MODULE_1__.KEY.LEFT]: p => ({\n    ...p,\n    x: p.x - 1\n  }),\n  [_constants__WEBPACK_IMPORTED_MODULE_1__.KEY.RIGHT]: p => ({\n    ...p,\n    x: p.x + 1\n  }),\n  [_constants__WEBPACK_IMPORTED_MODULE_1__.KEY.DOWN]: p => ({\n    ...p,\n    y: p.y + 1\n  }),\n  [_constants__WEBPACK_IMPORTED_MODULE_1__.KEY.UP]: p => ({\n    ...p,\n    y: p.x + 1\n  }),\n  [_constants__WEBPACK_IMPORTED_MODULE_1__.KEY.SPACE]: p => board.rotate(p)\n};\nlet time = {\n  start: 0,\n  elapsed: 0,\n  level: 1000\n};\nlet requestId = null;\ndocument.addEventListener(\"keydown\", event => {\n  if (moves[event.keyCode]) {\n    // 이벤트 버블링을 막는다.\n    event.preventDefault();\n\n    // 조각의 새 상태를 얻는다.\n    let p = moves[event.keyCode](board.piece);\n    if (event.keyCode === _constants__WEBPACK_IMPORTED_MODULE_1__.KEY.UP) {\n      while (board.valid(p)) {\n        board.piece.move(p);\n        p = moves[_constants__WEBPACK_IMPORTED_MODULE_1__.KEY.DOWN](board.piece);\n      }\n      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);\n      board.piece.draw();\n    }\n    if (board.valid(p)) {\n      // 이동이 가능한 상태라면 조각을 이동한다.\n      board.piece.move(p);\n\n      // 그리기 전에 이전 좌표를 지운다.\n      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);\n      board.piece.draw();\n    }\n  }\n});\nlet board = new _board__WEBPACK_IMPORTED_MODULE_0__.Board(ctx, ctxNext);\nfunction updateScore(score) {\n  scoreElement.textContent = (Number(scoreElement.textContent) + score).toString();\n}\nfunction gameOver() {\n  cancelAnimationFrame(requestId);\n  ctx.fillStyle = \"black\";\n  ctx.fillRect(1, 3, 8, 1.2);\n  ctx.font = \"1px Arial\";\n  ctx.fillStyle = \"red\";\n  ctx.fillText(\"GAME OVER\", 1.8, 4);\n}\nfunction animate(now = 0) {\n  // 지난 시간을 업데이트한다.\n  time.elapsed = now - time.start;\n\n  // 지난 시간이 현재 레벨의 시간을 초과했는지 확인한다.\n  if (time.elapsed > time.level) {\n    // 현재 시간을 다시 측정한다.\n    time.start = now;\n    board.drop();\n  }\n\n  // 새로운 상태로 그리기 전에 보드를 지운다.\n  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);\n  board.draw();\n  requestId = requestAnimationFrame(animate);\n}\nfunction play() {\n  board.reset();\n  scoreElement.textContent = \"0\";\n  animate();\n}\nplay();\n\n//# sourceURL=webpack://tetris/./Scripts/game.ts?");

/***/ }),

/***/ "./Scripts/piece.ts":
/*!**************************!*\
  !*** ./Scripts/piece.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Piece\": () => (/* binding */ Piece)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./Scripts/constants.ts\");\n\nclass Piece {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.spawn();\n  }\n  drawNext(ctx) {\n    this.ctx.fillStyle = this.color;\n    this.shape.forEach((row, y) => {\n      row.forEach((value, x) => {\n        // this.x, this.y는 shape의 상단 왼쪽 좌표이다\n        // shape 안에 있는 블록 좌표에 x, y를 더한다.\n        // 보드에서 블록의 좌표는 this.x + x가 된다.\n        if (value > 0) {\n          this.ctx.fillRect(this.x + x, this.y + y, 1, 1);\n        }\n      });\n    });\n    return ctx;\n  }\n  randomizeTetrominoType(noOfTypes) {\n    return Math.floor(Math.random() * noOfTypes);\n  }\n  spawn() {\n    const typeId = this.randomizeTetrominoType(_constants__WEBPACK_IMPORTED_MODULE_0__.COLORS.length);\n    this.shape = _constants__WEBPACK_IMPORTED_MODULE_0__.SHAPES[typeId];\n    this.color = _constants__WEBPACK_IMPORTED_MODULE_0__.COLORS[typeId];\n\n    // Starting position.\n    this.x = 0;\n    this.y = 0;\n    this.hardDropped = false;\n  }\n  setStartingPosition() {\n    this.x = this.typeId === 4 ? 4 : 3;\n  }\n  draw() {\n    this.ctx.fillStyle = this.color;\n    this.shape.forEach((row, y) => {\n      row.forEach((value, x) => {\n        // this.x, this.y는 shape의 상단 왼쪽 좌표이다\n        // shape 안에 있는 블록 좌표에 x, y를 더한다.\n        // 보드에서 블록의 좌표는 this.x + x가 된다.\n        if (value > 0) {\n          this.ctx.fillRect(this.x + x, this.y + y, 1, 1);\n        }\n      });\n    });\n  }\n  move(p) {\n    if (!this.hardDropped) {\n      this.x = p.x;\n      this.y = p.y;\n    }\n    this.shape = p.shape;\n  }\n}\n\n//# sourceURL=webpack://tetris/./Scripts/piece.ts?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./Scripts/game.ts");
/******/ 	
/******/ })()
;