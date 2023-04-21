// 두 개 뽑아서 더하기

function solution(numbers) {
  const result = [];

  // 0부터 n-1까지 순회와 1부터 n까지 순회
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      // 순회중인 배열index의 값을 더하여 push
      result.push(numbers[i] + numbers[j]);
    }
  }

  // 중복을 제거하고 오름차순으로 return
  return [...new Set(result)].sort((a, b) => a - b);
}
