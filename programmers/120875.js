// 평행

function solution(dots) {
  let a = Math.abs(dots[0][1] - dots[1][1]) / Math.abs(dots[0][0] - dots[1][0]);
  let b = Math.abs(dots[2][1] - dots[3][1]) / Math.abs(dots[2][0] - dots[3][0]);

  return a === b ? 1 : 0;
}
