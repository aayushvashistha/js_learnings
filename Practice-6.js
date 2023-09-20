const prompt = require("prompt-sync")()
let runAgain = true

// Answer 1,2 & 3 -->
while(runAgain == true){
    let age = Number.parseInt(prompt("Enter your age"))
    const canDrive = (a) => {
        if (a>=18){
            return alert("you can drive")
        }
        else if(a<0){
            return console.error("Age entered is not valid. Please enter correct age.")
        }
        else{
            return alert("you cannot drive")
        }
    }
canDrive(age)
runAgain = confirm("Do you want to run again?")
}

//  Answer 4 -->

// let a = Number.parseInt(prompt("Enter your age"))
// if (a>4){
//     location.href = ("https://google.com");
// }

//  Answer 5 -->

// let color = prompt("Enter a colour you want to fill background with")
// document.body.style.backgroundColor = color;