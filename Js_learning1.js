const prompt = require("prompt-sync")()

let arr = [1, 2, 3, 5, 3, 8, 1, 7]

// let n = [1, 2, 3, 4, 5]
// let add_num = prompt("Enter numbers to add in an array: ")
// add_num = Number.parseInt(add_num)

// let add_num = prompt("Enter number to to get a factorial: ")
// add_num = Number.parseInt(add_num)

const factorial = ((num)=> {
    // return x * fact(x-1)
    if (num<0){
        return ("number cannot be -ve");
    }
    if (num<=1){
        return 1
    }
    return num * factorial(num - 1);
})
console.log(factorial(5))

// while(add_num!=0) {
//     add_num = prompt("Enter another number to add in an array: ")
//     add_num = Number.parseInt(add_num)
// // let newarr = arr.reduce((h1) => {
// //     return h1
// // })

// // console.log(newarr);

// // arr.push(add_num)

//     arr.unshift(add_num)
// }

let filter_arr = arr.filter((byTen)=> {
    return (byTen%10 == 0)
})

let square = arr.map((a)=> {
    return a*a
})

// console.log(fact);