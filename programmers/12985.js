// 예상 대진표

function solution(n, a, b) {
  let result = 0;

  // Round 0 : 4, 7
  // Round 1 : 2, 4
  // Round 2 : 1, 2
  // Round 3 : 1, 1

  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    result++;
  }

  return result;
}
