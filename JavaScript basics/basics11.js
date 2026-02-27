const person = require('./basics9') //const is used so that we cannot reassign the value of person variable, 
// but we can still modify the properties of the person object.
class Pet extends person { // using the extends keyword to create a subclass of the Person class, 
// which inherits all the properties and methods of the Person class
    constructor(firstName, lastName){
        super(firstName, lastName) // using the super keyword to call the constructor of the parent class (Person class) and pass the arguments to it,
        // so that the properties of the parent class are initialized when an object of the subclass is created
    }
    get location(){ // overriding the location property of the parent class (Person class) with a new value for the Pet class
        return "Los Angeles"; // returning a new value for the location property for the Pet class
    }
}
let pet = new Pet("Buddy", "Smith") // creating an instance of the Pet class and passing values to the constructor
console.log(pet.fullName()) // calling the fullName method of the pet object to get the full name of the pet, which is inherited from the Person class
console.log(pet.location) // accessing the location property of the pet object, which is overridden in the Pet class to return a new value