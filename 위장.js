function solution(clothes) {
    const map = new Map();
    const set = new Set();
    let result = 1;
    clothes.forEach((v)=>{
        map.set(v[1], !map.get(v[1]) ? 1 : map.get(v[1])+1);
        set.add(v[1]);
    })
    for(let item of set){
        result *= (map.get(item)+1);
    }
    return result-1;
}
