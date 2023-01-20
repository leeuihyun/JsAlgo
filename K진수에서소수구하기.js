function solution(n, k) {
    const change = n.toString(k);
    let answer = 0;
    
    const isCheck = (number) => {
        if(number === 0 || number === 1)return false;
        for(let i=2;i<=Math.sqrt(number);i++){
            if(number%i === 0)return false;
        }
        return true;
    }
    
    for(let i = 0;i<change.length;i++){
        let str = '';
        for(let j=i;j<change.length;j++){
            if(change[j] === '0') break;
            str += change[j];
            
            if(isCheck(parseInt(str))){
                if(change[i-1] === '0' && change[j+1] === '0'){
                    answer += 1;                   
                }else if(change[i-1] === '0' && j+1 === change.length){
                    answer += 1;
                }else if(change[j+1] === '0' && i === 0){
                    answer += 1;
                }else if(i === 0 && j+1 === change.length){
                    answer += 1;
                }
            }
        }
    }
    return answer;
}
