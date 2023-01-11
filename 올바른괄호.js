function solution(s){
    let arr = [];
    let left = 0, right = 0;
    for(let i = 0; i<s.length;i++){
        const item = s[i];
        arr.push(item);
        if(item === '('){
            left += 1;
        }
        else{
            right += 1;
        }
        
        if(left < right){
            return false;
        }
    }
    if(left !== right){
        return false;
    }
    return true;
}
