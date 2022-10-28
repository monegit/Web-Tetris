import * as config from "./config";
import { drawTile, TileData, tileList } from "./tile";

const canvas = <HTMLCanvasElement>document.getElementById("game-tetris");
const game = <CanvasRenderingContext2D>canvas.getContext("2d");

function Init() {
  canvas.width = config.boardSize.width * config.tileSize;
  canvas.height = config.boardSize.height * config.tileSize;
  game.fillStyle = config.mapBackgroundColor;
  game.fillRect(0, 0, canvas.width, canvas.height);
  // map.
}

Init();

drawTile(game);

// function drawGame() {}
