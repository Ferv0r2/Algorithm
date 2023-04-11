// 마법의 엘레베이터

function solution(storey) {
  let result = 0;

  while (storey) {
    let cur = storey % 10; // 현재 자라수
    let next = (storey / 10) % 10; // 다음 자리수

    if (cur > 5) {
      // 5보다 큰 경우
      result += 10 - cur; // 결과값에 + 10-cur
      storey += 10; // 다음 자리수 +1
    } else if (cur === 5) {
      // 5와 같은 경우
      result += cur;
      storey += next >= 5 ? 10 : 0; // 다음 자리수가 5보다 크면 +1
    } else {
      result += cur;
    }

    storey = parseInt(storey / 10); // 자리수를 변경하여 탐색
  }

  return result;
}

// 다른 사람의 풀이

function solution(storey) {
  if (storey < 5) return storey;
  const r = storey % 10;
  const m = (storey - r) / 10;
  return Math.min(r + solution(m), 10 - r + solution(m + 1)); // 재귀를 활용하여 최소값을 탐색
}
