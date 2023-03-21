// 안전지대

function solution(board) {
  const size = board.length;
  let mine = Array.from(Array(size), () => Array(size).fill(0));

  board.map((col, idx) => col.map((v, i) => v === 1 && danger(idx, i, mine)));
  return mine.reduce((acc, cur) => acc + cur.filter((v) => v === 0).length, 0);
}

function danger(i, j, newBoard) {
  const size = newBoard.length;

  newBoard[i][j] = 1;
  if (i > 0) newBoard[i - 1][j] = 1;
  if (j > 0) newBoard[i][j - 1] = 1;
  if (i < size - 1) newBoard[i + 1][j] = 1;
  if (j < size - 1) newBoard[i][j + 1] = 1;
  if (i > 0 && j > 0) newBoard[i - 1][j - 1] = 1;
  if (i > 0 && j < size - 1) newBoard[i - 1][j + 1] = 1;
  if (i < size - 1 && j > 0) newBoard[i + 1][j - 1] = 1;
  if (i < size - 1 && j < size - 1) newBoard[i + 1][j + 1] = 1;
}
