function solution(n) {
    // 순서쌍의 갯수 구하기 = 약수의 갯수!!
    let arr = [];
    for(let i = 1; i <= n; i++){
        if(n % i === 0) {
            arr.push(i)
        }
    }
    return arr.length
}