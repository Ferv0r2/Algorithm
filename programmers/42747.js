// H-index

function solution(citations) {
  citations.sort((a, b) => b - a);
  let result = 0;

  const len = citations.length;
  for (let i = 0; i < len; i++) {
    if (i < citations[i]) result++;
  }

  return result;
}
