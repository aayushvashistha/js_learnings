const prompt = require("prompt-sync")()

function fun()
{
    let num = 8
    num = Number.parseInt(num)
    if (num%2 == 0 || num%3 ==0){
    console.log("Number is divisible by either 2 or 3");
    }
    else {
    console.log("Number is not divisible by 2 and 3");
    } 
}
fun()
let i = 3;

do{
    console.log(i);
    i++;
} while(i<6)

const myFunc = () => {
 const marks = {
    harry: 98,
    rohan: 70,
    aakash: 7
 }
 //using for loop
 for (let i=0; i<Object.keys(marks).length; i++){
    console.log(Object.values(marks)[i]);
 }
//using for in loop
 //  for (let i in marks ){
//     console.log("Marks of " + i + " is " + obj[i]);
//  }

}
myFunc()

const myFunc1 = () => {
    let i = prompt("Enter number")
    while(i!=5){
        console.log("Try again");
        i = prompt("Enter number")
    }
}
// myFunc1() 

let arr = []
let str = "Ash is a good boy"
let str1 = "Ash good is is girl"

console.log(str.length);

console.log(str.toUpperCase());

console.log(str.toLowerCase());

console.log(str.slice(2));

console.log(str.slice(2, 3));

console.log(str1.trim());

word = str.split(' ');
to_match = str1.split(' ');

var c = 1

for (let i=0; i<word.length; i++){
    for (let j=0; j<to_match.length; j++){
        if (word[i] === to_match[j]){
            
            obj = {
                count: c,
                text: word[i]
            }
            // console.log(arr);
            // for(let k of obj)
            if (!(word.includes(arr[i]))){
                arr.push(obj)
            }
            else{
                c =+ 1 
            }
    }
    }
}
console.log(typeof(arr));
for (let k of arr){
    console.log(k);
    }
// for (let i=0; i<arr.length; i++){
//     console.log(arr[i], arr.length[i]);
// }
// console.log(arr.includes("is"));
// console.log(arr);