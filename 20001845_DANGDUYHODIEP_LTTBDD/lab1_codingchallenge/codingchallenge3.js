function calculateAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}

function determineWinner(dolphinsScore1, dolphinsScore2, dolphinsScore3, koalasScore1, koalasScore2, koalasScore3, minScore = 0) {
    const dolphinsAverage = calculateAverage(dolphinsScore1, dolphinsScore2, dolphinsScore3);
    const koalasAverage = calculateAverage(koalasScore1, koalasScore2, koalasScore3);

    if (dolphinsAverage > koalasAverage && dolphinsAverage >= minScore) {
        console.log(`Dolphins win with an average score of ${dolphinsAverage.toFixed(2)} points!`);
    } else if (koalasAverage > dolphinsAverage && koalasAverage >= minScore) {
        console.log(`Koalas win with an average score of ${koalasAverage.toFixed(2)} points!`);
    } else if (dolphinsAverage === koalasAverage && dolphinsAverage >= minScore) {
        console.log("It's a draw!");
    } else {
        console.log("No winner. At least one team must achieve a minimum score of " + minScore + " points.");
    }
}

// Data 1
determineWinner(96, 108, 89, 88, 91, 110);

// Data Bonus 1
determineWinner(97, 112, 101, 109, 95, 123, 100);

// Data Bonus 2
determineWinner(97, 112, 101, 109, 95, 106, 100);