function solution(n) {
    let min_num = [];
    let max_num = [];
    for(let i=0; i<n.length; i++){
        n[i].sort()
    }
    for(let i=0; i<n.length; i++){
        min_num.push(Math.min.apply(null,n[i]))
        max_num.push(Math.max.apply(null,n[i]))
    }
    return Math.max.apply(null,max_num) * Math.max.apply(null,min_num)
}