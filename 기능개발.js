function solution(progresses, speeds) {
    let answer = [];
    let number = 0;
    
    const arr = progresses.map((v,index)=>{
        const nm = (100-v)%speeds[index];
        if(nm){
            return Math.floor((100-v)/speeds[index]) + 1;
        }else{
            return Math.floor((100-v)/speeds[index]);
        }
    })
    
    arr.forEach((v,index)=>{
        if(number === 0 || number < v){
            number = v;
            answer.push(1);
        }else{
            answer[answer.length-1] += 1;
        }
    })
    
    return answer;
}
