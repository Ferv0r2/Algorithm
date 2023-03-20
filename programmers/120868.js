// 삼각형 만들기

function solution(sides) {
  //   let maxValue = Math.max(...sides); // 11
  let minValue = Math.min(...sides); // 7

  //     maxValue가 가장 높을때
  //     for (let i=maxValue-minValue+1; i<=maxValue;i++) { // 5 -> 11, ++ => 7
  //         result++;
  //     }

  //     (maxValue+1) - (maxValue-minValue+1)
  //     minValue

  //     maxValue보다 더 큰 변이 있을 때
  //     for (let i=maxValue+1; i<maxValue+minValue; i++) { // 12 -> 17, ++ => 6
  //         result++;
  //     }

  //     (maxValue+minValue) - (maxValue+1)
  //     minValue - 1

  return minValue * 2 - 1;
}
