function solution(maps) {
    const answer = [];
    const dx = [1,-1,0,0];
    const dy = [0,0,1,-1];
    const n = maps.length;
    const m = maps[0].length;

    let visited = Array(n).fill(0).map((v)=>Array(m).fill(false));

    const solve = (x,y) => {
        visited[x][y] = true;
        const q = [];
        q.push([x,y]);
        let number = parseInt(maps[x][y]);
        while(q[0]){
            const [fx,fy] = q.shift();

            for(let i=0;i<4;i++){
                const nx = fx + dx[i];
                const ny = fy + dy[i];
                if(nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
                if(!visited[nx][ny] && maps[nx][ny]!=='X'){
                    q.push([nx,ny]);
                    number += parseInt(maps[nx][ny]);
                    visited[nx][ny] = true;
                }
            }
        }
        return number;
    }

    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(!visited[i][j] && maps[i][j]!=='X'){
                answer.push(solve(i,j));
            }
        }
    }
    answer.sort(function(a,b){
        return a-b;
    });
    if(!answer[0]){
        answer.push(-1);
    }
    return answer;
}
