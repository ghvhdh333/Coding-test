function solution(binomial) {
    const [firstNum, sign, secondNum] = binomial.split(' ')
    if(sign === '+') return Number(firstNum) + Number(secondNum)
    else if(sign === '-') return Number(firstNum) - Number(secondNum)
    else if(sign === '*') return Number(firstNum) * Number(secondNum)
}