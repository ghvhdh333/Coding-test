function solution(n) {
    const numList = [];
    for(let i = 1; i <= n; i++){
        if(n % i === 0){
            numList.push(i)
        }
    }
    return numList.reduce((acc,cur) => acc + cur, 0)
}