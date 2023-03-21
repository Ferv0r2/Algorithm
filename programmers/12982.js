// 예산

function solution(d, budget) {
  d.sort((a, b) => a - b);
  let result = 0;

  let temp = budget;
  for (let i = 0; i < d.length; i++) {
    if (temp < d[i]) break;
    temp -= d[i];
    result++;
  }

  return result;
}

// 모범답안

function solution(d, budget) {
  return d
    .sort((a, b) => a - b)
    .reduce((count, price) => {
      return count + ((budget -= price) >= 0);
    }, 0);
}
