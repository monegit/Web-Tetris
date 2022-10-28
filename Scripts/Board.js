import { drawBox } from "./Tile.js";

/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("game-tetris");
const game = canvas.getContext("2d");

game.fillStyle = "red";
game.fillRect(0, 0, canvas.width, canvas.height);

drawBox(game);

// function drawGame() {}
