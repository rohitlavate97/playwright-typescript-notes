let person = {
                    firstName : "Tim",   //key-value pair
					lastName : "Joe"
					}
console.log(person.firstName) // accessing value using dot notation
console.log(person['lastName']) // accessing value using bracket notation
person.firstName = "Tim Dane" // updating value using dot notation
console.log(person.firstName)
person['lastName'] = "Smith" // updating value using bracket notation
console.log(person['lastName'])
person.gender = 'Male' // adding new key-value pair using dot notation
console.log(person)
delete person.gender // deleting key-value pair using delete operator
console.log(person)
console.log('gender' in person) // in operator - checks if a key exists in an object, returns true or false
//print all properties of the person object
for(let key in person){ // for...in loop - iterates over the enumerable properties of an object
    console.log(key + ": " + person[key]) // accessing value using bracket notation
}

let employee = {
    name: "John Doe",
    age: 30,
    position: "Software Engineer",
    details: function(){  // method - a function that is a property of an object
    console.log(this.name + " is a " + this.position) // this keyword - refers to the current object;
 }
}
console.log(employee.details()) // calling the method of the employee object
