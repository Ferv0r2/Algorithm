// 덧칠하기

function solution(n, m, section) {
  let result = 0;
  let last = -1;

  section.forEach((v) => {
    // 현재 영역(v)이 마지막에 칠한 영역(last)보다 크다면
    if (v > last) {
      // 마지막 칠한 영역(last) 갱신
      last = v + m - 1;
      result++;
    }
  });

  return result;
}
