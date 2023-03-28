// 다음에 올 숫자

function solution(common) {
  if (common[1] * 2 === common[0] + common[2])
    return common[common.length - 1] + (common[1] - common[0]);
  return common[common.length - 1] * (common[1] / common[0]);
}

// 모범답안

function solution(common) {
  if (common[1] - common[0] == common[2] - common[1]) {
    return common.pop() + common[1] - common[0];
  }
  return (common.pop() * common[1]) / common[0];
}
