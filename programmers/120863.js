// 다항식 더하기

function solution(polynomial) {
  const temp = polynomial.split(" + ");
  const num = sum(temp.filter((v) => !isNaN(v)));
  const xNum = sum(
    temp.filter((v) => isNaN(v)).map((v) => v.replace("x", "") || 1)
  );

  if (xNum !== 0 && num !== 0)
    return xNum === 1 ? `x + ${num}` : `${xNum}x + ${num}`;
  if (xNum !== 0 && num === 0) return xNum === 1 ? "x" : `${xNum}x`;
  if (xNum === 0 && num !== 0) return `${num}`;
  if (xNum === 0 && num === 0) return "0";
}

function sum(ary) {
  return ary.reduce((acc, cur) => acc + Number(cur), 0);
}
