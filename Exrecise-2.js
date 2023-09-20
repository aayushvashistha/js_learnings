// Game of Snake, Water and Gun where Gun kills Snake, Snake drinks water and Water sinks Gun (Just like Rock, paper, scissor)

let myArray = ["S", "W", "G"]

let i = 5
let score = 5

while(i>0){
    let randomItem = myArray[Math.floor(Math.random()*myArray.length)];
    let input = prompt("Enter S, W or G")
    input = input.toUpperCase()

    console.log("Random alphabet " + randomItem + ", Your input " + input);

    if (randomItem == input){
        alert("The game is tied, Please play again")
    }
    else if (randomItem == "S" && input == "W"){
        alert("You loose 1 point")
        score--
    }
    else if (randomItem == "G" && input == "S"){
        alert("You loose 1 point")
        score--
    }
    else if (randomItem == "W" && input == "G"){
        alert("You loose 1 point")
        score--
    }else{
        alert("Please enter valid input, you loose 1 point")
        score--
    }i--
}
console.log("Your final score is: ", score);