// 바탕화면 정리

function solution(wallpaper) {
  const col = []; // 행 좌표를 담을 배열
  const row = []; // 열 좌표를 담을 배열

  for (let i = 0; i < wallpaper.length; i++) {
    // 행 순회
    for (let j = 0; j < wallpaper[0].length; j++) {
      // 열 순회
      if (wallpaper[i][j] === "#") {
        col.push(i); // 행에 해당하는 값
        row.push(j); // 열에 해당하는 값
      }
    }
  }

  return [
    Math.min(...col), // 행에서 가장 작은 값
    Math.min(...row), // 열에서 가장 작은 값
    Math.max(...col) + 1, // 행에서 가장 큰 값 +1 (파일을 포함해야하기 때문)
    Math.max(...row) + 1, // 열에서 가장 큰 값 +1
  ];
}
