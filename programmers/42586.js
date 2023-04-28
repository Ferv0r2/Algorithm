// 기능개발

function solution(progresses, speeds) {
  const result = [];
  let cnt = 1;

  // 소요일수 계산
  let deployDays = progresses.map((progress, idx) =>
    Math.ceil((100 - progress) / speeds[idx])
  );
  let prevDeploy = deployDays[0];

  // deployDays[0]을 제외하고 순회
  for (let i = 1; i < deployDays.length; i++) {
    if (deployDays[i] <= prevDeploy) cnt++; // 기준 값보다 낮으면 함께 배포
    else {
      prevDeploy = deployDays[i]; // 해당 값으로 배포 기준 변경
      result.push(cnt); // result에 cnt값 push
      cnt = 1; // 개수 초기화
    }
  }

  result.push(cnt);
  return result;
}
