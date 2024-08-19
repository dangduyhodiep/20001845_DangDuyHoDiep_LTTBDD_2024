function calculateTip(bill) {
    const tipPercentage = bill >= 50 && bill <= 300 ? 0.15 : 0.2;
    const tip = bill * tipPercentage;
    const total = bill + tip;
    console.log(`The bill was ${bill}, the tip was ${tip.toFixed(2)}, and the total value ${total.toFixed(2)}`);
}

// Test data
calculateTip(22);
calculateTip(295);
calculateTip(176);
calculateTip(440);
calculateTip(37);
calculateTip(105);
calculateTip(10);
calculateTip(1100);
calculateTip(86);
calculateTip(52);