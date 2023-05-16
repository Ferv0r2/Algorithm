// 2016년

function solution(a, b) {
  // 요일 배열 생성
  const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  // new Date()로 해당 날짜의 요일 index 추출 후 return
  return week[new Date(2016, a - 1, b).getDay()];
}

// 다른 사람의 풀이
// toString() 메서드에서 요일을 추출한 센스있는 코드

function getDayName(a, b) {
  var tempDate = new Date(2016, a - 1, b);
  return tempDate.toString().slice(0, 3).toUpperCase();
}
