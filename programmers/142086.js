// 가장 가까운 같은 글자

function solution(s) {
  const lastIdx = new Array(26).fill(-1); // 알파벳 수만큼 배열 생성

  return [...s].map((c, i) => {
    // s는 소문자인 조건으로 ASCII 코드를 활용
    const idx = c.charCodeAt(0) - 97;
    const closest = lastIdx[idx]; // 가장 마지막에 나온 index 값
    lastIdx[idx] = i;

    // 값을 찾으면 현재 index - 가장 마지막에 나온 index 값 return
    return closest === -1 ? closest : i - closest;
  });
}
