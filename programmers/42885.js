// 구명보트

function solution(people, limit) {
  let result = 0;
  let left = 0;
  let right = people.length - 1;

  people.sort((a, b) => b - a); // 내림차순 정렬

  while (left <= right) {
    // limit보다 작으면 양 끝 사람을 태우고 right 포인터 이동
    if (people[left] + people[right] <= limit) right--;

    // limit보다 큰 경우 left만 태우고 포인터 변경
    left++;
    result++;
  }

  return result;
}
