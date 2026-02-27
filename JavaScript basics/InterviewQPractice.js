const fruits = ["apple", "banana", "cherry", "date", "elderberry"];
//Access element by index
console.log(fruits[2]);  // Output: "cherry"
//Add element to the end of the array
fruits.push("fig");
console.log(fruits);
//Remove the last element from the array
const lastFruit = fruits.pop();
console.log(lastFruit);  // Output: "fig"
console.log(fruits);
//Add element to the beginning of the array
fruits.unshift('grapes');
console.log(fruits);
//Remove the first element from the array
const firstFruit = fruits.shift();
console.log(firstFruit);
console.log(fruits);
//Find the index of an element
const index = fruits.indexOf("date");
console.log(index);
//remove an element by index
const removedFruits = fruits.splice(index, 1); // removes 1 element at the specified index (index of "date") and returns the removed element(s) as an array
console.log(removedFruits);
console.log(fruits);
//Iterate over the array
fruits.forEach((fruit, i) => {
    console.log(`${i}: ${fruit}`);
});
