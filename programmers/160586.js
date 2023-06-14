// 대충 만든 자판

function solution(keymap, targets) {
  return targets.map((target) =>
    target.split("").reduce((acc, cur) => {
      // 현재까지 누른 키의 횟수(acc)가 -1인 경우
      // 이후 문자열 작성이 불가능 => return -1
      if (acc === -1) return -1;

      // 현재 문자(cur)가 할당된 키들 서치
      const temp = keymap
        .map((key) => key.indexOf(cur))
        .filter((val) => val !== -1);

      // 할당된 키가 없는 경우, 문자열 작성이 불가능 => return -1
      // 있는 경우 할당된 키 중 최솟값를 선택, index는 0부터 시작하므로 값에 +1
      return temp.length === 0 ? -1 : acc + Math.min(...temp) + 1;
    }, 0)
  );
}
