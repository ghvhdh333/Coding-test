function solution(arr, flag) {
    let x = [];
    for(let i = 0; i < arr.length; i++){
        // true --> arr[i]를 arr[i]*2회 추가
        if(flag[i]){
            const str = arr[i].toString().repeat(arr[i]*2)
            x = x.concat([...str])
        } 
        // false --> 뒤에서 부터 arr[i] 갯수만큼 제거
        else {
            x = x.slice(0, -arr[i])
        }
    }
    return x.map(el => Number(el))
}