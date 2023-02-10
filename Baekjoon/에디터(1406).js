const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let firstArray = input.shift().trim().split("");
const testcases = Number(input.shift().trim());

let secondArray = [];

input.forEach((v)=>{
    const [first,second] = v.split(' ');
    if(first === 'L'){
        if(firstArray.length > 0){
            secondArray.push(firstArray.pop());
        }
    }else if(first === 'D'){
        if(secondArray.length > 0){
            firstArray.push(secondArray.pop());
        }
    }else if(first === 'B'){
        if(firstArray.length > 0){
            firstArray.pop();
        }
    }else {
        firstArray.push(second);
    }
})

console.log(firstArray.concat(secondArray.reverse()).join(''));
