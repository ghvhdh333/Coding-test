function solution(s) {
    return [...s].filter(el => 
        [...s].filter(el2 => el === el2).length === 1
    ).sort().join('');
}
