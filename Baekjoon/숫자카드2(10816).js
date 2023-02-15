const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");

const first = parseInt(input[0]);
const second = parseInt(input[2]);

const ans = [];

const arr1 = input[1].split(" ").map((v) => +v);
const arr2 = input[3].split(" ").map((v) => +v);

const map = new Map();

arr1.forEach((v) => {
  if (!map.has(v)) {
    map.set(v, 1);
  } else {
    map.set(v, map.get(v) + 1);
  }
});

arr2.forEach((v) => {
  ans.push(map.has(v) ? map.get(v) : 0);
});

console.log(ans.join(" "));
