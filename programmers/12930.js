// 이상한 문자 만들기

function solution(s) {
  return s
    .split(" ")
    .map((v) =>
      [...v]
        .map((val, idx) =>
          idx % 2 === 0 ? val.toUpperCase() : val.toLowerCase()
        )
        .join("")
    )
    .join(" ");
}
