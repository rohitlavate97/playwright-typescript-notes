//Apply functions to collections of data

//forEach()
//map()
//filter()
//sort()
//reduce()

//1. forEach() - Method that runs like a loop
//Accepts a callback function. Calls the callback once per element in the array
//We dont need return keyword
//n refers to each element of the array

const nums = [9,8,7,6,5,4,3,2,1];

//for, while, for..of, forEach()

//Anonymous callback function
//Functions -> reusable function
// nums.forEach(function (num){
//     console.log(num)
// })

//We can even use an arrow function. Instead of function keyword, we will use
//=> but function was on the left while => will be on the right.

nums.forEach((num) => {
    console.log(num)
})

//For single parameter, parentheses are optional
nums.forEach(num => {
    console.log(num)
})

const books = [
   {
       title: 'Five Point Someone',
       author: 'Chetan Bhagat',
       rating: 4.2
   },
   {
       title: 'Time Money Freedom',
       author: 'Ray Milton',
       rating: 4.5
   },
   {
       title: 'You Are SuperNatural',
       author: 'Joe Dispenza',
       rating: 4.6
   },
]

books.forEach((book, index) => {
    console.log(book.author, index)
})

//2. map()
//It is used to create a new array of same length from an existing array by applying some logic
//on each element of the array. It does not alter/update the original array. Use
//the return keyword inside the callback.

const texts = ["rofl", "lol", "omg", "ttyl"]

// const upper = []
// texts.forEach(str => {
//     upper.push(str.toUpperCase())
// })

// console.log(upper)


//'ROFL' -> ['R', 'O', 'F', 'L']
const upper = texts.map(str => {
    str.toUpperCase().split("").join(".")
})
console.log(upper)      //[ 'ROFL', 'LOL', 'OMG', 'TTYL' ]

//join('.')

//[ 'R.O.F.L', 'L.O.L', 'O.M.G', 'T.T.Y.L' ]

const square = x => {
    return x * x
}

//Implicit return - In scenarios where we want to return just one expression as
//shown above, we can rewrite this arrow function using parentheses instead of
//curly braces. There we have to omit the return keyword. We can't use a return
//statement or we will get an error. We cant use semicolon also after x*x


//In simple terms, Implicit return is automatic return

//There should be exactly 1 line of code inside the callback
const square1 = x => x * x

console.log(square1(4))

const num1 = [1,2,3,4,5,6,7,8]
//['Odd', 'Even', 'Odd', 'Even', 'Odd', 'Even', 'Odd', 'Even']

// const parity = num1.map(function (n) {
//     if(n % 2 === 0) return 'Even'
//     return 'Odd'
// })

const parity = num1.map(n => n % 2 === 0 ? 'Even' : 'Odd')

console.log(parity)

//3. filter()
//Accepts a callback function. Creates a new array with all elements that pass
//the test provided by the implementation function/condition. Use the return
//keyword inside the callback.

const num2 = [1,2,3,4,5,6,7,8]
// const evens = num2.filter(num => {
//     return num % 2 === 0
// })
const evens = num2.filter(num => num % 2 === 0)

console.log(evens)      //[ 2, 4, 6, 8 ]
console.log(num2)

const books1 = [
    {
        title: 'Five Point Someone',
        author: 'Chetan Bhagat',
        rating: 4.2
    },
    {
        title: 'Time Money Freedom',
        author: 'Ray Milton',
        rating: 4.5
    },
    {
        title: 'You Are SuperNatural',
        author: 'Joe Dispenza',
        rating: 4.6
    },
]

// console.log(books1.filter(book => book.rating >= 4.5))

console.log(books1.filter(book => book.author.includes('Ray Milton')))

//Revisiting Sort
//The default sort() in Javascript is very weird. For strings, it works fine.
//For numbers, it converts all the numbers to strings and sort them as strings
//which leads to odd behavior. It also mutates/modifies the original array.

const prices = [400.50, 3000, 99.99, 35.99, 12.00, 9500];
//console.log(prices.sort())

//We can modify the behavior of sort() method to sort numbers by providing a
//compare function. Example -
//arr.sort(compareFunc(a,b))


//If compareFunc(a,b) returns less than 0, sort a before b
//If compareFunc(a,b) returns 0, leave a and b unchanged
//If compareFunc(a,b) returns greater than 0, sort b before a

// console.log(prices.sort((a, b) => a - b))
// console.log(prices.sort((a, b) => b - a))

const ascSort = prices.slice().sort((a, b) => a - b)
const descSort = prices.slice().sort((a, b) => b - a)

const ascSort1 = [...prices].sort((a, b) => a - b)
const descSort1 = prices.slice().sort((a, b) => b - a)

console.log(prices, ascSort, descSort)

2 - 3   // Negative. a is smaller. Dont sort them.
3 - 2   // Positive. a is bigger. we need to sort them
3 - 3   // Zero. Both are same. No need to sort.

//reduce() - It takes an array of values and reduces them down to a single
//value. Example - summing an array
//We can also find the maxmimum or a minimum value inside an array


//The reduce() method takes a callback and inside this callback, the first
//parameter is accumulator and the second parameter is the current value of
//the array(starting from 2nd index). Make sure to use the return keyword.


//accumulator is the final value we are reducing down to.

//reduce(callbackFn, initialValue?)
const nums5 = [3,5,7,9,11]
const sum = nums5.reduce((accumulator, currValue) => {
    return accumulator + currValue
})

console.log(sum)

// Callback        Accumulator     currValue   return value
// Zeroth               0               3           3
// First                3               5           8
// Second               8               7           15
// Third                15              9           24
// Fourth               24              11          35       
