function solution(myString) {
    return myString.split('').map(el => {
        if(el === 'a' || el === 'A'){
            return el.toUpperCase()
        } else return el.toLowerCase()
    }).join('')
}