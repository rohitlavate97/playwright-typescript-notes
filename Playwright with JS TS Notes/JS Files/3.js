
//Comparison Operators
/*
>
>=
<
<=
==      Loose Equality(Never use it)
!=      Loose Not equality(Never use it)
===     Strict Equality
!==     Strict Not equality
*/

//Comparing values is very important in making decisions.

10 > 1      //true

///Booleans are just 2 values - true or false.

console.log("Hello".length > "hello!".length)

//There are 2 versions of equality: == and ===. 

//Loose equality(==)
console.log(4 == '4')   // '4' == '4'. Value

console.log(4 === '4')  //Value + Datatype

console.log(10 != '10')     //false. Automatic type conversion(coercion)
console.log(10 !== '10')     //true

//Truthy & Falsy values
//Everything is a truthy values except for these 6.

//Falsy values
/*

1. false
2. 0
3. ""
4. null
5. undefined
6. NaN

Everything else is a truthy value
*/

let mystery = 0

if(mystery){
    console.log('Truthy')
} else {
    console.log('Falsy')
}

let loggedInUser = ""

if(loggedInUser){
    console.log('Truthy')
} else {
    console.log('Falsy')
}

//Logical Operators
//AND, OR, NOT

/*
AND - &&
OR - ||
NOT - !
*/

//AND - Both the sides need to be true in order for the final thing to be true

console.log(1 <= 4 && 'a' === 'a')
console.log(9 > 10 && 9 >= 9)   // false && true     -> false

//true && true -> true
//false && true -> false
//true && false -> false
//false && false -> false

//OR - Either of the sides need to be true in order for the final thing to be true

console.log(1 <= 4 || 'a' === 'a')  //true
console.log(9 > 10 || 9 >= 9)       //true

//true || true -> true
//false || true -> true
//true || false -> true
//false || false -> false

//Logical NOT operator
//!expression gives me true if the expression is false
//!expression gives me false if the expression is true

console.log(!null)      //true
console.log(!(0 === 0)) //false

//!false

//Operator precedence(Priority)
//BODMAS
//PEMDAS

//NOT(!) has the highest priority
//AND has a higher priority than OR

//You can alter/change it using bracket

let x = 7

//console.log(x == 7 || (x === 3 && x > 30))

//Short circuiting in JS
x === 3 && x > 30

x === 7 || x > 30

//In case of AND, if the left side is false, JS will not execute the RHS
//In case of OR, if the left side is true, JS will not execute the RHS

console.log(NaN == undefined)
console.log(NaN == NaN)
//undefined - value is missing
//NaN - some calculation failed

let name1

//Ternary operator(3)
//Unary(1)  counter++
//Binary(2) a + b


let num = 2
if(num === 7){
    console.log('Lucky')
} else {
    console.log('bad')
}

//Syntax - 
//condition ? expIfTrue : expIfFalse

num === 7 ? console.log('Lucky') : console.log('bad')

//We can use a ternary operator to assign value to a variable.

let status1 = 'offline'
let color

// if(status1 === 'offline'){
//     color = 'red'
// } else {
//     color = 'green'
// }

//condition ? expIfTrue : expIfFalse

// status1 === 'offline' ? color = 'red' : color = 'green'
color = status1 === 'offline' ? 'red' : 'green'
console.log(color)