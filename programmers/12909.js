// 올바른 괄호

// 처음 풀었을 때
function solution(s) {
  const stack = [];
  const len = s.length;

  if (len % 2 !== 0) return false;
  if (s[0] === ")" || s[len - 1] === "(") return false;

  for (let char of s) {
    if (char === "(") stack.push(char);
    if (char === ")") stack.pop();
  }

  return stack.length === 0 ? true : false;
}

// 모범답안
function solution(s) {
  let result = 0;

  for (let char of s) {
    result += char === "(" ? 1 : -1;

    if (result < 0) {
      return false;
    }
  }

  return result === 0 ? true : false;
}
