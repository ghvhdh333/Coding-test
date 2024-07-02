function solution(my_string, s, e) {
    const start = my_string.slice(0, s)
    const mid = my_string.slice(s, e+1)
    const end = my_string.slice(e+1)
    return start + [...mid].reverse().join('') + end
}