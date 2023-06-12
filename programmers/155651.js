// 호텔 대실

function solution(book_time) {
  let room = [];

  // 정렬 후 순회
  book_time.sort().forEach(([start, end]) => {
    const startTime = toMinute(start);
    const endTime = toMinute(end) + 10;

    // 시작 시간(startTime)보다 작은 값 서치
    const idx = room.findIndex((v) => v <= startTime);

    // 없다면 종료 시간(endTime) push => 방 추가
    // 있다면 해당 room의 종료 시간(endTime) 갱신 => 사용이 끝난 방에 들어감
    if (idx === -1) room.push(endTime);
    else room[idx] = endTime;
  });

  return room.length;
}

// 분으로 통일하는 함수
function toMinute(str) {
  const [hour, minute] = str.split(":");
  return hour * 60 + +minute;
}
