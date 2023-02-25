let [A, B] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

let answer = -1;
const DFS = (A, B, cnt) => {
  if (A === B) {
    answer = cnt + 1;
    return;
  } else {
    if (A * 2 <= B) DFS(A * 2, B, cnt + 1);
    if (A * 10 + 1 <= B) DFS(A * 10 + 1, B, cnt + 1);
  }
};

DFS(A, B, 0);
console.log(answer);
