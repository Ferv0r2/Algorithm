// n^2 배열 자르기

function solution(n, left, right) {
  const result = [];

  // left부터 right값까지 순회
  for (let i = left; i <= right; i++) {
    // 좌표 (r, c)에 들어갈 숫자는 max(r, c) + 1
    let r = i % n;
    let c = Math.floor(i / n);
    result.push(Math.max(r, c) + 1);
  }

  return result;
}
