
//Function Scope

function helpMe(){
    //msg is scoped to helpMe() function
    let msg = "Hey There!!"     //Local variable
    console.log(msg)

    function inner(){
        console.log("Hello")
    }

    inner()
}

inner()

helpMe()
console.log(msg)

function lol(){
    let person = 'Tom'
    const age = 35
    var color = 'cyan'
}

lol()
console.log(person)
console.log(age)
console.log(color)

function changeColor(){
    let person = 'Mary'
    const age = 26
    var color = 'blue'
}

lol()
changeColor()


var hi = "hi"
var hi = 5

const bird = "mandarin duck"

function birdWatch(){
    // const bird = 'golden pheasant'
    console.log(bird)
}

birdWatch()
console.log(bird)

//Block Scope

let radius = 8

if(radius > 0){
    const PI = 3.14
    let circ = 2 * PI * radius
}

console.log(radius)
console.log(PI)
console.log(circ)

//1. There is no block of the var keyword
//2. Redeclaration is allowed in var variable.
//3. var variables are hoisted. let and const are not.
if(true){
    var animal = 'eel'
    console.log(animal)
}

//for, while, for..of, for..in

console.log(animal)

//Function expression - Function expression is another way of defining a function.
// function square(num){
//     return num * num
// }

//Anonymous function
const square = function (num){
    return num * num
}

console.log(square(6))

function add(x, y){
    return x + y
}

const sum = function (x, y){
    return x + y
}

//settimeout() - Asynchronous function
//setTimeout() function - Built-in function. It will run a certain block of
//code after a certain number of milliseconds. 5000 milliseconds is 5 seconds. 

//setTimeout(callbackFn, timer)

//So passing one function to another function is a callback function.

//Hoisting(Code shuffling)

console.log(animal)
const animal = 'Tapir'
console.log(animal)

/*
var animal
console.log(animal)
animal = 'Tapir'
*/

howl()
function howl(){
    console.log("HIIIIIIIIII")
}

/*
function howl(){
    console.log("HIIIIIIIIII")
}
howl()
*/

