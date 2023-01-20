function solution(today, terms, privacies) {
    const arr = today.split('.').map((v)=>parseInt(v));
    let obj = {};
    const answer = [];
    
    terms.forEach((v)=>{
        obj[v[0]] = parseInt(v.substr(2));
    })
    privacies.forEach((v,index)=>{
        let tmp = v.split('.');
        let test = tmp[2].split(' ');
        tmp.pop();
        tmp.push(test[0]);
        tmp.push(test[1]);
        tmp = tmp.map((t,index)=>{
            if(index < 3){
                return parseInt(t);
            }
            return t;
        })
        tmp[1]+=obj[tmp[3]];
        if(tmp[1]>12){
            if(tmp[1]%12 === 0){
                tmp[0]+=parseInt(tmp[1]/12)-1;
                tmp[1] = 12;
            }else{
                tmp[0]+=parseInt(tmp[1]/12);
                tmp[1] = tmp[1]%12;
            }
        }
        tmp[2] -=1;
        if(tmp[2]===0){
            tmp[2] = 28;
            tmp[1]-=1;
            if(tmp[1]===0){
                tmp[1] = 12;
                tmp[0]-=1;
            }
        }
        
        if(tmp[0] < arr[0]){
            answer.push(index + 1);
            return;
        }else if(tmp[0] === arr[0]){
            if(tmp[1] < arr[1]){
                answer.push(index+1);
                return;
            }else if(tmp[1] === arr[1]){
                if(tmp[2] < arr[2]){
                    answer.push(index+1);
                    return;
                }
            }
        }
    })
    return answer;
}
