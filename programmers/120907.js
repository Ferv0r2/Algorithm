// OX 퀴즈

function solution(quiz) {
  return quiz.map((data) => {
    const temp = data.split(" ");
    if (temp[1] === "+") {
      if (Number(temp[0]) + Number(temp[2]) === Number(temp[4])) return "O";
      return "X";
    }

    if (Number(temp[0]) - Number(temp[2]) === Number(temp[4])) return "O";
    return "X";
  });
}
