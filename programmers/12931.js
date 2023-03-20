// 자릿수 더하기

function solution(n) {
  return [...String(n)].map((v) => parseInt(v)).reduce((a, b) => a + b);
}
