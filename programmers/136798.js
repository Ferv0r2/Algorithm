// 기사단원의 무기

function solution(number, limit, power) {
  const arr = Array.from({ length: number }, (_, i) => {
    const temp = divisor(i + 1);
    // limit보다 크면 power, 작으면 약수 return
    if (temp > limit) return power;
    return temp;
  });

  // 배열 합 return
  return arr.reduce((acc, cur) => acc + cur, 0);
}

// 약수를 구하는 함수
function divisor(num) {
  let ans = 0;

  // i == 4 && j == 1 : 4 % 1 === 0, 4 / 1 = 4, ans += 2
  // i == 4 && j == 2 : 4 % 2 === 0, 4 / 2 = 4, ans += 1
  // i == 10 && j == 1 : 10 % 1 === 0, 10 / 1 = 10, ans += 2
  // i == 10 && j == 2 : 10 % 2 === 0, 10 / 2 = 5, ans += 2
  // i == 10 && j == 3 : 10 % 3 === 1, pass, continue
  // reference : https://www.geeksforgeeks.org/count-divisors-n-on13/

  // Math.sqrt() 메서드로 순회 시간복잡도를 단축
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      if (num / i === i) ans++;
      else ans += 2;
    }
  }

  return ans;
}
