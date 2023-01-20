function solution(id_list, report, k) {
    const map = new Map();
    const answerMap = new Map();
    const answer = [];
    const badPerson = [];
    
    report.forEach((v)=>{
        const [user,bad] = v.split(' ');
        if(!map.get(user)){
            const set = new Set();
            set.add(bad);
            map.set(user,set);
        }else{
            const set = map.get(user);
            set.add(bad);
            map.set(user,set);
        }    
    })
    id_list.forEach((v)=>{
        const set = new Set(map.get(v));
        for(let item of set){
            if(!answerMap.get(item)){
                answerMap.set(item,1);
            }else{
                answerMap.set(item,answerMap.get(item)+1);
            }           
        }
    });
    for(let item of answerMap){
        const [first,second] = item;
        if(second >= k){
            badPerson.push(first);           
        }
    }
    id_list.forEach((v)=>{
        const arr = [...(new Set(map.get(v)))];
        let number = 0;
        
            badPerson.forEach((t)=>{
                if(arr.includes(t)){
                    number += 1;
                }
            })
            answer.push(number);
        
    })
    return answer;
}
