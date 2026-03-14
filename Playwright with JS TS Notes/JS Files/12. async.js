
//Synchronous code(Blocking)
console.log("Start")
console.log("Processing")
console.log("End")









console.log("Start")

// Simulating a time-consuming task
function fetchData() {
    let start = Date.now();
    while (Date.now() - start < 3000) { } // Blocks execution for 3 seconds
    return "Data loaded";
}

let data = fetchData();
console.log(data);

console.log("End");

//Synchronous code is also called blocking code because it blocks further
// execution until the current task is completed. 


//Asynchronous code


console.log("Start");

//async - Not blocking
setTimeout(() => {
    console.log("Async task finished!");
}, 2000);

console.log("End");

//How does JS handle async code
//1. Callbacks
//2. PRomises
//3. Async/await - looks like synchronous but runs async



//Callback Hell & The Pyramid of Doom

console.log("Start");

setTimeout(() => {
    console.log("Step 1")
    setTimeout(() => {
        console.log("Step 2")
        setTimeout(() => {
            console.log("Step 3")
            setTimeout(() => {
                console.log("Step 4")
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

console.log("End");



//Sequential setTimeout() methods
console.log("Start");

setTimeout(() => console.log("Step 1"), 1000);
setTimeout(() => console.log("Step 2"), 1000);
setTimeout(() => console.log("Step 3"), 1000);
setTimeout(() => console.log("Step 4"), 1000);

console.log("End");


//Pending - 
//fulfilled
//rejected

//It waits for a task to finish and then either it succeeds(fulfilled) or fails(rejected)

//Promise Example
//Async - any task that takes time to execute + not blocking

function delay(message, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(message);
            resolve(); // Call resolve when the task is done
        }, time);
    });
}

//Login URL
//Then -> enter username
//Then -> enter password
//Then -> click the Login button

console.log("Start");

delay("Step 1", 1000)
    .then(() => delay("Step 2", 1000))
    .then(() => delay("Step 3", 1000))
    .then(() => delay("Step 4", 1000))
    .then(() => console.log("All Steps are done"))

console.log("End");


console.log("Start");

function delay1(message, time) {
    setTimeout(() => {
        console.log(message);
    }, time);
}

delay1("Step 1", 1000)      //Opening URL
delay1("Step 2", 1000)      //Provide username

console.log("End");



//Reject example - 

function delay2(message, time, shouldFail = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject("Error: Something went wrong!"); // Simulating failure
            } else {
                console.log(message);
                resolve(); // Task completed successfully
            }
        }, time);
    });
}

console.log("Start");

delay2("Step 1", 1000)
    .then(() => delay2("Step 2", 1000, true)) // This will fail
    .then(() => delay2("Step 3", 1000))
    .catch((error) => console.error(error)) // Handle the failure

console.log("End");




//async await

function delay(message, time, shouldFail = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject("Error: Something went wrong!"); // Simulating failure
            } else {
                console.log(message);
                resolve(); // Task completed successfully
            }
        }, time);
    });
}

// Using async/await instead of .then()
//We are running async code as if it is sync.

async function runTasks() {
    console.log("Start")

    // try{
    //      await delay("Step1", 1000)      //1 sec
    //      await delay("Step2", 1000, true)      //1 sec
    //      await delay("Step3", 1000)      //1 sec
    // } catch(error){
    //     console.error(error)        //Handling the error message
    // }

    await delay("Step1", 1000)      //1 sec
    await delay("Step2", 1000, true)      //1 sec
    await delay("Step3", 1000)

    console.log("End")
}

runTasks()