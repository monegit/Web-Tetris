import { tileSize } from "./config";

// source: https://www.joe.co.uk/gaming/tetris-block-names-221127
interface Tile {
  TILE_ORANGE_RICKY: number[];
  TILE_BLUE_RICKY: number[];
  TILE_CLEVELAND_Z: number[];
  TILE_RHODE_ISLAND_Z: number[];
  TILE_HERO: number[];
  TILE_TEEWEE: number[];
  TILE_SMASHBOY: number[];
}

export const TileData: Tile = {
  TILE_ORANGE_RICKY: ([] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0]),
  TILE_BLUE_RICKY: ([] = [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0]),
  TILE_CLEVELAND_Z: ([] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1]),
  TILE_RHODE_ISLAND_Z: ([] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0]),
  TILE_HERO: ([] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1]),
  TILE_TEEWEE: ([] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1]),
  TILE_SMASHBOY: ([] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1]),
};

export const tileList = [
  TileData.TILE_BLUE_RICKY,
  TileData.TILE_CLEVELAND_Z,
  TileData.TILE_HERO,
  TileData.TILE_ORANGE_RICKY,
  TileData.TILE_RHODE_ISLAND_Z,
  TileData.TILE_SMASHBOY,
  TileData.TILE_TEEWEE,
];

export function drawTile(game: CanvasRenderingContext2D) {
  let tile = nextTile();
  tile.forEach((element, i) => {
    if (element == 1) drawBox(i % 4, Math.floor(i / 4), game, tile);
  });
}

export function nextTile() {
  return tileList[Math.floor(Math.random() * tileList.length)];
}

function drawBox(
  x: number,
  y: number,
  game: CanvasRenderingContext2D,
  tile: number[]
) {
  let tileColor: string;
  switch (tile) {
    case TileData.TILE_BLUE_RICKY:
      tileColor = "blue";
      break;
    case TileData.TILE_CLEVELAND_Z:
      tileColor = "red";
      break;
    case TileData.TILE_HERO:
      tileColor = "cyan";
      break;
    case TileData.TILE_TEEWEE:
      tileColor = "purple";
      break;
    case TileData.TILE_ORANGE_RICKY:
      tileColor = "orange";
      break;
    case TileData.TILE_RHODE_ISLAND_Z:
      tileColor = "green";
      break;
    case TileData.TILE_SMASHBOY:
      tileColor = "yellow";
      break;
    default:
      tileColor = "black";
      break;
  }
  game.fillStyle = tileColor;
  game.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
}
