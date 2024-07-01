function solution(my_string, indices) {
    const arr = [...my_string];
    indices.map(el => arr[el] = '')
    return arr.join('')
}