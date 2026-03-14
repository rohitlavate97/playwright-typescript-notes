
//Loops
//Doing something repeatedly
//for, while, for..of loop, for..in loop
//forEach() - only for Arrays

//For loop
//for(initialExpression; condition; increment/decrement Expression)

console.log("Hello World")
console.log("Hello World")
console.log("Hello World")
console.log("Hello World")
console.log("Hello World")

//4 pieces

//i = 0, 2

//i -> Loop counter variable
//Every loop execution is called as an iteration
for(let i = 0; i < 5; i = i + 1){       //i = i + 1     => i++, i += 1
    console.log("Hello World")
}

//"Hello World"
//"Hello World"
//"Hello World"
//"Hello World"
//"Hello World"

//Infinite loop
for(let i = 20; i > 0; i++){   
    console.log("Hello World", i)
}

//For loops & arrays
//--------->increment expression
//<--------- decrement expression

//for(initialExpression; condition; increment/decrement Expression)
const animals = ['lion', 'tiger', 'bear']

for(let i = 0; i < animals.length; i++){
    console.log(animals[i])
}

let students = [
    {
        firstName: 'Artemis',
        grade: 97
    },
    {
        firstName: 'Hera',
        grade: 95
    },
    {
        firstName: 'Apollo',
        grade: 85
    },
]

for(let i = 0; i < students.length; i++){
    console.log(`${students[i].firstName} scored ${students[i].grade}`)
}

for(let i = 0; i < students.length; i++){
    const student = students[i]
    console.log(`${student.firstName} scored ${student.grade}`)
}

//<-------- decrement
const word = 'stressed'
//desserts

/*
THINKING process
decrementing loop
for()
Starting index i = word.length - 1
some form of concatenation

*/

let reverse = ''

//"" + d -> "d"
//"d" + "e" -> "de"
//"de" + "s"

for(let i = word.length - 1; i >= 0;i--){
    reverse = reverse + word[i]
    // console.log(word[i])
}

console.log(reverse)

const word1 = 'stressed'

//"stressed" -> ['s', 't', 'r','e', 's', 's','e', 'd']
console.log(word1.split("").reverse().join(""))
//reverse()

//while loop
//for(initialExpression; condition; increment/decrement Expression)
for(var i = 0; i < 5; i = i + 1){
    console.log("Hello World")
}

console.log(i)

/*
initialExpression
while(condition){
    increment/decrement Expression
}

*/

let i = 0
while(i < 5){
    console.log("Hello World")
    i = i + 1
}

//for loop - when you know in advance how many times you want to repeat.
//while loop - when you dont know in advance how many times you want to repeat.

//target(Fixed) - 7
//guess     - 4 , 1, 3, 8, 1, 7

//0 - 1
let target = Math.floor(Math.random() * 10)
let guess = Math.floor(Math.random() * 10)

// while(guess !== target){
//     console.log(`Target: ${target}, Guess: ${guess}`)
//     guess = Math.floor(Math.random() * 10)
// }

while(true){
    if(target === guess)    break
    console.log(`Target: ${target}, Guess: ${guess}`)
    guess = Math.floor(Math.random() * 10)
}

console.log('YAAAAy. You won!!!')
console.log(`Target: ${target}, Guess: ${guess}`)

//For..of - For each loop of Java. Modern JS
//Iterable

const animals1 = ['lion', 'tiger', 'bear']

// for(let i = 0; i < animals1.length; i++){
//     console.log(animals1[i])
// }

//Auto-incementing
//Auto starts from left side all the way till the end.
//You can not run it from right to left. You can not skip index here.
for(const animal of animals1){
    console.log(animal)
}

for(let char of 'piyush'){
    console.log(char)
}

const palette = {
    red     : '#red',
    yellow  : '#yellow',
    blue    : '#blue'
}

//TypeError: palette is not iterable
//You can not use for..of loop with objects
// for(let x of palette){
//     console.log(x)
// }

for(let x in palette){
    console.log(x, palette[x])
}