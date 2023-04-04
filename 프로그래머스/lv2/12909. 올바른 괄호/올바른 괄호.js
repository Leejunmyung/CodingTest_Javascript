function solution(s) {
    let rightBracket = [];
    for(let i=0; i < s.length; i++) {
        if(s[i] === '('){
            rightBracket.push(s[i])
        } else if (s[i] === ')'){
            if(rightBracket.length === 0){
                return false
            }
            rightBracket.pop()
        }
    }
    if(rightBracket.length !== 0){
        return false
    } else {
        return true
    }
    
}