console.log("Hello, World!");

// This is a single-line comment

/*
This is a multi-line comment
It can span multiple lines
*/

let a = 4;
console.log(a);
console.log(typeof(a));
//null and undefined --> don't assign any value to a variable, it will be undefined

let b = 234.6;
console.log(typeof(b));

//let c = a + b;
//console.log(c);

var c = a + b;  //replaced with var to make it global
console.log(c)

//Reassigning a value to a variable
let c = "Rohit";
    c = a + b;   //Allowed
var c = "Rohit"; //Allowed

