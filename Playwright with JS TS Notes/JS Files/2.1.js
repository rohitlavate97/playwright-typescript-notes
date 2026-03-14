
//console.log("rohit".slice(-2))

//String Template literals
const firstName = "Piyush"
const job = "Trainer"
const birthYear = 1991
const year = 2037

const str1 = "I'm " + firstName + ', a ' + (year - birthYear) +  ' years old ' + job + '!' 
console.log(str1)

//natural and easy way to create a string
const str2 = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`
console.log(str2)

console.log(`I counted ${4 + 5} hens`)

// console.log('Hello World')

console.log(`Hello 
World`)

//null and undefined
//null - Explicit. Must be assigned.
//undefined - implicit(automatic). 


let loggedInUser
console.log(loggedInUser)