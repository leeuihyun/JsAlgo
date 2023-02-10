const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const testcases = input.shift();

const answer = [];

input.forEach((v) => {
  let str = "";
  const arr = v.split(" ");

  arr.forEach((t, index) => {
    const tmp = t.split("");
    while (tmp[0] && tmp.length > 0) {
      str += tmp.pop();
    }
    if (index !== arr.length - 1) {
      str += " ";
    }
  });

  answer.push(str);
});

console.log(answer.join('\n'));
