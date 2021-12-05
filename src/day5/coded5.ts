import { horizontalAndVerticalLines, Line, linesD5 } from './data';

type Board = Record<string, number>;
const r1lines = horizontalAndVerticalLines();
const r2lines = linesD5;

console.log(getNumberOfLineCrossingPoints(r1lines));
console.log(getNumberOfLineCrossingPoints(r2lines));

function getNumberOfLineCrossingPoints(lines: Array<Line>) {
  const resultBoard: Board = lines.reduce((prev, next) => drawLine(prev, next), {});
  return Object.values(resultBoard).filter((value) => value > 1).length;
}

function drawLine(board: Board, line: Line): Board {
  let currentXIndex = line.start[0];
  let currentYIndex = line.start[1];
  board = addPointToBoard(board, line.start);
  while (currentXIndex !== line.end[0] || currentYIndex !== line.end[1]) {
    if (currentYIndex < line.end[1]) {
      currentYIndex = currentYIndex + 1;
    }
    if (currentYIndex > line.end[1]) {
      currentYIndex = currentYIndex - 1;
    }
    if (currentXIndex < line.end[0]) {
      currentXIndex = currentXIndex + 1;
    }
    if (currentXIndex > line.end[0]) {
      currentXIndex = currentXIndex - 1;
    }
    board = addPointToBoard(board, [currentXIndex, currentYIndex]);
  }
  return board;
}

function addPointToBoard(board: Board, point: [number, number]): Board {
  const index: string = '' + point;
  board[index] = (board[index] || 0) + 1;
  return board;
}
