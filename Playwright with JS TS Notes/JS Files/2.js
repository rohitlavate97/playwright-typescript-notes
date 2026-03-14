//Booleans
//true 
//false

let isLoggedIn = true

let isWaterWet = true

//Variables can change their types - Dynamic typing
let numDonuts = 12
numDonuts = false       //RHS -> LHS
numDonuts = "Hello"

//Strings
//Strings are pieces of text or groups of characters.
"Piyush"

//Consistent
let msg = 'Hello World!!'
let animal = `Tiger`

let badString = "Playwright"

//Garbage Collection(GC)
let firstName = "Ziggy"
let lastName = "Pretty"

//One time use string
let merged = firstName + lastName
console.log(firstName + lastName)   //A new string gets created in the memory

console.log("hi" + 1)

//+ operator
1 + 4       //Addition operator
"hi" + "abc" // Concatenation operator
"hi" + 1    //Automatic type conversion(coercion)

"true"

//Strings are indexed
//P I   Y   U   S   H
//0 1   2   3   4   5

//Intellisense
//Characteristics + Actions
console.log("piyush".length)
console.log("piyush"[0])
console.log("piyush"[5])

//Hard-coding
let firstName1 = "Piyush"
// console.log(firstName1[5])
// console.log(firstName1[firstName1.length - 1])

//Strings are immutable
firstName1[0] = "p"     //Ignored
console.log(firstName1)

//String methods
//string.someMethodName()

let msg1 = "Hey there"
let msg2 = msg1.toUpperCase()
// console.log(msg1.toUpperCase())

let greeting = '   Good Morning  '
greeting = greeting.trim()

//Method chaining
let color = "    purple     "

console.log(color.trim().toUpperCase())

//includes() and indexOf()

let tvShow = 'catdog'

//d is present or not?  Yes/No
//Where d is present?   

// console.log(tvShow.includes('d'))
// console.log(tvShow.includes('x'))

console.log(tvShow.indexOf('d'))
console.log(tvShow.indexOf('x'))        //-1

console.log("baseball".includes("ball"))
console.log("baseball".indexOf("ball"))

//slice() -

let str = "ThisIsASuperLongString"
console.log(str.slice(7))
console.log(str.slice(7, 12))

//replace(replaceWhat, replaceWith)
console.log("baseball is entertaining".replace("entertaining", "ok"))
console.log("ha ha ha".replace("ha", "hee"))

let text = "Hello World"
console.log(text.split(" "))

let fruits = 'apple,banana,orange'
console.log(fruits.split(","))

let name1 = "javascript"
console.log(name1.split(""))

//In short: Use split() when you want to break a string into pieces and work with them individually.

const age = "5" + "4"
console.log(age, typeof age)

5 + 4       //Addition
"5" + "4"   //concatenation
"5" + 4     //54. Automatic type conversion(coercion)

console.log("pecan pie"[7])

console.log("PUP"[3])   //undefined

let song = "london calling"
song.toUpperCase()
console.log(song)

//JS is case sensitive
let park = "Yellowstone"
const index = park.indexOf('Stone')
console.log(index)

let yell = 'GO AWAY!!'
console.log(yell.indexOf('!'))

//GARBAGE!  -> RBAGE!   -> RAGE!
console.log('GARBAGE!'.slice(2).replace("B", ""))
//How many strings will be memory   - 3

//String Escape characters
"piy\"ush"
'piy\'ush'

//Math utility object

// const PI = 3.1416

console.log(Math.PI)

console.log(Math.round(4.9))    //5
console.log(Math.abs(-356))

console.log(Math.pow(5, 2))
console.log(5 ** 2)

console.log(Math.floor(4.9))    //4

//Generation of random numbers/strings
//first.last@gmail.com
//first1.last@gmail.com

//Math.random() always generates a fractional number between 0 and 1.
//0.9999999

// 1 - 10
Math.floor(Math.random() * 10) + 1

//1 - 100
const random = Math.floor(Math.random() * 100) + 1

`first.last${random}@gmail.com`
console.log(`first.last${Date.now()}@gmail.com`)
