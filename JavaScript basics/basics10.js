const Person = require('./basics9') // importing the Person class from the basics9.js file and storing it in const variable Person, 
// so that we can use it to create an instance of the Person class and access its properties and methods.
// In this file, we are importing the Person class from the basics9.js file and creating an instance of the Person class to access its properties and methods.
let person = new Person("John", "Doe") // creating an instance of the Person class and passing values to the constructor
console.log(person.fullName()) // calling the fullName method of the person object to get the full name of the person;