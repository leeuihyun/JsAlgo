function solution(n, times) {
    times.sort((a,b)=>a-b);
    let left = 1;
    let right = times[times.length-1] * n;
    let answer = right;
    while(left <= right){
        let cnt = 0;
        let mid = Math.floor((left+right)/2);
        times.forEach(value => {
            cnt += Math.floor(mid / value); 
            if(cnt >= n) {
                answer = Math.min(mid, answer); 
                return;
            };
        });
        if(cnt >= n){
            right = mid-1;
        }else{
            left = mid+1;
        }
    }
    return answer;
}
