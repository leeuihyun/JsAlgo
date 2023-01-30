function solution(numbers, target) {
    let answer = 0;
    const solve = (sum,index) => {
        if(index === numbers.length){
            if(sum === target){
                answer+=1;    
            }
            return;
        }
        solve(sum+numbers[index],index+1);
        solve(sum-numbers[index],index+1);
    }
    solve(0,0);
    return answer;
}
