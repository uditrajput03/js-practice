const factorial = (num) => {
    if (num === 1) return 1;
    fact = num * factorial(num-1);
    return fact;
}
console.log(factorial(10));