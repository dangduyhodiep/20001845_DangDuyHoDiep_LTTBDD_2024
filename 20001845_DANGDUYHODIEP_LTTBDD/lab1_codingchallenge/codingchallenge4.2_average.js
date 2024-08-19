function calculateTip(bill) {
    const tipPercentage = bill >= 50 && bill <= 300 ? 0.15 : 0.2;
    const tip = bill * tipPercentage;
    const total = bill + tip;
    return [tip, total];
}

function calculateAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const [tip, total] = calculateTip(bills[i]);
    tips.push(tip);
    totals.push(total);
}

console.log(tips);
console.log(totals);

const average = calculateAverage(totals);
console.log(average);