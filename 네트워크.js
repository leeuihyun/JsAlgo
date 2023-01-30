function solution(n, computers) {
    let answer = 0;
    let visited = new Array(n).fill(0);
    
    const dfs = (index) => {
        visited[index] = 1;
        for(let i=0;i<n;i++){
            if(visited[i] === 1)continue;
            if(computers[index][i] === 1 && index !== i){
                dfs(i);
            }   
        }
    }
    for(let i =0;i<n;i++){
        if(!visited[i]){
            dfs(i);
            answer+=1;
        }       
    }
    return answer;
}
