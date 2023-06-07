// N진수 게임

function solution(n, t, m, p) {
  let str = "";

  // (인원 수 * 미리 구할 수)만큼 반복
  for (let i = 0; i < m * t; i++) {
    str += i.toString(n).toUpperCase();
  }

  let result = "";
  let cnt = 0;

  // 미리 구할 수까지 반복
  while (result.length < t) {
    // 인원 수만큼 문자열 커팅
    const temp = str.substring(cnt, cnt + m);

    // (순서-1)번째 값을 문자열에 추가 -> index는 0부터
    result += temp[p - 1];
    cnt += m;
  }

  return result;
}
