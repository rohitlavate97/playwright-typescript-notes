
//Default Parameters

function multiply(a = 1, b = 1){
    return a * b
}

console.log(multiply(3, 4))
console.log(multiply(3))    //NaN

//All the default parameters need to come at the end of the parameter list.
//You can't make the first parameter default and have non-default parameters afterwards.

//Spread operator(...)
const nums = [9, 3, 2, 8]
// console.log(Math.max(9, 3, 2, 8))
// console.log(Math.min(9, 3, 2, 8))

console.log(Math.max(nums))     //NaN
console.log(Math.max(...nums))  

//Spread operator - when you want to copy an array.

const nums1 = [1, 2, 3]
const nums2 = [4, 5, 6]

const merged = [...nums1, ...nums2, 7, 8, 9]
console.log(merged)

//REST parameters(...)
//Also called as remaining parameters

function sum(a, b, c){
    return a + b + c
}

// console.log(sum(3, 4))
console.log(sum(3, 4, 5))
console.log(sum(3, 4, 5, 6))

function sumAll(...nums){
    let total = 0
    for(const num of nums) total = total + num
    return total
}

function sumAll1(...nums){
    return nums.reduce((total, currVal) => {
        return total + currVal
    })
}

console.log(sumAll1(3, 4))
console.log(sumAll1(3, 4, 5))
console.log(sumAll1(3, 4, 5, 6))

function fullName(first, last, ...titles){
    console.log(first)
    console.log(last)
    console.log(titles)
}

fullName("Rahul", "Sharma", "QA", "Software", "Testing", "Playwright")

//Destructuring 
//1. Arrays
//2. Objects

const raceResults = ['Eliud Kipchoge', 'Feyisa Lelisa', 'Galen Rupp', 'Person 1', 'Person 2']

// const gold = raceResults[0]
// const silver = raceResults[1]
// const bronze = raceResults[2]

// const [gold, silver, , ,bronze] = raceResults
const [, gold, ...others] = raceResults

 console.log(gold)
 console.log(others)

//Objects
const runner = {
    first: 'Eliud',
    last: 'Kipchoge',
    country: 'Kenya',
    title: 'Winner'
}

// const first = runner.first
// const last = runner.last
// const country = runner.country

const {first: first1, last} = runner
console.log(first1, last)
