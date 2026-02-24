//reduce, filter, map
var marks3 = [20,40,35,12,37,100];
var sum =0;
for(let i=0;i<marks3.length;i++) {
    sum = sum + marks3[i];
}
console.log(sum);

//reduce  -> it takes a callback function and an initial value,
//  it applies the callback function to each element of the array and returns a single value (i.e accumulate value)
let totalMarks = marks3.reduce((sum,mark) => sum + mark, 0);  //--> 0 is the initial value of sum, pull each and every value from array 
                                             // & put in mark and add to sum and return the final sum(sum is accumulator)
//console.log(marks3.reduce((sum,mark) => sum + mark, 0)); --> Alternate for for loop to calculate sum
console.log(totalMarks)

var scores = [12,13,14,16];
let evenscores = [];
for(let i=0; i<scores.length;i++){
    if(scores[i]%2==0) {
        evenscores.push(scores[i]);
    }
}
console.log(evenscores);

//Filter --> it takes a callback function and returns a new array with all the elements that satisfy the condition
let newFilterEvenScore = scores.filter(score => score%2==0);   // filters based on condition
console.log(newFilterEvenScore);

//Map --> it takes a callback function and returns a new array with the results of calling a provided function
//  on every element in the calling array
//example : multiply each element of scores by 3
let mappedArray = newFilterEvenScore.map(score => score*3);  // maps each element to a new value based on the provided function
console.log(mappedArray);

console.log(mappedArray.reduce((sum, val) => sum + val, 0));  //--> reduce the mapped array to a single value

//in single line
console.log(scores.filter(score => score%2==0).map(score=>score*3).reduce((sum,val)=> sum+val,0));

//Sorting array
var names = ["John", "Alice", "Bob", "Charlie"];
names.sort();
console.log(names);

var marksforSort = [20,40,35,12,37,100];
console.log(marksforSort.sort());  //--> sorts the array in lexicographical order (12,20,35,37,40,100)

var markSort = [12,003,19,16,14];  //normal sort will not work for numbers as it sorts in lexicographical order, so we need to provide a compare function to sort numbers in ascending order
console.log(markSort.sort((a,b) => a-b));  //bubble sort
