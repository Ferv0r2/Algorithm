// 연속된 수의 합

function solution(num, total) {
  const min = Math.ceil(total / num - Math.floor(num / 2));
  const result = [];
  let cnt = 0;

  while (cnt !== num) {
    result.push(min + cnt);
    cnt++;
  }

  return result;
}

// 모범답안

function solution(num, total) {
  var min = Math.ceil(total / num - Math.floor(num / 2));
  return new Array(num).fill(0).map((_, i) => i + min);
}
