import { boardSize } from "./config";
import { drawTile, TileData } from "./tile";

const canvas = <HTMLCanvasElement>document.getElementById("game-tetris");
const game = <CanvasRenderingContext2D>canvas.getContext("2d");

canvas.width = boardSize.width;
canvas.height = boardSize.height;
game.fillStyle = "red";
game.fillRect(0, 0, canvas.width, canvas.height);

drawTile(game, TileData.TILE_CLEVELAND_Z);

// function drawGame() {}
