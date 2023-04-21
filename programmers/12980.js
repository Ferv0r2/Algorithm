// 점프와 순간이동

function solution(n) {
  // 2진수로 변경 후 정규식으로 0을 제거한 길이
  return n.toString(2).replace(/0/g, "").length;
}
