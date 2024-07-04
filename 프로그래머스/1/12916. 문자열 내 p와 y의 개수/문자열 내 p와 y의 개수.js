function solution(s){
    const pNum = [...s.toLowerCase()].filter(el => el === 'p').length
    const yNum = [...s.toLowerCase()].filter(el => el === 'y').length
    return pNum === yNum ? true : false
}