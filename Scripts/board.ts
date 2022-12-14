import { COLORS, COLS, POINTS, ROWS } from "./constants";
import { updateScore } from "./game";
import { Piece, PieceData } from "./piece";

export class Board {
  grid!: number[][];
  piece!: Piece;
  ctx!: CanvasRenderingContext2D;
  ctxNext!: CanvasRenderingContext2D;
  next!: Piece;

  constructor(
    ctx: CanvasRenderingContext2D,
    ctxNext: CanvasRenderingContext2D
  ) {
    this.ctx = ctx;
    this.ctxNext = ctxNext;
  }

  // 새 게임이 시작되면 보드를 초기화한다.
  reset() {
    this.grid = this.getEmptyBoard();
    this.piece = new Piece(this.ctx);
    this.piece.setStartingPosition();
    this.getNewPiece();
  }

  draw() {
    this.piece.draw();
    this.drawBoard();
  }

  drop() {
    let p = { ...this.piece, y: this.piece.y + 1 };
    if (this.valid(p)) {
      this.piece.move(p);
    } else {
      this.freeze();
      // this.clearLines();
      if (this.piece.y === 0) {
        // Game over
        return false;
      }
      this.piece = this.next;
      this.piece.ctx = this.ctx;
      this.piece.setStartingPosition();
      this.getNewPiece();
    }
    return true;
  }

  drawBoard() {
    this.grid.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          this.ctx.fillStyle = COLORS[value - 1];
          this.ctx.fillRect(x, y, 1, 1);
        }
      });
    });
  }

  getNewPiece() {
    const { width, height } = this.ctxNext.canvas;
    this.next = new Piece(this.ctxNext);
    this.ctxNext.clearRect(0, 0, width, height);
    this.next.draw();
  }

  // 0으로 채워진 행렬을 얻는다.
  getEmptyBoard(): number[][] {
    return Array.from({ length: ROWS }, () => Array(COLS).fill(0));
  }

  valid(p: PieceData) {
    // this.freeze();
    return p.shape.every((row, dy) => {
      return row.every((value, dx) => {
        let x = p.x + dx;
        let y = p.y + dy;
        return (
          value === 0 || (this.isInsideWalls(x, y) && this.notOccupied(x, y))
        );
      });
    });
  }

  rotate(p: PieceData) {
    // 알고리즘 처리
    for (let y = 0; y < p.shape.length; ++y) {
      for (let x = 0; x < y; ++x) {
        [p.shape[x][y], p.shape[y][x]] = [p.shape[y][x], p.shape[x][y]];
      }
    }

    // 열 순서대로 뒤집는다.
    p.shape.forEach((row) => row.reverse());

    return p;
  }

  isInsideWalls(x: number, y: number) {
    return x >= 0 && x < COLS && y <= ROWS;
  }

  notOccupied(x: number, y: number) {
    return this.grid[y] && this.grid[y][x] === 0;
  }

  getLineClearPoints(lines: number) {
    return lines === 1
      ? POINTS.SINGLE
      : lines === 2
      ? POINTS.DOUBLE
      : lines === 3
      ? POINTS.TRIPLE
      : lines === 4
      ? POINTS.TETRIS
      : 0;
  }

  clearLines() {
    let lines = 0;

    this.grid.forEach((row, y) => {
      // 모든 값이 0보다 큰지 비교한다.
      if (row.every((value) => value > 0)) {
        lines++;
        this.grid.splice(y, 1);

        // 맨 위에 0으로 채워진 행을 추가한다.
        this.grid.unshift(Array(COLS).fill(0));
      }
    });

    if (lines > 0) {
      // 지워진 줄이 있다면 점수를 더한다.
      updateScore(this.getLineClearPoints(lines));
    }
  }

  freeze() {
    this.piece.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          this.grid[y + this.piece.y][x + this.piece.x] = value;
          console.log(this.grid);
        }
      });
    });

    this.clearLines();
  }
}
