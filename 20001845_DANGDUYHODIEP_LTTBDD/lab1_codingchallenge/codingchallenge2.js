function calculateBMI(mass, height) {
    return mass / (height * height);
}

function compareBMI(markMass, markHeight, johnMass, johnHeight) {
    const markBMI = calculateBMI(markMass, markHeight);
    const johnBMI = calculateBMI(johnMass, johnHeight);

    if (markBMI > johnBMI) {
        console.log(`Mark's BMI (${markBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)})!`);
    } else {
        console.log(`John's BMI (${johnBMI.toFixed(1)}) is higher than Mark's (${markBMI.toFixed(1)})!`);
    }
}

// Data 1
const markMass1 = 78;
const markHeight1 = 1.69;
const johnMass1 = 92;
const johnHeight1 = 1.95;
compareBMI(markMass1, markHeight1, johnMass1, johnHeight1);

// Data 2
const markMass2 = 95;
const markHeight2 = 1.88;
const johnMass2 = 85;
const johnHeight2 = 1.76;
compareBMI(markMass2, markHeight2, johnMass2, johnHeight2);