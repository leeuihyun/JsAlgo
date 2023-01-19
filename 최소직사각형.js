function solution(sizes) {
    let min_number = 0;
    let max_number = 0;
    sizes.forEach((v)=>{
        const [first,second] = v;
        min_number = Math.max(min_number,Math.min(first,second))
        max_number = Math.max(max_number,Math.max(first,second));
    })
    return min_number*max_number;
}
