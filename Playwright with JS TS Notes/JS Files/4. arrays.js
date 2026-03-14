
let person1 = "Bhaskar"
let person2 = "Deepak"
let person3 = "Mahavir"

//Arrays - Relationship + Ordering

let shoppingList = ['bread', 'jam', 'milk']

console.log(shoppingList)

console.log(shoppingList.length)

console.log(shoppingList[3])    //undefined
console.log(shoppingList[2])    //milk

console.log(shoppingList[shoppingList.length - 1])

//Strings are immutable
//Arrays are mutable
shoppingList[0] = "chips"
console.log(shoppingList)

shoppingList[3] = "Honey"

let shoppingList1 = ['bread', 'jam', 'milk']

//push() - Adding one or more elements to the end/RHS of the array.
//pop() - Removes exactly one element from the end/RHS of the array.

//Performance wise, below 2 methods are not good
//Big O. 
//unshift() - Adding one or more elements to the beginning/LHS of the array.
//shift() - Removes exactly one element from the beginning/LHS of the array.

shoppingList1.push("coffee", "buiscuits")
shoppingList1.push('cream')
shoppingList1.pop()
shoppingList1.pop()
shoppingList1.shift()
shoppingList1.unshift("ketchup")
console.log(shoppingList1)      //[ 'ketchup', 'jam', 'milk', 'coffee' ]

shoppingList1.unshift("ginger")

//Some more array methods

//concat() - Merging two or more arrays and create a new array
//includes() - Same like string includes()
//indexOf() - Same like string indexOf()
//join() - Joins all the array elements and make one string
//reverse() - Reverses an array
//slice() - Creates copy of an array
//splice() - Adding/Removing/modifying something from the middle.
//sort() - Sorting arrays

//concat() - Merging two or more arrays and create a new array

let fruits = ['mango', 'orange']
let veggies = ['tomato', 'potato']

console.log(fruits.concat(veggies))
console.log(veggies.concat(fruits, ['plum', 'guava']))

let array1 = [1, 2, 3]
console.log(array1.includes(2))

let pets = ["cat", "dog", "bat"]
console.log(pets.includes("cat"))   //true
console.log(pets.includes("at"))    //false

fruits.indexOf("xyz")

//reverse() - 
let array2 = ['one', 'two', 'three']
console.log(array2.reverse())

//join() - Opposite of split(). 
let elements = ['Fire', 'Air', 'Water']
console.log(elements.join())
console.log(elements.join(''))
console.log(elements.join('.'))

//slice() - 
let animals = ['ant', 'bison', 'camel', 'duck', 'bison']
animals.slice()

console.log(animals.slice(2))       //[ 'camel', 'duck', 'bison' ]
console.log(animals.slice(2, 4)) 

//splice() - 
let animals1 = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise']
//splice(startingIndex, deleteCount, itemsToInsert)

//Req-1 - At index 1, delete 0 items and insert "octopus"
animals1.splice(1, 0, "octopus")
// console.log(animals1)

//['shark', 'octopus', 'salmon', 'whale', 'bear', 'lizard', 'tortoise']

//Req - 2 - At index 5, delete 2 items
animals1.splice(5, 2)
// console.log(animals1)

//['shark', 'octopus', 'salmon', 'whale', 'bear']

//Req3 - At index 3, delete 2 items and replace them with "orca" and "grizzly"

animals1.splice(3, 2, "orca", "grizzly")
console.log(animals1)

//sort()
let months = ['March', 'Jan', 'Feb', "Dec"]
months.sort()
console.log(months)

//JS converts all the numbers to strings and then it sorts.
let array3 = [1, 30, 4, 21, 10000]
array3.sort()
console.log(array3)

//Introduction to Reference types
//Pointers

let fruit = "orange"
let color = fruit       //RHS -> LHS

console.log(color === fruit)        //true

fruit = "watermelon"
console.log(color === fruit)        //false

let array11 = [1, 2, 3]
// let array22 = [1, 2, 3]

//Make a second pointer to the same array
 let array22 = array11

console.log(array11 === array22)    //We are comparing memory address.


array11.push(4)
console.log(array22)

//Assignment operator
// let x = 10 + 5

// let y = 10
// y = y + 10

// y += 10


let x, y
x = y = 25 - 10 - 5     //subtraction will happen from left to right.
x = 10

//Explicit Type conversion/casting
let num = "123"
console.log(typeof Number(num))

let n = 456
console.log(typeof String(n))

//Automatic type conversion/Coercion
console.log("5" + 2)        //console.log("5" + String(2))

console.log("5" - 2)        //console.log(Number(5) - 2)

console.log('I am ' + String(25) + ' years old')

console.log('23' - '10' - 3)        //10. Left -> Right
console.log('23' + '10' + 3)        //"2310"    -> "23103"