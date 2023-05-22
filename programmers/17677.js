// 뉴스 클러스터링

function solution(str1, str2) {
  const toCollection = (str) => {
    const arr = [];

    // 대문자로 문자열 통일
    str = str.toUpperCase();

    for (let i = 0; i < str.length - 1; i++) {
      // 문자열을 2개씩 끊으면서 순회
      const atom = str.slice(i, i + 2);
      // 숫자, 특수문자가 없는 문자열이면 배열에 push
      if (!atom.match(/[^A-Z]/g)) arr.push(atom);
    }

    return arr;
  };

  const arr1 = toCollection(str1);
  const arr2 = toCollection(str2);

  // Set 자료형으로 중복 원소 제거
  const set = new Set([...arr1, ...arr2]);
  let union = 0;
  let intersection = 0;

  set.forEach((atom) => {
    const has1 = arr1.filter((v) => v === atom).length;
    const has2 = arr2.filter((v) => v === atom).length;

    // 합집합 : set의 원소에서 배열의 값이 일치하면 모두 포함
    // 교집합 : set의 원소에서 배열의 값이 일치할 때, 더 적은 값으로 포함
    union += Math.max(has1, has2);
    intersection += Math.min(has1, has2);
  });

  // 합집합이 없다면 65536, 있다면 조건에 맞게 교집합/합집합*65536의 정수부분 return
  return union ? Math.floor((intersection / union) * 65536) : 65536;
}
