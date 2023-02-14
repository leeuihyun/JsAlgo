const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("");

const solve = () => {
  const arr = [];
  let answer = 0;
  input.forEach((v, index) => {
    if (v === "(") {
      arr.push("1");
    } else {
      arr.pop();
      if (input[index - 1] === "(") {
        answer += arr.length;
      } else {
        answer += 1;
      }
    }
  });
  return answer;
};

console.log(solve());
