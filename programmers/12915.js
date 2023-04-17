// 문자열 내 마음대로 정렬하기

function solution(strings, n) {
  strings.sort((a, b) => {
    // n번째의 문자를 ASCII 코드로 비교
    let numA = a.charCodeAt(n);
    let numB = b.charCodeAt(n);

    // 문자가 같으면 사전순으로 정렬
    if (numA - numB === 0) return a > b ? 1 : -1;

    // 다르면 n번째 문자를 기준으로 정렬
    return numA - numB;
  });
  return strings;
}

// 모범답안

// localeCompare() 메서드를 사용하여 문자열을 비교

function solution(strings, n) {
  return strings.sort((s1, s2) =>
    s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])
  );
}
