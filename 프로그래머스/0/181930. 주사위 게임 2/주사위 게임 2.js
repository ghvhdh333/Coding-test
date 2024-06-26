function solution(a, b, c) {
    const same = a === b && a === c
    const diff = a !== b && a !== c && b !== c
    const mid = (a === b && a !== c) || (a === c && a !== b) || (b === c && a !== b)
    if(same){
        return (a + b + c) * (a**2 + b**2 + c**2 ) * (a**3 + b**3 + c**3 )
    } else if (diff) {
        return a + b + c
    } else if (mid){
        return (a + b + c) * (a**2 + b**2 + c**2)
    }
}