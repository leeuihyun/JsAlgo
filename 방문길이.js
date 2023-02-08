function solution(dirs) {
    const move = {U:[0,1], D:[0,-1],R:[1,0],L:[-1,0]};
    
    let set = new Set();
    let start = [0,0];
    
    for(let i=0;i<dirs.length;i++){
        let nx = start[0] + move[dirs[i]][0];
        let ny = start[1] + move[dirs[i]][1];
        
        if(nx < -5 || nx > 5 || ny < -5 || ny >5)continue;
        set.add(''+start[0]+start[1]+nx+ny);
        set.add(''+nx+ny+start[0]+start[1]);
        start = [nx,ny];
    }
    
    return set.size/2;
}
