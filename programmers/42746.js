// 가장 큰 수

function solution(numbers) {
  const temp = numbers.map((v) => String(v)).sort(condition);
  if (temp[0] === "0") return "0";
  return temp.join("");
}

function condition(a, b) {
  if (a + b > b + a) return -1;
  if (a + b < b + a) return 1;
  if (a + b === b + a) return 0;
}
