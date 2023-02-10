const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const testcases = input.shift();

const answer = [];
const print = [];

input.forEach((v) => {
  const [first, second] = v.split(" ");
  if (first === "push") {
    answer.push(second);
  } else if (first === "pop") {
    if (answer[0] && answer.length > 0) {
      const num = answer.pop();
      print.push(num);
    } else {
      print.push(-1);
    }
  } else if (first === "size") {
    print.push(answer.length);
  } else if (first === "empty") {
    print.push(answer[0] ? 0 : 1);
  } else if (first === "top") {
    print.push(answer[0] ? answer[answer.length - 1] : -1);
  }
});

console.log(print.join("\n"));
