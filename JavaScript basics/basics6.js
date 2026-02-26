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
let val = newQuote.indexOf("day"); // indexOf(substring) - returns the index of the first occurrence of a specified substring in a string, or -1 if it is not found
console.log(val)
let nextVal = newQuote.indexOf("day", 5) // indexOf(substring, fromIndex) - returns the index of the first occurrence of a specified substring in a string, starting the search at a specified index
console.log(nextVal)
