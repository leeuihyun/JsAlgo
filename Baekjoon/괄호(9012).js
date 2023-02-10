const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const tc = Number(input[0]);

for (let i = 1; i <= tc; i++) {
  const arr = [];
  let result = "YES";
  const v = input[i];

  for (let item = 0; item < v.length; item++) {
    if (v[item] === "(") {
      arr.push("1");
    } else {
      if (!arr.pop()) {
        result = "NO";
        break;
      }
    }
  }
  if (arr.length !== 0) {
    result = "NO";
  }
  console.log(result);
}
