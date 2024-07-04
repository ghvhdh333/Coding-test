function solution(a, b) {
    const nums = [];
    if(a <= b){
        for(let i = a; i <= b; i++){
           nums.push(i)
        }    
    }
    else {
        for(let i = b; i <= a; i++){
            nums.push(i)
        }
    }
    return nums.reduce((acc,cur) => acc + cur)
}