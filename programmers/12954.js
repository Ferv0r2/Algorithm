// x만큼 간격이 있는 n개의 숫자

function solution(x, n) {
  return new Array(n).fill(x).map((v, i) => v * (i + 1));
}
