// 방문 길이

function solution(dirs) {
  const command = {
    U: [0, 1],
    D: [0, -1],
    R: [1, 0],
    L: [-1, 0],
  };
  const set = new Set();
  let current = [0, 0];

  for (const move of dirs) {
    const [x, y] = command[move];
    let currentX = current[0] + x;
    let currentY = current[1] + y;

    // 좌표 평면은 (-5, -5)부터 (5, 5)
    // 좌표 값을 넘어가면 continue
    if (currentX > 5 || currentX < -5 || currentY > 5 || currentY < -5)
      continue;

    // (이전 좌표 -> 현재 좌표), (현재좌표 -> 이전 좌표)
    // 두 방향을 고려하여 set에 add
    set.add(`${current[0]}${current[1]}${currentX}${currentY}`);
    set.add(`${currentX}${currentY}${current[0]}${current[1]}`);

    // 현재 좌표 갱신
    current = [currentX, currentY];
  }

  // 2개의 경우를 추가하였기 때문에 2로 나누기
  return set.size / 2;
}
