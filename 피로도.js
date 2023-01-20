function solution(k, dungeons) {
    dungeons.sort((a,b)=>b[0]-a[0]||b[1]-a[1]);
    let cnt = 0;
    let visited = new Array(dungeons.length).fill(false);
    
    const dfs = (k,curCnt) => {
        cnt = Math.max(curCnt,cnt);
        for(let i = 0;i < dungeons.length;i++){
            const [first,second] = dungeons[i];
            if(!visited[i] && k >= first){
                visited[i] = true;
                dfs(k-second,curCnt+1);
                visited[i] = false;
            }
        }
    }
    dfs(k,0);
    return cnt;
}
