function solution(maps) {
    const dx = [0,0,-1,1];
    const dy = [1,-1,0,0];
    let visited = Array(maps.length).fill(0).map((v)=>Array(maps[0].length).fill(0));
    let answer = 0;
    
    const bfs = () => {
        const q = [];
        visited[0][0] = 1;
        q.push([0,0,1]);
        while(q.length > 0){
            const [fx,fy,cnt] = q.shift();
            if(fx === maps.length-1 && fy === maps[0].length-1){
                return cnt;
            }
            for(let i = 0;i<4;i++){
                const nx = fx + dx[i];
                const ny = fy + dy[i];
                if(nx < 0 || ny < 0 || nx >= maps.length || ny >= maps[0].length)continue;
                if(visited[nx][ny] === 0 && maps[nx][ny] === 1){
                    q.push([nx,ny,cnt+1]);
                    visited[nx][ny] = 1;
                }
            }
        }
        return -1;
    }
    return bfs();
}
