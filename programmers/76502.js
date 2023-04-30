// 괄호 회전하기

function solution(s) {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const rotated = s.slice(i) + s.slice(0, i); // 문자열 회전
    if (isCorrect(rotated)) result++; // 올바른 괄호면 result++
  }

  return result;
}

function isCorrect(s) {
  let stack = [];

  for (let char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      // 올바른 괄호인지 확인
      if (
        (char === ")" && stack[stack.length - 1] === "(") ||
        (char === "}" && stack[stack.length - 1] === "{") ||
        (char === "]" && stack[stack.length - 1] === "[")
      )
        stack.pop();
      else return false;
    }
  }

  // 전체를 순회하고 stack이 비어있으면 올바른 괄호
  return stack.length === 0;
}
