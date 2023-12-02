// Question-1: WAP that logs numbers from 1 to 10 to the console.

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Question-2: WAP that log all even numbers from 2 to 20.

// Question-3: WAP that counts backward from 10 to 1 and logs the values.

// Question-4: WAP to calculate the sum of numbers from 1 to 5.

// Question-5: WAP that prints powers of 2 (2^n) up to 64.

// let m = 1;

// while (m <= 64) {
//     console.log(m);
//     m *= 2;
// }

// Question-6:  WAP to Develop a do-while loop for a simple number guessing game. Ask the user to guess a number between 1 and 10, and keep prompting until they guess correctly.

let randomNumber = Math.floor(Math.random() * 10) + 1;

let guess;

do {
    guess = prompt("Guess a number between 1 and 10");
}
while (guess != randomNumber);

alert("You guessed it!");

// Question-7: WAP to display the multiplication table (1 to 10) in the console.

for (let i = 1; i < 11; i++) {
    console.log("\nTable of",i,"\n");
    for (let j = 0; j < 11; j++) {
        console.log(`${i} x ${j} = ${i*j}`);
    }
}

// Question-8: WAP that use the break statement to exit the loop when the counter reaches 5. Also, use continue to skip printing the value 3 ( Note : Loop Starts from 0).

// Question-9: WAP that logs numbers from 1 to 30. For multiples of 3, log "Fizz" instead of the number, and for multiples of 5, log "Buzz." For numbers which are multiples of both 3 and 5, log "FizzBuzz."



// Question-10: WAP to identify and log prime numbers within a given range.
