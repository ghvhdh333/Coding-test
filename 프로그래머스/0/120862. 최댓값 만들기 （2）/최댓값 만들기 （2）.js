function solution(numbers) {
    const sortedArr = numbers.sort((a,b) => (a - b)) 
    const a = sortedArr[0]
    const b = sortedArr[1]
    const c = sortedArr[sortedArr.length-2]
    const d = sortedArr[sortedArr.length-1]
    
    return a * b > c * d ? a * b : c * d
}