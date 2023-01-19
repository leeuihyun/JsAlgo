function solution(brown, yellow) {
    const sum = brown+yellow;
    const answer = [];
    for(let i = 3;i<sum;i++){
        if(sum%i===0 && sum/i*2 + i*2 === brown+4){
            answer.push(sum/i);
            answer.push(i);
            break;
        }
    }
    return answer;
}
