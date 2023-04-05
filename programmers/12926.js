// 시저 암호

function solution(s, n) {
  let result = "";

  for (const word of s) {
    if (word === " ") {
      // 공백 처리
      result += " ";
      continue;
    }

    let ascii = word.charCodeAt(); // ASCII 코드 변환
    let temp = ascii + n;

    if ((ascii <= 90 && temp > 90) || (ascii <= 122 && temp > 122)) temp -= 26; // 소문자이고, n을 더했을때 값을 넘어가는 처리

    result += String.fromCharCode(temp); // String으로 변환
  }

  return result;
}
