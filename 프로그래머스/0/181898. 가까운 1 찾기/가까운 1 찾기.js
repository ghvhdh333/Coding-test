function solution(arr, idx) {
    return arr.findIndex((el, index) => idx <= index && el === 1);
}


