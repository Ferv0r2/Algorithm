function solution(babbling) {
  const rep = /aya|ye|woo|ma/g;
  return babbling.map((v) => v.split(rep).join("")).filter((v) => v === "")
    .length;
}
