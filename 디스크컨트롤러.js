function solution(jobs) {
    jobs.sort((a,b)=>a[0]-b[0]);
    let time = 0,answer = 0,i=0;
    let pq = [];
    while(pq.length > 0 || jobs.length > i){
        if(jobs.length > i && jobs[i][0] <= time){
            pq.unshift(jobs[i++]);
            pq.sort((a,b)=>a[1]-b[1]);
            continue;
        }
        if(pq.length !== 0){
            const [start,end] = pq.shift();
            time += end;
            answer += time - start;
        }else{
            time = jobs[i][0];
        }
    }
    return parseInt(answer/jobs.length);
}
