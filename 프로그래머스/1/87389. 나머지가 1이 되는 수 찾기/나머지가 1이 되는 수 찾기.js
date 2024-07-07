function solution(n) {
    // 방법 1
   // for (let i=1; i<n; i++){
   //      if (n%i === 1){
   //          return i
   //      }
   //  }
    
    // 방법 2
    let i = 1;
    while(true){
        if(n%i === 1){
            return i
        }
        i++
    }
}