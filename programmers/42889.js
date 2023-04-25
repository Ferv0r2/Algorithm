// 실패율

function solution(N, stages) {
  const result = [];
  let rest = stages.length; // 스테이지에 도달한 플레이어 수

  for (let i = 1; i <= N; i++) {
    // 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수
    let lose = stages.filter((v) => v === i).length;

    result.push([lose / rest, i]); // index와 함께 저장
    rest -= lose;
  }

  // 값으로 내림차순 후 index 배열로 return
  return result.sort((a, b) => b[0] - a[0]).map((v) => v[1]);
}
