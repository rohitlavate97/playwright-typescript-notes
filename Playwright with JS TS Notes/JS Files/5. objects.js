
// const fitbitData = [
//     308727,
//     1826,
//     211.70,
//     5755
// ]

const fitbitData = {
    totalSteps  : 308727,
    totalFloors : 1826,
    totalMiles  : 211.70,
    avgCalorie  : 5755,
    45          : 'forty five',
    '76 trombones': 'great song'
}

//Use the dot notation as your 1st preferred choice
console.log(fitbitData.totalSteps)
console.log(fitbitData['totalSteps'])
//console.log(fitbitData.45)  //Not allowed
console.log(fitbitData."76 trombones")  //Not allowed

//In JavaScript, keys are automatically converted to strings. 

let data = {a: 1, b: 2, c: 3}

const palette = {
    red     : '#red',
    yellow  : '#yellow',
    blue    : '#blue'
}

// console.log(palette.red)
// console.log(palette['blue'])

//let color = 'yellow'
console.log(palette.color)  //undefined

//The square bracket syntax supports dynamic expressions
console.log(palette[color]) //  '#yellow'


//Adding and updating properties
const userReviews = {}

userReviews['queenBee'] = 4.0
userReviews.mrSmith = 3.5

console.log(userReviews)

//Nested Arrays and Objects

const student = {
    firstName: 'David',
    lastName: 'Jones',
    strengths: ['Music', 'Arts'],
    exams: {
        midterm: 85,
        final: 78
    }
}

console.log(student.strengths[1])
console.log(student.exams.midterm)

const student1 = student    //Make a second pointer to the same object
console.log(student === student1)
