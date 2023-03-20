// 이진 변환 반복하기

function solution(s) {
  const result = [0, 0];

  while (s !== "1") {
    let tmp = s.length;
    s = s.split("").filter((v) => v !== "0");
    result[1] += tmp - s.length;
    s = s.length.toString(2);
    result[0]++;
  }

  return result;
}
