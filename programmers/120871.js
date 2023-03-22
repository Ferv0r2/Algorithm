// 저주의 숫자 3

function solution(n) {
  let result = 0;

  for (let i = 1; i <= n; i++) {
    result++;
    while (result % 3 === 0 || String(result).includes("3")) result++;
  }

  return result;
}

// 모범답안

function solution(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0) n++;
    if (String(i).includes("3") && i % 3 != 0) n++;
  }
  return n;
}
