const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const first = +input.shift();
const second = input
  .shift()
  .toString()
  .split(" ")
  .map((v) => Number(v));
const third = input
  .shift()
  .toString()
  .split(" ")
  .map((v) => Number(v));

let answer = new Array(first).fill(1);

second.forEach((v, index) => {
  let number = v - third[0];
  if (number >= third[1]) {
    answer[index] += Math.ceil(number / third[1]);
  } else if (number > 0) {
    answer[index] += 1;
  }
});
let result = 0;

answer.forEach((v) => {
  result += v;
});

console.log(result);
