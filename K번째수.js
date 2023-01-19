function solution(array, cd) {
    const answer = [];
    cd.forEach((v)=>{
        const [start,end,result] = v;
        const tmp = [];
        array.forEach((item,index)=>{
            if(index >= start-1 && index < end){
                tmp.push(item);
            }
        })
        tmp.sort((a,b)=>a-b);
        answer.push(tmp[result-1])
    })
    return answer;
}
