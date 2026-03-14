//Typescript -> JS + additional stricter features

let firstName = "Piyush"
console.log(firstName)

//int number = 34
let pi: number = 3.14159

console.log("hello")
console.log(Math.round(7.3))

//Type annotation basics
//let/const myVar: type = someValue

//Strings
let myString: string = "Hello!!"

//Cant reassign to other data type
// myString = 100

myString = "I love Playwright"

let myNumber: number = 50

//Cant reassign to other data 
// myNumber = "100"

//Type Inference
let x = 27
x = "twenty seven"

//The Any type
let myComplicatedData: any = "This is my data"

myComplicatedData = 100
myComplicatedData = true

//Delayed Initialization and Implicit Any
let count: number = 5

let name1: string

name1 = "Piyush"
console.log(name1)

//Implicit Any

let data        //No type checking
data = 5
data = "Janaki"
data = true

function greet(){
    console.log("Hello!! Welcome to TS")
}

greet()

//Function with parameters
function greetUser(name: string){
    console.log("hello" + name)
}

greetUser("Piyush")
greetUser("")

//Function with return values
function add(a: number, b: number): number{
    return a + b
}

console.log(add(4, 5))

//Default Parameters
function greetUserDefault(name: string = "Guest"){
    console.log("Hello " + name)
}

greetUserDefault()
greetUserDefault("Piyush")

//Optional Parameters
function printMessage(msg?: string): void{
    if(msg){
        console.log("Message", msg)
    } else {
        console.log("No msg provided")
    }
}

printMessage("Hello")
printMessage()


//Void type

//Objects
const printName = (name: {first: string, last: string}) => {
    return `Name: ${name.first} ${name.last}`
}

console.log(printName({first: "Piyush", last: "Gupta"}))

//The type alias

// function printName1(name: {first: string, last: string}){
//     console.log(`${name.first} ${name.last}`)
// }

// function greetPerson(person: {first: string, last: string}){
//     console.log(`${person.first} ${person.last}`)
// }

//A Type Alias is just a way to give a name to a type so we can reuse it.

type Name = {
    first: string,
    last?: string
}

let obj = {
    first: 'Hello',
    last: 'World'
}

//TS -> JS + Additional features




type ID = string | number

function printName1(name: Name){
    console.log(`${name.first} ${name.last}`)
}

function greetPerson(person: Name){
    console.log(`${person.first} ${person.last}`)
}

let userID: ID

/*
Type Alias = Nickname for a type.
Use it to avoid repeating the same type again and again.
It makes code cleaner and easier to maintain.
*/


//readonly modifier
type User = {
    readonly id: number,
    username: string
}

const user: User = {
    id: 12837,
    username: "cow"
}

console.log(user.id)

user.id = 100

//Array types
let names: string[] = ["hello", "hello"]
let ages: number[] = [10, 20, 30, 40]

//Alternate
let names1: Array<string> = ["hello", "hello"]
let ages1: Array<number> = [10, 20, 30, 40]

names1.push("dasdsad")