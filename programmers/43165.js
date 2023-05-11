// 타겟 넘버

function solution(numbers, target) {
  let result = 0;

  // DFS 재귀로 해결
  const dfs = (idx, sum) => {
    // 마지막 트리에 도착하면 return
    if (idx === numbers.length) {
      if (sum === target) result++;
      return;
    }

    dfs(idx + 1, sum + numbers[idx]); // 더하는 경우
    dfs(idx + 1, sum - numbers[idx]); // 빼는 경우
  };

  dfs(0, 0);

  return result;
}
