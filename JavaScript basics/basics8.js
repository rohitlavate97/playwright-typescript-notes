class Person {
    age = 34;
}
let person = new Person() // creating an instance of the Person class
console.log(person.age) // accessing the age property of the person object
person.age = 35 // updating the age property of the person object
console.log(person.age) // accessing the updated age property of the person object

// class Employee {
//     age = 30;
//     location = "New York";
//     get location(){ // getter method - allows us to access the value of a property
//         return this.location; // using a private variable to store the value of location
//     }
// }

//Properties also can be accessed and updated using getter and setter methods. 
// Getter methods allow us to access the value of a property, 
// while setter methods allow us to update the value of a property. 
// In the example above, we have defined a getter method for the location property, which returns the value of location when accessed.
class Employee {
    age = 30;
    //location = "New York";
    get location(){ // getter method - allows us to access the value of a property
        return "New York"; // using a private variable to store the value of location
    }
}
console.log(employee.location) // accessing the location property of the employee object using the getter method