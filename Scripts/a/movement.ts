import { board } from "./board";
import { boardSize, tileSize } from "./config";
import { currentTile, setNextTile } from "./tile";

interface Position {
  x: number;
  y: number;
}

export const positionData: Position = {
  x: 0,
  y: 0,
};

export function movement() {
  window.addEventListener("keydown", (e) => {
    console.log(e.key);

    switch (e.key) {
      case "ArrowUp":
        // hard attach
        positionData.y -= tileSize;
        break;
      case "ArrowDown":
        // down move
        if (
          boardSize.height * tileSize >=
          positionData.y + tileSize * (currentTile.length + 1)
        ) {
          positionData.y += tileSize;
        }
        break;
      case "ArrowLeft":
        // left move
        if (
          tileSize * (currentTile.length + 1) <=
          positionData.x + tileSize * currentTile.length
        ) {
          positionData.x -= tileSize;
        }
        break;
      case "ArrowRight":
        // right move
        if (
          boardSize.width * tileSize >=
          positionData.x + tileSize * (currentTile.length + 1)
        ) {
          positionData.x += tileSize;
        }
        break;
      case " ":
        // rotate
        for (let y = 0; y < currentTile.length; y++) {
          for (let x = 0; x < y; x++) {
            [currentTile[x][y], currentTile[y][x]] = [
              currentTile[y][x],
              currentTile[x][y],
            ];
          }
        }

        currentTile.forEach((array) => array.reverse());
        break;
    }
  });

  window.setInterval(() => {
    if (
      boardSize.height * tileSize >=
      positionData.y + tileSize * (currentTile.length + 1)
    ) {
      positionData.y += tileSize;
    } else {
      attach(currentTile);
    }
  }, 1000);
}

function attach(tile: number[][]) {
  tile.forEach((y_array, y) => {
    y_array.forEach((e, x) => {
      if (!board[y + positionData.y / tileSize][x + positionData.x / tileSize])
        board[y + positionData.y / tileSize][x + positionData.x / tileSize] = e;
    });
  });

  positionData.x = 0;
  positionData.y = 0;

  setNextTile();
}
