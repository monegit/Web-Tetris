// source: https://www.joe.co.uk/gaming/tetris-block-names-221127

// prettier-ignore
const TILE_ORANGE_RICKY = 	[0, 0, 0, 0,
														 0, 0, 0, 0,
														 0, 0, 1, 0,
														 1, 1, 1, 0];
// prettier-ignore
const TILE_BLUE_RICKY = 		[0, 0, 0, 0,
														 0, 0, 0, 0,
														 1, 0, 0, 0,
														 1, 1, 1, 0];
// prettier-ignore
const TILE_CLEVELAND_Z =	  [0, 0, 0, 0,
														 0, 0, 0, 0,
														 0, 1, 1, 0,
														 0, 0, 1, 1];
// prettier-ignore
const TILE_RHODE_ISLAND_Z = [0, 0, 0, 0,
														 0, 0, 0, 0,
														 0, 0, 1, 1,
														 0, 1, 1, 0];
// prettier-ignore
const TILE_HERO = 					[0, 0, 0, 0,
 														 0, 0, 0, 0,
														 0, 0, 0, 0,
														 1, 1, 1, 1];
// prettier-ignore
const TILE_TEEWEE = 				[0, 0, 0, 0,
														 0, 0, 0, 0,
														 0, 0, 1, 0,
														 0, 1, 1, 1];
// prettier-ignore
const TILE_SMASHBOY = 			[0, 0, 0, 0,
														 0, 0, 0, 0, 
														 0, 0, 1, 1,
														 0, 0, 1, 1];

/**
 * 타일의 모양을 데이터화 한 enum 형식의 변수
 * @readonly
 * @enum {number}
 */
const TileData = {
  TILE_BLUE_RICKY,
  TILE_CLEVELAND_Z,
  TILE_HERO,
  TILE_ORANGE_RICKY,
  TILE_RHODE_ISLAND_Z,
  TILE_SMASHBOY,
  TILE_TEEWEE,
};

/**
 * @param {TileData[]} tile 타일 모양
 * @param {CanvasRenderingContext2D} game 게임 캔버스
 * use: /Tile/Tile.TILE_BLUE_RICKY
 */
function drawTile(game, tile) {
  drawBox(game);
}

/**
 * @param {CanvasRenderingContext2D} game 상자를 그릴 캔버스
 */
export function drawBox(game) {
  game.fillStyle = "blue";
  game.fillRect(0, 0, 10, 10);
}
