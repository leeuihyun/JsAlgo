function solution(answers) {
    var answer = [];
    let tmp = {first : 0,second : 0,third : 0};
    
    const first = [1,2,3,4,5];
    const second = [2,1,2,3,2,4,2,5];
    const third = [3,3,1,1,2,2,4,4,5,5];
    answers.forEach((v,index)=>{
        if(v === first[index%first.length]){
            tmp.first += 1;
        }
        if(v === second[index%second.length]){
            tmp.second += 1;
        }
        if(v === third[index%third.length]){
            tmp.third += 1;
        }
    })
    
    const max_num = Math.max(tmp.first,tmp.second,tmp.third);
    
    if(tmp.first === max_num)answer.push(1);
    if(tmp.second === max_num)answer.push(2);
    if(tmp.third === max_num)answer.push(3);
    return answer;
}
