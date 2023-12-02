let isPrime = (num) => {
    if(num ===1 || num ===0) return true; //Exception
    index = 2;
    while(index !== num){
        if(num%index === 0){
            return false;
        }
        index++;
    }
    return true;
}
console.log(isPrime(0));