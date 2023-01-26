const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const number = input.shift();
const arr = [];
let answer = '';

for(let i=0;i<number;i++){
    const str = input[i].split(' ')[0].toString().trim();
    if(str === 'pop'){
        answer+=`${arr[0] ? arr[0] : -1}\n`;
        arr.shift();
    }else if(str === 'size'){
        answer += `${arr.length}\n`;
    }else if(str === 'empty'){
        answer += `${arr[0] ? 0 : 1}\n`;
    }else if(str === 'front'){
        answer += `${arr[0] ? arr[0] : -1}\n`;
    }else if(str === 'back'){
        answer += `${arr[0] ? arr[arr.length-1] : -1}\n`;
    }else{
        const num = parseInt(input[i].split(' ')[1]);
        arr.push(num);
    }
}
console.log(answer);
