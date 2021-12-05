import { boardsD4, drawnNumbersD4 } from './data';

const boards: number[][][] = boardsD4();
let winningBoard = [];
let drawnNumbers = [];

for (let i = 0; i < drawnNumbersD4.length; i++) {
  const allDrawnNumbers = drawnNumbersD4.slice(0, i + 1);
  for (const board of boards) {
    if (checkVictoryOfBoard(board, allDrawnNumbers)) {
      winningBoard = board;
      drawnNumbers = allDrawnNumbers;
      break;
    }
  }
  if (winningBoard.length) {
    break;
  }
}

const result = calculateResult(winningBoard, drawnNumbers);
console.log(result);

function calculateResult(board: number[][], resultNumbers: number[]){
  return winningBoard
  .flatMap((row) => row)
  .filter((guess) => !resultNumbers.includes(guess))
  .reduce((prev, next) => prev + next, 0) * resultNumbers[resultNumbers.length - 1];
}

function checkVictoryOfBoard(board: number[][], numbers: number[]): boolean {
  const rowChecked = board.some((row) => row.every((it) => numbers.includes(it)));
  const iteratorArray = [...Array(5).keys()];
  const columnsChecked = iteratorArray
    .map((columnIndex) => iteratorArray.map((rowIndex) => board[rowIndex][columnIndex]))
    .some((column) => column.every((it) => numbers.includes(it)));
  return rowChecked || columnsChecked;
}
