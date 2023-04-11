// 개인정보 수집 유효기간

function solution(today, terms, privacies) {
  const todayDate = new Date(today); // Date 타입으로 변환
  const termDict = {};
  const result = [];

  for (let termValue of terms) {
    const [term, period] = termValue.split(" ");
    // 각 약관별 key-value 저장
    termDict[term] = +period;
  }

  for (let i = 0; i < privacies.length; i++) {
    const [date, term] = privacies[i].split(" ");

    let expiredDate = new Date(date);
    expiredDate.setMonth(expiredDate.getMonth() + termDict[term]); // 현재 월 + 약관 개월

    if (todayDate >= expiredDate) result.push(i + 1); // 오늘 날짜가 만료일과 같거나 크면 index 값 push
  }

  return result;
}
