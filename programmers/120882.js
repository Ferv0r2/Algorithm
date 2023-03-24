// 등수 매기기

function solution(score) {
  const avg = score.map(([a, b]) => (a + b) / 2);
  const sorted = [...avg].sort((a, b) => b - a);
  return avg.map((v) => sorted.indexOf(v) + 1);
}

// 모범답안

function solution(score) {
  return score.map(
    ([x, y]) => score.filter(([a, b]) => (a + b) / 2 > (x + y) / 2).length + 1
  );
}
