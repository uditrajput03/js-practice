// Formate railway 24:00
let time = "13:00"
let hours = Number(time.split(':')[0])

if (hours>=0 && hours <12) {
    console.log("Good Morning");
}
else if (hours>=12 && hours <18){
    console.log("Good Afternoon");
}
else {
    console.log("Good Night");
}