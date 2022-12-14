import { COLORS, SHAPES } from "./constants";

export interface PieceData {
  x: number;
  y: number;
  color: string;
  shape: number[][];
  ctx: CanvasRenderingContext2D;
  ctxNext: CanvasRenderingContext2D;
  typeId: number;
  hardDropped: boolean;
}

export class Piece implements PieceData {
  x!: number;
  y!: number;
  color!: string;
  shape!: number[][];
  ctx!: CanvasRenderingContext2D;
  ctxNext!: CanvasRenderingContext2D;
  typeId!: number;
  hardDropped!: boolean;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    this.spawn();
  }

  drawNext(ctx: CanvasRenderingContext2D) {
    this.ctx.fillStyle = this.color;
    this.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          this.ctx.fillRect(this.x + x, this.y + y, 1, 1);
        }
      });
    });

    return ctx;
  }

  randomizeTetrominoType(noOfTypes: number) {
    return Math.floor(Math.random() * noOfTypes);
  }

  spawn() {
    const typeId = this.randomizeTetrominoType(COLORS.length);
    this.shape = SHAPES[typeId];
    this.color = COLORS[typeId];

    // Starting position.
    this.x = 0;
    this.y = 0;

    this.hardDropped = false;
  }

  setStartingPosition() {
    this.x = this.typeId === 4 ? 4 : 3;
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          this.ctx.fillRect(this.x + x, this.y + y, 1, 1);
        }
      });
    });
  }

  move(p: PieceData) {
    if (!this.hardDropped) {
      this.x = p.x;
      this.y = p.y;
    }
    this.shape = p.shape;
  }
}
