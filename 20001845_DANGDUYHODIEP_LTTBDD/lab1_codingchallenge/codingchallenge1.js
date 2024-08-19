// var fs = (function() {
//     BMI = mass / height ** 2
// })
// fs();
function calculateBMI(mass, height) {
    return mass / (height * height);
}

function compareBMI(markMass, markHeight, johnMass, johnHeight) {
    const markBMI = calculateBMI(markMass, markHeight);
    const johnBMI = calculateBMI(johnMass, johnHeight);
    return markBMI > johnBMI;
}

// Data 1
const markMass1 = 78;
const markHeight1 = 1.69;
const johnMass1 = 92;
const johnHeight1 = 1.95;
const markHigherBMI1 = compareBMI(markMass1, markHeight1, johnMass1, johnHeight1);
console.log("Data 1: Mark's BMI is higher than John's:", markHigherBMI1);

// Data 2
const markMass2 = 95;
const markHeight2 = 1.88;
const johnMass2 = 85;
const johnHeight2 = 1.76;
const markHigherBMI2 = compareBMI(markMass2, markHeight2, johnMass2, johnHeight2);
console.log("Data 2: Mark's BMI is higher than John's:", markHigherBMI2);