// 직사각형 넓이 구하기

function solution(dots) {
  dots.sort((a, b) => a[0] - b[0]);
  let width = Math.abs(dots[0][0] - dots[2][0]);
  let height = Math.abs(dots[0][1] - dots[1][1]);

  return width * height;
}
