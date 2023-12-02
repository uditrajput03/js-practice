// Pattern Printing Problems


// Question-1: 

// WAP to print this

// *
// **
// ***
// ****
// *****    


for (let i = 0; i < 5; i++) {
    let str = ""
    for (let j = 0; j <= i; j++) {
        str += "*"
    }
    console.log(str);
}


// Question-2: 

// WAP to print this 

//    *
//   ***
//  *****
// *******

let strN = 30
for (let i = 0; i < strN; i++) {
    let spc = ""
    for (let j = (strN-2)-i; j >= 0; j--) {
        spc += " ";
    }
    for (let k = 0; k < 2*i+1; k++) {
        spc += "*"
    }
    console.log(spc);
}

// Question-3:

// WAP to print this

// *****
// *   *
// *   *
// *****



// Question-4:

// WAP to print this

// 1
// 12
// 123
// 1234
// 12345


// Question-5

// WAP to print this

//     A
//    BBB
//   CCCCC
//  DDDDDDD
// EEEEEEEEE
