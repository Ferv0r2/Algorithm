// N개의 최소공배수

function solution(arr) {
  // 내림차순 정렬
  arr.sort((a, b) => b - a);

  let lcm = arr[0]; // 가장 큰 arr[0]로 설정

  for (let i = 1; i < arr.length; i++) {
    let r = 0;
    let m = lcm; // 큰 값
    let n = arr[i]; // 작은 값

    // n이 0이 될 때까지 반복
    while (n) {
      r = m % n;
      m = n;
      n = r;
    }

    lcm = (lcm * arr[i]) / m; // 최소공배수 갱신
  }

  return lcm;
}

// 모범답안

// reduce()를 활용한 깔끔한 방식

function solution(arr) {
  let r,
    m,
    n = 0;
  return arr
    .sort((a, b) => b - a)
    .reduce((acc, cur) => {
      m = acc;
      n = cur;
      while (0 < n) {
        r = m % n;
        m = n;
        n = r;
      }
      return (acc * cur) / m;
    });
}
