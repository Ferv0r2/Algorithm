// 카펫

function solution(brown, yellow) {
  const sum = brown + yellow; // 전체 면적

  // width가 height와 같거나 크므로 height를 기준으로 반복 | 테두리, 노란색을 고려하여 3부터 시작
  for (let height = 3; height < sum; height++) {
    if (sum % height !== 0) continue;

    let width = sum / height;

    if ((width - 2) * (height - 2) === yellow) return [width, height]; // 테두리(2)만큼 뺀 크기가 yellow와 같으면 return
  }
}
