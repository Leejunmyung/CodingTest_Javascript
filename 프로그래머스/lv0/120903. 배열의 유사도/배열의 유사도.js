function solution(s1, s2) {
    let sameNum = 0;
    s1.map((a) => {
        if(s2.includes(a)){
            sameNum += 1
        }
    })
    return sameNum
}