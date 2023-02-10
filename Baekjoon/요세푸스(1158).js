const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map((v) => Number(v));

const [first, second] = input;

const answer = [];

const arr = Array(first)
  .fill(0)
  .map((_, index) => index + 1);

let number = 0;
while (arr.length > 0) {
  number += 1;
  const tmp = arr.shift();
  if (number === second) {
    answer.push(tmp);
    number = 0;
  } else {
    arr.push(tmp);
  }
}

console.log(`<${answer.join(", ")}>`);
