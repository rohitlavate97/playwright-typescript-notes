class Person {
    age = 34; // age is a class variable
    get location(){ // getter method - allows us to access the value of a property
        return "New York"; // using a private variable to store the value of location
    }
    constructor(firstName, lastName) { // constructor method - allows us to initialize the properties of an object when it is created
        //if properties declared in constructor, they are instance variable--> firstName and lastName are instance variables, 
        //Proerites scope is only inside this block of code, 
        // they are not accessible outside the constructor method
        this.firstName = firstName; // using the this keyword to refer to the current class object --> Accessible to entire class
        this.lastName = lastName;
        //here we are sending value of firstName/lastName from constructor arguments to the class variables firstName/lastName using this keyword
        //ie this way class variables are initialized with the values passed to the constructor when an object is created
    }
    fullName(){ // method - allows us to define a function that can be called on an object of the class
        return this.firstName + " " + this.lastName; // using the this keyword to refer to the current class object
    }
}
let person = new Person("John", "Doe") // creating an instance of the Person class and passing values to the constructor
console.log(person.age) // accessing the age property of the person object
console.log(person.location) // accessing the location property of the person object using the getter method
console.log(person.fullName()) // calling the fullName method of the person object to get the full name of the person;
//class properties defined at class level and instance properties defined in constructor, both can be accessed using this keyword,
//but class properties can be accessed without using this keyword, while instance properties can only be accessed using this keyword.
//values of instance properties are changes based upon instances created, while values of class properties are same for all instances of the class.
module.exports = Person; // exporting the Person class so that it can be imported and used in other files