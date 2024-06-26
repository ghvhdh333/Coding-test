function solution(numbers, direction) {    
    // 왼쪽으로 이동이면 맨왼쪽 삭제, 맨오른쪽 추가
    if(direction === 'left'){
        // 원본배열 변경하고, 삭제된 숫자 가져옴
        const deleteNum = numbers.shift()   
        numbers.push(deleteNum)
        return numbers
    } 
    // 오른쪽으로 이동이면 맨오른쪽 삭제, 맨 왼쪽 추가
    else {
        // 원본배열 변경하고, 삭제된 숫자 가져옴
        const deleteNum = numbers.pop()
        numbers.unshift(deleteNum)
        return numbers
    }
}