const sol = (N) => {
  const row = new Array(N).fill(0);
  let cnt = 0;

  function isPossible(L, X) { 
    for (let i = 0; i < L; i++) {
      if (X === row[i]) return false;
      if (Math.abs(X - row[i]) === L - i) return false;
    }
    return true;
  }

  function dfs(L) {
    if (L === N) {
      cnt++;
      return;
    }
    for (let i = 0; i < N; i++) {
      if (isPossible(L)) { // L행 i열에 둘 수 있다면 실행.
        row[L]=i;
        dfs(L + 1);
      }
    }
  }

  dfs(0);
  return cnt;
};


const input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    console.log(sol(+line));
  })
  .on("close", () => {
    process.exit();
  });
