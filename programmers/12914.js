// 멀리 뛰기

// 1 칸을 뛰는 방법 = 1 가지
// 2 칸을 뛰는 방법 = 2 가지
// (n+2 칸을 뛰는 방법) = (n+1 칸을 뛰는 방법) + (n 칸을 뛰는 방법)

function solution(n) {
  const dp = [1, 1];

  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 2] + dp[i - 1]) % 1234567;
    // 1234567로 나눈 나머지를 저장
    // (결과값이 너무 크면 overflow 에러가 발생할 수 있음)
  }

  return dp[n]; // n번째 값 return
}
