// Exercise: Guess the number

const prompt = require("prompt-sync")()

let x = Number.parseInt(Math.floor((Math.random()*100)+1));
// console.log(x)

let y = Number.parseInt(prompt("Guess the number from 1 to 100: "))
let score = 100

while (x != y){
    score--;
    if(y>x){
        y = prompt(`Your number ${y} is greater, please guess again: `);
    }
    else if(y<x){
        y = prompt(`Your number ${y} is smaller, please guess again: `);
    }
}

console.log(`You have guessed ${x} which is the correct number. Congrats!!`)
console.log("Your score is", score);

// Repl link --> https://replit.com/@AayushVashistha/Guess-the-number