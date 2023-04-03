// 피보나치 수

function solution(n) {
  if (n <= 1) return n;

  const result = [0, 1];

  for (let i = 2; i <= n; i++) {
    result[i] = (result[i - 1] + result[i - 2]) % 1234567;
  }

  return result[n];
}
