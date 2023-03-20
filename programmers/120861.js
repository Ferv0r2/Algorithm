// 캐릭터의 좌표 (개선필요)

function solution(keyinput, board) {
  const boardMax = board.map((v) => (v - 1) / 2);
  const result = [0, 0];

  for (const key of keyinput) {
    switch (key) {
      case "left":
        result[0] = result[0] - 1;
        break;
      case "right":
        result[0] = result[0] + 1;
        break;
      case "up":
        result[1] = result[1] + 1;
        break;
      case "down":
        result[1] = result[1] - 1;
        break;
    }

    for (let i = 0; i <= 1; i++) {
      if (Math.abs(result[i]) > boardMax[i]) {
        let sign = result[i] > 0 ? 1 : -1;
        result[i] = sign * boardMax[i];
      }
    }
  }

  return result;
}

// 모범 답안

function solution(keyinput, board) {
  let key = { right: [1, 0], up: [0, 1], down: [0, -1], left: [-1, 0] };

  let rslt = keyinput
    .map((v) => key[v])
    .reduce(
      (a, b) => {
        if (
          Math.abs(a[0] + b[0]) > board[0] / 2 ||
          Math.abs(a[1] + b[1]) > board[1] / 2
        )
          return [a[0], a[1]];

        return [a[0] + b[0], a[1] + b[1]];
      },
      [0, 0]
    );

  return rslt;
}
