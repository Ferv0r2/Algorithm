// 피로도

function solution(k, dungeons) {
  let result = -1;
  const visit = new Array(dungeons.length).fill(0);

  const dfs = (k, dungeons, cnt, visit) => {
    for (let i = 0; i < dungeons.length; i++) {
      const [total, use] = dungeons[i];
      // 방문한 던전 or 현재 던전 최소 피로도 > 현재 피로도 continue
      if (visit[i] || total > k) continue;

      // 방문 노드 기록
      visit[i] = 1;
      dfs(k - use, dungeons, cnt++, visit);

      // 재귀 이후 방문 이전으로
      visit[i] = 0;
    }

    result = Math.max(cnt, result);
  };

  dfs(k, dungeons, 0, visit);
  return result;
}
