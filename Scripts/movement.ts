import { boardSize, tileSize } from "./config";
import { currentTile } from "./tile";

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
    switch (e.key) {
      case "ArrowUp":
        positionData.y -= tileSize;
        break;
      case "ArrowDown":
        if (boardSize.height * tileSize >= positionData.y + tileSize * 5) {
          positionData.y += tileSize;
        }
        break;
      case "ArrowLeft":
        if (tileSize * 6 <= positionData.x + tileSize * 5) {
          positionData.x -= tileSize;
        }
        break;
      case "ArrowRight":
        if (boardSize.width * tileSize >= positionData.x + tileSize * 4) {
          positionData.x += tileSize;
        }
        break;
    }
  });

  window.setInterval(() => {
    if (boardSize.height * tileSize >= positionData.y + tileSize * 5) {
      positionData.y += tileSize;
    } else {
      attach(currentTile);
    }
  }, 700);
}

export function attach(tile: number[][]) {
  tile.forEach((y_array, y) => {});
}
