import { boardSize } from "./config";
import * as tile from "./tile";
import * as config from "./config";

export let board: number[][] = [];

export function initBoard(width: number, height: number) {
  board = [];
  for (let y = 0; y < height; y++) {
    var x_space: number[] = [];
    for (let x = 0; x < width; x++) {
      x_space.push(0);
    }
    board.push([...x_space]);
  }
}

export function drawGame(
  game: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement
) {
  window.setInterval(function () {
    game.clearRect(0, 0, canvas.width, canvas.height);

    board.forEach((y_array, y) => {
      y_array.forEach((state, x) => {
        switch (state) {
          case 0:
            game.fillStyle = config.mapBackgroundColor;
            break;
          case 1:
            game.fillStyle = "orange";
            break;
          case 2:
            game.fillStyle = "blue";
            break;
          case 3:
            game.fillStyle = "red";
            break;
          case 4:
            game.fillStyle = "green";
            break;
          case 5:
            game.fillStyle = "cyan";
            break;
          case 6:
            game.fillStyle = "purple";
            break;
          case 7:
            game.fillStyle = "yellow";
            break;
        }

        game.fillRect(
          x * config.tileSize,
          y * config.tileSize,
          config.tileSize,
          config.tileSize
        );
      });
    });
    tile.drawTile(game);
  }, config.tileSpeed * 10);
}
