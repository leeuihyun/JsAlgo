const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map((v) => parseInt(v));

let answer = [];

const board = input
  .slice(1, n + 1)
  .map((v) => v.split(" ").map((n) => parseInt(n)));

let dp = Array(n + 1)
  .fill(0)
  .map((v) => Array(n + 1).fill(0));

for (let i = 1; i < n + 1; i++) {
  for (let j = 1; j < n + 1; j++) {
    dp[i][j] =
      dp[i - 1][j] + dp[i][j - 1] + board[i - 1][j - 1] - dp[i - 1][j - 1];
  }
}

const res = input.slice(n + 1).map((v) => v.split(" ").map((t) => parseInt(t)));

res.forEach((v) => {
  const [x1, y1, x2, y2] = v;
  const ans = dp[x2][y2] - dp[x1 - 1][y2] - dp[x2][y1 - 1] + dp[x1 - 1][y1 - 1];
  answer.push(ans);
});

console.log(answer.join("\n"));
