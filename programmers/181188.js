// 요격 시스템

function solution(targets) {
  let result = 0;
  let prev = -1;

  // end 값을 기준으로 오름차순 정렬
  // => 먼저 요격해야 할 미사일이 배열의 맨 앞으로 옴
  targets
    .sort((a, b) => a[1] - b[1])
    .forEach((v) => {
      const [start, end] = v;

      // 이전에 요격한 미사일 끝 값 <= 현재 요소의 시작 값
      if (prev <= start) {
        // 요격한 미사일 끝 값 갱신
        prev = end;
        result++;
      }
    });

  return result;
}
