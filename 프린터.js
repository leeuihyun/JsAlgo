function solution(priorities, location) {
    var answer = 0;
    const arr = [];
    
    priorities.forEach((v,index)=>{
        const obj = {};
        obj['value'] = v;
        obj['index'] = index;
        arr.push(obj);
    })
    
    while(arr.length){
        const first = arr.shift();
        const prior = arr.some((v)=>v.value > first.value);
        if(prior){
            arr.push(first);
        }else{
            answer+=1;
            if(first.index === location){
                break;
            }
        }
    }
    
    return answer;
}
