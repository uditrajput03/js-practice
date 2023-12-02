function outer(){
    console.log("I am outer function");
    return (() => ("Inner is called"))(); // Immediately Invoked Function Expressions (IIFE)
}
console.log(outer());