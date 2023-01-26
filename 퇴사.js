const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const number = input.shift();
const arr = [];
let maxNum = 0;

for (let i = 0; i < number; i++) {
  const [first, second] = input[i].split(" ");
  arr.push({
    date: +first.trim(),
    money: +second.trim(),
  });
}

const solve = (index, result) => {
  if (parseInt(index) === arr.length) {
    maxNum = Math.max(maxNum, result);
    return;
  }
  if (parseInt(index) + arr[parseInt(index)].date <= arr.length) {
    const tmp = result + arr[parseInt(index)].money;
    solve(index + arr[parseInt(index)].date, tmp);
  }
  if (parseInt(index) <= arr.length - 1) {
    solve(parseInt(index) + 1, result);
  }
};

solve(0, 0);
console.log(maxNum);
