function solution(s) {
    const nums = s.split(' ').map((s) => {
        return Number(s)
    });
    return String(Math.min(...nums)) + ' ' + String(Math.max(...nums))
    
}