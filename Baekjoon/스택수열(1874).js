const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const tc = Number(input[0]);

let visited = Array(tc).fill(false); 

const stack = [];

let start = 0;
let answer = "YES";

for (let i = 1; i <= tc; i++) {
  const tmp = parseInt(input[i]);

  if (visited[tmp]) {
    answer = "NO";
    break;
  }

  if (start < tmp) {
    while (start < tmp) {
      start += 1;
      if (visited[start]) {
        continue;
      }
      stack.push("+");
    }
    visited[start] = true;
    stack.push("-");
  }

  if (start > tmp) {
    while (start > tmp) {
      start -= 1;
      if (!visited[start]) {
        stack.push("-");
        visited[start] = true;
      } else {
        continue;
      }
    }
  }
}

if (answer === "NO") {
  console.log("NO");
} else {
  console.log(stack.join("\n"));
}
