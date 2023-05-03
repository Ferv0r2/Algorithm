// 푸드 파이트 대회

function solution(food) {
  let result = "";

  // food[0]은 항상 1이기 때문에 food[1]부터 순회
  for (let i = 1; i < food.length; i++) {
    result += String(i).repeat(Math.floor(food[i] / 2));
  }

  // 가운데 0(물)을 넣고 reverse() 메서드로 대칭
  return result + "0" + [...result].reverse().join("");
}
