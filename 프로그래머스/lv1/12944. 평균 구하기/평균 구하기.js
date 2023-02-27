function solution(num) {
    return num.reduce((acc,curr) => acc + curr) / num.length
}