
//Function definition
//Function Declaration
function grumpus(){
    console.log("This is line1")
    console.log("This is line2")
    console.log("This is line3")
}

//Function calling
grumpus()

//Arguments/Parameters

function greet(nickName){
    console.log("Hi")
    console.log(nickName)
}

greet()
greet("Piyush")

//Function with multiple args


function multiply(x, y){
    console.log(x * y)
}

// multiply(3, 4)
multiply(3, "PW")

//The Return statement
//return

function square(num){
    // console.log(num * num)
    return num * num
    console.log("Hello")
    return "Hello"
}

const result = square(4)
console.log(result)

function isPurple(color){
    // if(color === 'purple'){
    //     return true
    // } else {
    //     return false
    // }
}

// console.log(isPurple("red"))
console.log(isPurple("purple"))