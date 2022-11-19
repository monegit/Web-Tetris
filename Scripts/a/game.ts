import { board, drawGame, initBoard } from "./board";
import * as config from "./config";
import { movement } from "./movement";
import * as tile from "./tile";

const canvas = <HTMLCanvasElement>document.getElementById("game-tetris");
const game = <CanvasRenderingContext2D>canvas.getContext("2d");

function initGame() {
  canvas.width = config.boardSize.width * config.tileSize;
  canvas.height = config.boardSize.height * config.tileSize;
  movement();
  tile.setNextTile();
}

initBoard(config.boardSize.width, config.boardSize.height);
initGame();
drawGame(game, canvas);

window.setInterval(() => {
  console.log(board);
}, 1000);
