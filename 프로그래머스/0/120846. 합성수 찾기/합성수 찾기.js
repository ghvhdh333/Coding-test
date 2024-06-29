function solution(n) {
    const 합성수 = [];
    for(let i = 1; i <= n; i++){
        const 약수 = [];
        for(let j = 1; j <= i; j++){
            if(i % j === 0){
                약수.push(j)
            }
        }
        if(약수.length >= 3) {
            합성수.push(i)
        }
    }
    return 합성수.length
}