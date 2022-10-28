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

export function drawTile(game: CanvasRenderingContext2D, tile: number[]) {
  tile.forEach((element, i) => {
    if (element == 1) drawBox(i % 4, Math.floor(i / 4), game);
  });
}

function drawBox(x: number, y: number, game: CanvasRenderingContext2D) {
  game.fillStyle = "blue";
  game.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
}
