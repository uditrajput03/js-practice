// *** If you know Array and async JS , attempt these Problems *** 

// Question-1:  Write a function that takes an array and a callback function. Apply the callback function to each element of the array and return a new array with the modified elements.

let addTen = (arry) => {
    return arry.map((value) => (value + 10));
}
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(addTen(array));

// Question-2:  Write a function that takes an array of numbers and returns a new array containing only the odd numbers.
let filter = (array) => array.filter((value) => (value%2!==0));
console.log(filter(array));

// Question-3:  Write a function that takes an array of numbers and returns a new array where each element is doubled.

let double = (arry) => {
    return arry.map((value) => (value*2));
}
console.log("Doubled" ,double(array));

// Question-4:  Write a function that takes an array of strings and returns a new array where each string is transformed to uppercase.

let name = Array.from("udit");
let upper = (name) => name.map((value) => value.toUpperCase());

console.log(upper(name));

// Question-5:  Write a function that uses setTimeout to simulate an asynchronous operation. The function should print a message to the console after a specified delay.



// Question-6:  WAP to perform read and write operation in a text file in JS.