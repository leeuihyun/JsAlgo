function solution(numbers) {
    let answer = '';
    const arr = [];
    
    numbers.forEach((v)=>{
        arr.push((v+''));
    })
    arr.sort(function(a,b){
        return (b+a)-(a+b);
    }).join('');
    
    for(item of arr){
        if(arr[0] === '0'){
            answer+='0';
            break;
        }
        answer+=item;
    }
    return answer;
}
