function solution(begin, target, words) {
    //words -> target 미포함 처리
    if(!words.includes(target))return 0;
    const len = begin.length;
    let answer = 51;
    
    const dfs = (current,index,cnt) => { //현재단어,인덱스,count
        if(cnt >= answer){
            return;
        }
        if(current === target){
            answer = Math.min(answer,cnt);
            return;
        }
        for(let i = 0;i<words.length;i++){
            let dif = 0;
            for(let j=0;j<len;j++){
                if(current[j] !== words[i][j]){
                    dif++;
                }
            }
            if(dif === 1){
                dfs(words[i],i+1,cnt+1);
            }
        }
    }
    dfs(begin,0,0);
    
    return answer;
}
