let leo = new Promise((resolve, reject) => {
    let errorVal = 1
    setTimeout(() => {
        if (errorVal == 1) {
            console.log("Udit")
            console.log(typeof resolve);
            resolve();
        }
        else {
            console.log("Error Occured in timeout")
            reject();
        }
    }, 2000);
})
// leo.then(() => {
//     console.log("Resolve Executed");

// }).catch(() => (console.log("reject executed"))).finally(() => console.log("Promises Completed"))

waitfor = (async () => {
    await leo;
    // console.log(wFor);
    console.log("I am Out");
})
waitfor();
