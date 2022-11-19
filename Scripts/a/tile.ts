import { board } from "./board";
import { tileSize } from "./config";
import { positionData } from "./movement";

// source: https://www.joe.co.uk/gaming/tetris-block-names-221127

interface Tile {
  TILE_ORANGE_RICKY: number[][];
  TILE_BLUE_RICKY: number[][];
  TILE_CLEVELAND_Z: number[][];
  TILE_RHODE_ISLAND_Z: number[][];
  TILE_HERO: number[][];
  TILE_TEEWEE: number[][];
  TILE_SMASHBOY: number[][];
}

export const tileData: Tile = {
  TILE_ORANGE_RICKY: [
    [0, 0, 0],
    [0, 0, 1],
    [1, 1, 1],
  ],
  TILE_BLUE_RICKY: [
    [0, 0, 0],
    [2, 0, 0],
    [2, 2, 2],
  ],
  TILE_CLEVELAND_Z: [
    [0, 0, 0],
    [3, 3, 0],
    [0, 3, 3],
  ],
  TILE_RHODE_ISLAND_Z: [
    [0, 0, 0],
    [0, 4, 4],
    [4, 4, 0],
  ],
  TILE_HERO: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [5, 5, 5, 5],
  ],
  TILE_TEEWEE: [
    [0, 0, 0],
    [0, 6, 0],
    [6, 6, 6],
  ],
  TILE_SMASHBOY: [
    [7, 7],
    [7, 7],
  ],
};

export const tileList = [
  tileData.TILE_BLUE_RICKY,
  tileData.TILE_CLEVELAND_Z,
  tileData.TILE_HERO,
  tileData.TILE_ORANGE_RICKY,
  tileData.TILE_RHODE_ISLAND_Z,
  tileData.TILE_SMASHBOY,
  tileData.TILE_TEEWEE,
];

export let currentTile: number[][];

export function drawTile(game: CanvasRenderingContext2D) {
  // 배열대로 타일을 그려줌
  currentTile.forEach((y_array, y) => {
    y_array.forEach((e, x) => {
      if (e > 0) drawBox(x, y, game, currentTile);
    });
  });
}

export function setNextTile() {
  currentTile = tileList[Math.floor(Math.random() * tileList.length)];
}

function drawBox(
  x: number,
  y: number,
  game: CanvasRenderingContext2D,
  tile: number[][]
) {
  let tileColor: string;
  switch (tile) {
    case tileData.TILE_BLUE_RICKY:
      tileColor = "blue";
      break;
    case tileData.TILE_CLEVELAND_Z:
      tileColor = "red";
      break;
    case tileData.TILE_HERO:
      tileColor = "cyan";
      break;
    case tileData.TILE_TEEWEE:
      tileColor = "purple";
      break;
    case tileData.TILE_ORANGE_RICKY:
      tileColor = "orange";
      break;
    case tileData.TILE_RHODE_ISLAND_Z:
      tileColor = "green";
      break;
    case tileData.TILE_SMASHBOY:
      tileColor = "yellow";
      break;
    default:
      tileColor = "black";
      break;
  }

  game.fillStyle = tileColor;
  game.fillRect(
    x * tileSize + positionData.x,
    y * tileSize + positionData.y,
    tileSize,
    tileSize
  );
}
