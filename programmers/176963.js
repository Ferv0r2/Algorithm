// 추억 점수

function solution(name, yearning, photo) {
  const dict = {};

  for (let i = 0; i < name.length; i++) {
    dict[name[i]] = yearning[i];
  }

  return photo.map((v) =>
    v.reduce((acc, cur) => {
      // 각 배열의 그리움 합 계산
      if (!dict[cur]) return acc; // 그립지 않은 경우 pass
      return acc + dict[cur]; // 그리운 경우 +
    }, 0)
  );
}
