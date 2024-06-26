function solution(num, k) {
    const result = String(num).indexOf(k)
    return result===-1 ? result : result +1
}