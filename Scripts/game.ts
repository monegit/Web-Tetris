import { Board } from "./board";
import { BLOCK_SIZE, COLS, KEY, ROWS } from "./constants";
import { PieceData } from "./piece";

const canvas = <HTMLCanvasElement>document.getElementById("game-tetris");
const ctx = <CanvasRenderingContext2D>canvas.getContext("2d");

const canvasNext = <HTMLCanvasElement>(
  document.getElementById("game-tetris-next")
);
const ctxNext = <CanvasRenderingContext2D>canvasNext.getContext("2d");
const scoreElement = <HTMLLabelElement>document.getElementById("game-score");

// 상수를 사용해 캔버스의 크기를 계산한다.
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

ctxNext.canvas.width = BLOCK_SIZE * 4;
ctxNext.canvas.height = BLOCK_SIZE * 4;

// 블록의 크기를 변경한다.
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);
ctxNext.scale(BLOCK_SIZE, BLOCK_SIZE);

const moves = {
  [KEY.LEFT]: (p: PieceData) => ({ ...p, x: p.x - 1 }),
  [KEY.RIGHT]: (p: PieceData) => ({ ...p, x: p.x + 1 }),
  [KEY.DOWN]: (p: PieceData) => ({ ...p, y: p.y + 1 }),
  [KEY.UP]: (p: PieceData) => ({ ...p, y: p.x + 1 }),
  [KEY.SPACE]: (p: PieceData) => board.rotate(p),
};

let time = { start: 0, elapsed: 0, level: 1000 };
let requestId: number | null = null;

document.addEventListener("keydown", (event) => {
  if (moves[event.keyCode]) {
    // 이벤트 버블링을 막는다.
    event.preventDefault();

    // 조각의 새 상태를 얻는다.
    let p = moves[event.keyCode](board.piece);

    if (event.keyCode === KEY.UP) {
      while (board.valid(p)) {
        board.piece.move(p);
        p = moves[KEY.DOWN](board.piece);
      }

      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      board.piece.draw();
    }

    if (board.valid(p)) {
      // 이동이 가능한 상태라면 조각을 이동한다.
      board.piece.move(p);

      // 그리기 전에 이전 좌표를 지운다.
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      board.piece.draw();
    }
  }
});

let board = new Board(ctx, ctxNext);

export function updateScore(score: number) {
  scoreElement.textContent = (
    Number(scoreElement.textContent) + score
  ).toString();
}

function gameOver() {
  cancelAnimationFrame(requestId!);
  ctx.fillStyle = "black";
  ctx.fillRect(1, 3, 8, 1.2);
  ctx.font = "1px Arial";
  ctx.fillStyle = "red";
  ctx.fillText("GAME OVER", 1.8, 4);
}

function animate(now = 0) {
  // 지난 시간을 업데이트한다.
  time.elapsed = now - time.start;

  // 지난 시간이 현재 레벨의 시간을 초과했는지 확인한다.
  if (time.elapsed > time.level) {
    // 현재 시간을 다시 측정한다.
    time.start = now;

    board.drop();
  }

  // 새로운 상태로 그리기 전에 보드를 지운다.
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  board.draw();
  requestId = requestAnimationFrame(animate);
}

function play() {
  board.reset();
  scoreElement.textContent = "0";
  animate();
}

play();
