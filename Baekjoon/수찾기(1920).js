const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = parseInt(input[0].trim());
const m = parseInt(input[2].trim());

const arr1 = input[1].split(" ").map((v) => parseInt(v));
const arr2 = input[3].split(" ").map((v) => parseInt(v));

const solve = (number) => {
  let left = 0;
  let right = n - 1;
  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    if (number < arr1[mid]) {
      right = mid - 1;
    } else if (number > arr1[mid]) {
      left = mid + 1;
    } else {
      return 1;
    }
  }
  return 0;
};

arr1.sort((a,b)=>a-b);
const ans = [];

for (let i = 0; i < arr2.length; i++) {
  ans.push(solve(arr2[i]));
}

console.log(ans.join("\n"));
