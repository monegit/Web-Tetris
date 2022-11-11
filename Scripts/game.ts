import { board, initBoard } from "./board";
import * as config from "./config";
import { movement } from "./movement";
import * as tile from "./tile";

const canvas = <HTMLCanvasElement>document.getElementById("game-tetris");
const game = <CanvasRenderingContext2D>canvas.getContext("2d");

function initGame() {
  canvas.width = config.boardSize.width * config.tileSize;
  canvas.height = config.boardSize.height * config.tileSize;
  movement();
}

function drawGame() {
  window.setInterval(function () {
    game.clearRect(0, 0, canvas.width, canvas.height);

    board.forEach((y_array, y) => {
      y_array.forEach((state, x) => {
        switch (state) {
          case 0:
            game.fillStyle = config.mapBackgroundColor;
            game.fillRect(
              x * config.tileSize,
              y * config.tileSize,
              config.tileSize,
              config.tileSize
            );
            break;
          case 1:
            break;
        }
      });
    });
    tile.drawTile(game);
  }, config.tileSpeed * 10);
}

initBoard(config.boardSize.width, config.boardSize.height);
initGame();
drawGame();

window.setInterval(() => {
  console.log(board);
}, 1000);
