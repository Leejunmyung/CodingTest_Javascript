function solution(a){
    let n = a.toUpperCase()
    let sum1 = 0
    let sum2 = 0
    
    for(let i =0; i < n.length; i++){
        if(n[i] == "P"){
            sum1 += 1
        } else if(n[i] == "Y"){
            sum2 += 1
        }
    }
    return sum1 == sum2 ? true : false
}