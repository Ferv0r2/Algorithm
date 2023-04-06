// 영어 끝말잇기

function solution(n, words) {
  const used = new Set();
  let lastChar = "";
  let result = [0, 0];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    // 현재 단어의 앞 글자와 중복여부 확인
    if (i > 0 && (word[0] !== lastChar || used.has(word))) {
      result = [(i % n) + 1, Math.floor(i / n) + 1];
      break;
    }
    lastChar = word[word.length - 1]; // 마지막 단어 글자
    used.add(word); // 사용된 단어
  }

  return result;
}
