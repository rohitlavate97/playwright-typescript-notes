
//Write a program to swap the two numbers.

//Declaration + Assignment
let a = 10      //20
let b = 20      //10

//a = b       //Assignment    .. RHS -> LHS

// let temp = a
// a = b
// b = temp

//Without using the temporary variable
a = a + b   //a = 30, b = 20
b = a - b   //b = 10, a = 30
a = a - b   //b = 10, a = 20
console.log(a, b)