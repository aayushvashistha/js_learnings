const prompt = require("prompt-sync")()
let a = Number.parseInt(prompt("Enter your age"))
// let c = confirm("Do you want to see the prompt again?")


const canDrive = (age) => {
    if (age>18){
        return alert("You can drive a car")
    }
else{
    return alert("No, you are not eligible to drive a car")
}
}

// c = confirm("Do you want to see the prompt again?")
// if (c == true){
    canDrive(a)
// }
