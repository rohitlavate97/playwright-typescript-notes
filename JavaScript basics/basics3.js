let marks1 = Array(6);  //--> creates an array of length 6 with all elements as undefined
let marks2 = new Array(20,40,35,12,37,100);  //--> creates an array with the given elements
var marks3 = [20,40,35,12,37,100];  //--> creates an array with the given elements
console.log(marks3[1]);  //--> access the element at index 1 (40)
marks3[1] = 50;  //--> update the element at index 1 to 50
console.log(marks3.length);  //--> get the length of the array (6)
marks3.push(80);  //--> add an element (80) to the end of the array
console.log(marks3);
marks3.pop();  //--> remove the last element from the array
console.log(marks3);
marks3.unshift(10);  //--> add an element (10) to the beginning of the array
console.log(marks3);
marks3.shift();  //--> remove the first element from the array
console.log(marks3);

console.log(marks3.indexOf(35));  //--> get the index of the element 35 (2)
console.log(marks1.includes(120));  //--> check if the element 120 is present in the array marks1 (false)
//console.log(marks3.slice(1,4));  //--> get a subarray from index 1 to 3 (50,35,12)
let submarks = marks3.slice(1,4);
console.log(submarks);