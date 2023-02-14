const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = input.shift();

const arr = input[0].split(" ").map((v) => parseInt(v));
const stack = [];
let answer = new Array(arr.length).fill(-1);

for (let i = 0; i < n; i++) {
  while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
    answer[stack.pop()] = arr[i];
  }
  stack.push(i);
}

console.log(answer.join(' '));
