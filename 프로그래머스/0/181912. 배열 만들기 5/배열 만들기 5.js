function solution(intStrs, k, s, l) {
    const arr = [];
    intStrs.map(el => {
        const cutStr = el.slice(s,s+l)
        if(cutStr > k){
            arr.push(Number(cutStr))
        }
    })
    return arr
}