function solution(str1, str2) {
    let i = 0;
    let j = 0;
    let result = ''
    while(i < str1.length && j < str2.length){
        result += str1[i];
        result += str2[j];
        i++;
        j++;
    }
    return result
}