// 특이한 정렬

function solution(numlist, n) {
  numlist.sort((a, b) => {
    const [aGap, bGap] = [Math.abs(b - n), Math.abs(a - n)];
    if (aGap === bGap) return b - a;
    return bGap - aGap;
  });
  return numlist;
}

// 모범답안

function solution(numlist, n) {
  return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a); // 왼쪽 값이 0이 되면 동일한 경우
}
