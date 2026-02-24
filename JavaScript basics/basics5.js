function add(a,b){
    return a+b;
}
let sum = add(10,20);
console.log(sum);

//Anonymous function => function expression --> function without a name, assigned to a variable
let sumOfInterger = function(a,b){
    return a+b;
}
//Also we can use arrow function to write anonymous function in a shorter way, ie getting rid of function keyword and return statement
let sumOfIntegerArrow = (a,b) => a+b; // => it is flat operator, it is used to write anonymous function in a shorter way
console.log(sumOfIntegerArrow(10,20)); //at runtime, it will be converted to a normal function, it is just a syntactical sugar
//Note: sumOfIntegerArrow is function name now (but we have declared it as a variable)-->10,20 sits in a and b respectively

//Scope of variable --> global scope, function scope, block scope
// function add(a,b){
//     var greet = "Hello";  //--> function scope, it is accessible only within the function
//     return a+b;
// }
// console.log(greet);  //--> ReferenceError: greet is not defined, because it is not accessible outside the function

var greet = "Hello"; //--> global scope, it is accessible throughout the program
function add(a,b){
    return a+b;
}
console.log(greet); //--> Hello, because it is accessible throughout the program

//var is not in block scope, it is in the function scope.
var thank = "Thank you";
if(1==1){
    var thank = "Thanks";  //Although 'thank' is declared inside the block, var ignores block scope and modifies the outer variable. To fix this behavior,
                           //  'let' was introduced to provide proper block-level scoping.
}
console.log(thank); //--> Thanks, because the global variable was overridden