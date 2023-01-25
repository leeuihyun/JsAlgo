function solution(fees, records) {
    const [first,second,third,fourth] = fees;
    const obj = {};
    const answer = [];
    const map = new Map();
    
    records.forEach((v,_)=>{
        const [time,number,check] = v.split(' ');
        if(!map.get(number) && check === 'IN'){
            map.set(number, {time : time, check : check});
            obj[number] = 0;
        }
        else if(map.get(number) && check === 'OUT'){
            const firstTime = new Date(`2023-01-02 ${map.get(number).time}:00`);
            const secondTime = new Date(`2023-01-02 ${time}:00`);
            const tmp = (secondTime.getTime()-firstTime.getTime())/1000/60;
            map.set(number, {time : time, check : check});
            obj[number] += tmp;
        }else if(map.get(number) && check === 'IN'){
            map.set(number, {time : time, check : check});
        }
    })
    
    for(let item of map){
        const [number,object] = item;
        if(object.check === 'IN'){
            const firstTime = new Date(`2023-01-02 ${object.time}:00`);
            const secondTime = new Date(`2023-01-02 23:59:00`);
            const tmp = (secondTime.getTime()-firstTime.getTime())/1000/60;
            obj[number] += tmp;
        }
    }
    const arr = [];
    
    for(let key in obj){
        arr.push([key,obj[key]]);    
    }

    arr.sort(function(a,b){
        return Number(a[0]) - Number(b[0]);
    })
    for(let i =0;i<arr.length;i++){
        const [number,value] = arr[i];
        let result = +second;
        if(value > first){
            result += Math.ceil((value-first)/third)*fourth
        }
        answer.push(result);
    }
    
    return answer;
}
