// 프린터

function solution(priorities, location) {
  let result = 0;

  while (priorities.length) { // 배열이 비어있을 때까지
    const temp = priorities.shift(); // 왼쪽 항목부터 빼기

    if (temp < Math.max(...priorities)) { // 해당 항목보다 중요도 높은 항목이 있다면
      priorities.push(temp); // 맨 뒤로 보내기
      if (location === 0) location = priorities.length - 1; // location도 맨 뒤로 보내기
      else location--;
    } else {
      result++;
      if (location === 0) break; // 원하는 항목이 출력됨
      else location--;
    }
  }

  return result;
}


// 모범답안

// key-value로 위치-우선순위로 저장하는 방식
function solution(priorities, location) {
    var arr = priorities.map((priority, index) => {
        return {
            index: index, priority: priority
        };
    }); 

    var queue = [];

    while(arr.length > 0) {
        var firstEle = arr.shift();
        var hasHighPriority = arr.some(ele => ele.priority > firstEle.priority);
        if (hasHighPriority) {
            arr.push(firstEle);
        } else {
            queue.push(firstEle);
        }
    }

    return queue.findIndex(queueEle => queueEle.index === location) + 1;
}