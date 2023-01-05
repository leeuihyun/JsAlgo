function solution(genres, plays) {
    const obj = {};
    const set = new Set();
    const answer = [];
    
    genres.forEach((v,index)=>{
        set.add(v);
        obj[v] = !obj[v] ? 
            {list : [index], sum : plays[index]} : 
            {list : [...obj[v].list, index], sum : obj[v].sum + plays[index]}
    });
    
    const setArr = Array.from(set).sort(function(a,b){
        return obj[b].sum - obj[a].sum;
    })
    
    for(let item of setArr){
        obj[item].list.sort(function(a,b){
            return plays[b] - plays[a];
        })
    }
    
    for(let item of setArr){
        obj[item].list.slice(0,2).forEach((v)=>{
            answer.push(v);
        })
    }
    
    return answer;
}
