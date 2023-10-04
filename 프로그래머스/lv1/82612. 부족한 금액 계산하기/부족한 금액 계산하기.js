function solution(a, b, c) {
    let sum = 0;
    for (let i =1; i <= c; i++){
        sum += a*i
    }
    if (b > sum){
        return 0
    } else{
        return sum - b
    } 
}