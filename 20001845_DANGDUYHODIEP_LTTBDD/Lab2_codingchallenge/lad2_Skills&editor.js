function printForecast(arr) {
    let str = "... ";
    for (let i = 0; i < arr.length; i++) {
        str += `${arr[i]}°C in ${i + 1} days ... `;
    }
    console.log(str);
}

// Test data
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

printForecast(data1);
printForecast(data2);