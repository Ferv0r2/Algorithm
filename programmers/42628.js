// 이중우선순위큐

function solution(operations) {
  const queue = [];

  operations.forEach((v) => {
    const [command, num] = v.split(" ");

    // 명령어 I, 데이터 삽입 후 정렬
    if (command === "I") {
      queue.push(+num);
      queue.sort((a, b) => b - a);
      return;
    }

    // 명령어 D, 빈 큐에 데이터 삭제 연산 무시
    if (!queue.length) return;

    // 최댓값/최솟값 제거
    if (num === "1") queue.shift();
    if (num === "-1") queue.pop();
  });

  return queue.length ? [queue[0], queue[queue.length - 1]] : [0, 0];
}
