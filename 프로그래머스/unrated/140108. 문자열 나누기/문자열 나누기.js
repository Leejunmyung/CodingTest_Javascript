function solution(s) {
    let firstString = 0;
    let anyString = 0;
    let num = 0;
    let division = 0;
    let string = s.split('');
    string.map((s, i, arr) => {
        if(arr[i] === arr[num]) {
            firstString ++
        } else {
            anyString ++
        }
        
        if(firstString === anyString){
            division ++
            num = (firstString * 2)
        }else if(i === string.length -1){
            division ++
        }
    })
    return division
}