function solution(n) {
    const nSqrt = Math.sqrt(n)
    if(Math.floor(nSqrt) ** 2 === n) {
        return (nSqrt+1)**2
    } else {
        return -1
    }
}