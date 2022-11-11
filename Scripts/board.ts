import { boardSize } from "./config";
import * as tile from "./tile";

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
