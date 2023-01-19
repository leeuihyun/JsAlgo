function solution(numbers) {
    const checkPrime = (number) => {
        if(number === 0 || number === 1){
            return false;
        }
        for(let i =2;i<=Math.sqrt(number);i++){
            if(number%i === 0)return false;
        }
        return true;
    }
    const permutations = (set,arr,str) => {
        if(arr.length === 0) return;
            for(let i = 0;i < arr.length;i++){
                const newStr = str + arr[i];//1
                let copyArr = [...arr];
                copyArr.splice(i,1);
                if(checkPrime(parseInt(newStr))){
                    set.add(parseInt(newStr));
                    console.log(set);
                }
                console.log(arr,newStr);
                permutations(set,copyArr,newStr);
            }    
        
    }
    
    const numberArray = numbers.split('');
    const set = new Set();
    permutations(set,numberArray,'');
    
    return set.size;
}
