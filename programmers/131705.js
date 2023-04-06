// 삼총사

function solution(number) {
  let result = 0;

  /// 배열에서 3개를 조합
  for (let i = 0; i < number.length - 2; i++) {
    for (let j = i + 1; j < number.length - 1; j++) {
      for (let k = j + 1; k < number.length; k++) {
        // 세 값을 더 해서 0이면 결과에 +1
        let sum = number[i] + number[j] + number[k];
        if (sum === 0) result++;
      }
    }
  }

  return result;
}

// 다른 풀이

function solution(number) {
  let result = 0;

  const combination = (current, start) => {
    if (current.length === 3) {
      // 문제의 답을 위한 하드코딩 부분
      result += current.reduce((acc, cur) => acc + cur, 0) === 0 ? 1 : 0;
      return;
    }

    for (let i = start; i < number.length; i++) {
      combination([...current, number[i]], i + 1);
    }
  };
  combination([], 0); // 조합을 구하는 재귀함수
  return result;
}
