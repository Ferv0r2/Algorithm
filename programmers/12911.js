// 다음 큰 숫자
function solution(n) {
  let binary = n.toString(2); // 2진수 변환
  let curOne = binary.match(/1/g).length; // 1인 개수 확인

  while (true) {
    let nextBinary = (++n).toString(2); // n을 1씩 늘려가며 값 확인
    let nextOne = nextBinary.match(/1/g).length;
    if (curOne === nextOne) break; // 1의 개수가 동일하면 break
  }

  return n;
}

// 또 다른 풀이
function solution(n) {
  var i, j;
  for (i = 0; !(n & 1); i++) {
    n = n >> 1;
  } // 1을 찾을때까지 우로 쉬프트, 쉬프트 횟수 = i
  for (j = 0; n & 1; i++, j++) {
    n = n >> 1;
  } // 0을 찾을때까지 우로 쉬프트, 1의 갯수 = j
  for (j--, n++; i !== j; i--) {
    n = n << 1;
  } // 0자리에 1대입, 1의 갯수 -1, i === j 가 될때까지 죄로 쉬프트하면서 쉬프트 횟수 -1
  for (i; i; i--, n++) {
    n = n << 1;
  } // i === 0 될때까지 좌로 쉬프트 하면서 쉬프트 횟수 -1, 0자리에 1대입
  return n;
}
