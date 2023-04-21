// 콜라 문제

function solution(a, b, n) {
  let result = 0;

  while (n >= a) {
    // 교환 가능한 수량이 아닐 때까지 반복
    result += Math.floor(n / a) * b;
    n = Math.floor(n / a) * b + (n % a);
  }

  return result;
}
