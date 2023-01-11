function solution(arr)
{
    let stack = [];
    arr.forEach((v,index)=>{
       if(stack.length === 0) {
           stack.push(v);
       } 
        else if(stack[stack.length-1] !== v){
            stack.push(v);
        }
    });
    
    return stack;
}
