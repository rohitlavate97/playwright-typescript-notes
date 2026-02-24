const flag = true
if(flag) {
    console.log("condtion is satisfied")
} else {
    console.log(flag);
    console.log("condtion is not satisfied")
}

// while(true) {
//     console.log("infinite loop")
// }
// while loop --> Run until the condition is true (while looks at the condition first and then executes the code)
let i =0;
while(i<5) {
    console.log(i);
    i++;
}
// do while loop
let j=0;
do{
    j++;    
} while(j<10);
console.log(j);

//For loop  --> initialization, condition, increment/decrement--> Run for n number of times
for(let k=0;k<=5;k++){
    console.log(k);
}

//From 1 to 10, give me common multiple of 2 and 5
let n=0;
for(let m=1;m<=10;m++){
    if(m%2==0 && m%5==0) {
        n++;
    }
}
console.log(n);

