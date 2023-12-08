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

for (let i = 1; i < 6; i++) {
    let str = ""
    for (let j = 1; j <= i; j++) {
        str += j
    }
    console.log(str);
}

// Question-5

// WAP to print this

//     A
//    BBB
//   CCCCC
//  DDDDDDD
// EEEEEEEEE

let strL = 26
for (let i = 0; i < strL; i++) {
    let spc = ""
    for (let j = (strL-2)-i; j >= 0; j--) {
        spc += " ";
    }
    for (let k = 0; k < 2*i+1; k++) {
        spc += String.fromCharCode(65+i)
    }
    console.log(spc);
}