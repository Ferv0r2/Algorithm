// 귤 고르기

function solution(k, tangerine) {
  let result = 0;
  let dict = {};

  // 귤 크기별 개수 확인
  tangerine.forEach((v) => (dict[v] === undefined ? (dict[v] = 1) : dict[v]++));

  // 크기별 개수를 내림차순으로 정렬 후 순회
  Object.values(dict)
    .sort((a, b) => b - a)
    .forEach((v) => {
      // k가 0보다 작을 때 return
      if (k <= 0) return;

      // 많은 수부터 빼면서 최솟값 도출
      k -= v;
      result++;
    });

  return result;
}
