const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const fn = parseInt(input[0]);

const queue = [];
const answer = [];

for (let i = 1; i <= fn; i++) {
  const [first, second] = input[i].split(" ");
  if (first === "push") {
    queue.push(second);
  } else if (first === "pop") {
    if (queue.length > 0) {
      answer.push(queue.shift());
    } else {
      answer.push(-1);
    }
  } else if (first === "size") {
    answer.push(queue.length);
  } else if (first === "empty") {
    answer.push(queue.length > 0 ? 0 : 1);
  } else if (first === "front") {
    answer.push(queue.length > 0 ? queue[0] : -1);
  } else {
    answer.push(queue.length > 0 ? queue[queue.length - 1] : -1);
  }
}

console.log(answer.join("\n"));
