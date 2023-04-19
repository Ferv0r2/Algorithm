// [1차] 비밀지도

function solution(n, arr1, arr2) {
  arr1 = toBinary(n, arr1);
  arr2 = toBinary(n, arr2);
  const result = [];

  for (let i = 0; i < n; i++) {
    const map1 = arr1[i];
    const map2 = arr2[i];
    let temp = "";
    for (let j = 0; j < n; j++) {
      map1[j] === "1" || map2[j] === "1" ? (temp += "#") : (temp += " ");
    }

    result.push(temp);
  }
  return result;
}

// 2진수로 만들고 자리수를 맞추는 함수
function toBinary(n, arr) {
  return arr.map((v) => v.toString(2).padStart(n, "0"));
}

// 모범답안

// 정규식과 replace() 메서드를 사용하여 깔끔하게 치환

function solution(n, arr1, arr2) {
  return arr1.map((v, i) =>
    addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, (a) =>
      +a ? "#" : " "
    )
  );
}

const addZero = (n, s) => {
  return "0".repeat(n - s.length) + s;
};
