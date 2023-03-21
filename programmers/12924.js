function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    let temp = i;
    for (let j = i + 1; j <= n; j++) {
      temp += j;
      if (temp === n) answer++;
      if (temp > n) break;
    }
  }
  return answer + 1;
}

// 모범답안

function solution(n) {
  let answer = 0;

  for (var i = 1; i <= n; i++) {
    if (n % i == 0 && i % 2 == 1) answer++;
  }

  return answer;
}
