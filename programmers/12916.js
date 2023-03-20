// 문자열 내 p와 y의 개수

function solution(s) {
  const a = [...s.toLowerCase()].filter((v) => v === "p").length;
  const b = [...s.toLowerCase()].filter((v) => v === "y").length;
  return a === b;
}
