// k진수에서 소수 개수 구하기

function solution(n, k) {
  /*
    1. toString(N) 메서드로 진수 변환
    2. 0을 기준으로 split() => 단, `P`는 각 자릿수에 0을 포함하지 않는 소수입니다.
    3. 다시 10진수로 변경
    4. 소수 판단 후 개수 return
    */
  const numStr = n
    .toString(k)
    .split("0")
    .map((v) => v.toString(10));
  return numStr.filter((v) => isPrime(v)).length;
}

function isPrime(num) {
  if (num <= 1) return false;

  // 제곱근을 이용한 소수 판별법 (약수끼리의 곱은 대칭으로 이루어지기 때문)
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}
