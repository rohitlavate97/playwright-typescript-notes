//this
//It always return an object

//Think of this as a reference to the current execution scope.
//It is going to give you an object back. Depending on the scope and
//the rules of how this works, which is a confusing part, that object changes.

console.log(this)

//methods/Function
const person = {
    first: 'Piyush',
    last: 'Gupta',
    nickName: 'PSV',
    fullName(){             //method shorthand syntax
        console.log(this)
    }
}

person.fullName()