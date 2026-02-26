let day = 'Tuesday'
console.log(day.length)
let subday = day.slice(0,4)   // slice(startIndex, endIndex) - extracts a portion of a string and returns it as a new string
console.log(subday)
console.log(day[1]) // accessing character at index 1
let splitday = day.split('s') // split(separator) - splits a string into an array of substrings based on a specified separator
console.log(splitday)
console.log(splitday[1].trim()) // trim() - removes whitespace from both ends of a string (leading and trailing whitespace)

let date = '23'
let nextDate = '27'
let diff = parseInt(nextDate) - parseInt(date) // parseInt(string) - parses a string and returns an integer
diff.toString() // toString() - converts a number to a string
console.log(diff)

// String concatenation
let newQuote = day + " is Funday"
console.log(newQuote)