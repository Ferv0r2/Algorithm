// 로그인 성공?

function solution(id_pw, db) {
  let result = "fail";
  for (const data of db) {
    if (data[0] === id_pw[0]) {
      result = "wrong pw";
      if (data[1] === id_pw[1]) result = "login";
    }
  }

  return result;
}

// 모범답안

function solution(id_pw, db) {
  const [id, pw] = id_pw;
  const map = new Map(db);
  return map.has(id) ? (map.get(id) === pw ? "login" : "wrong pw") : "fail";
}
