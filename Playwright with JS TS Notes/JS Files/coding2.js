
/*
Rahul and Aman are trying to compare their BMI(Body Mass Index) which is calculated 
using this formula:
BMI = mass / height square
OR
BMI = mass / height * height
where mass is in KG and height is in metre

1. Store Rahul's and Aman’s mass and height in variables
2. Calculate both their BMIs using the formula
3. Create a boolean variable 'rahulHigherBMI' containing information about whether Rahul 
   has a higher BMI than Aman.

TEST DATA: Rahul weighs 78 kg and is 1.69 m tall.
Aman weighs 92 kg and is 1.95 m tall.

GOOD LUCK 😊
*/

const weightRahul = 78
const heightRahul = 1.69

const weightAman = 92
const heightAman = 1.95

//BODMAS
//PEMDAS
const bmiRahul = weightRahul / (heightRahul ** 2)       //5 ** 2
const bmiAman = weightAman / (heightAman ** 2)

const rahulHigherBMI = bmiRahul > bmiAman

console.log({bmiRahul, bmiAman, rahulHigherBMI})   //Objects in JS





