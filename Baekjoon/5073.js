const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

let answer = [];

for (let i = 0; i < input.length - 1; i++){
  const arr = input[i].split(' ').map((t) => parseInt(t));
  arr.sort((a, b) => b - a);
  if (arr[0] >= arr[1] + arr[2]) {
    answer.push('Invalid');
  }
  else {
    if (arr[0] === arr[1] && arr[1] === arr[2]) {
      answer.push('Equilateral');
    }
    else if (arr[0] !== arr[1] && arr[1] !== arr[2] && arr[0]!==arr[2]) {
      answer.push('Scalene');
    }
    else {
      answer.push('Isosceles');
    }  
  }
}

console.log(answer.join('\n'));
