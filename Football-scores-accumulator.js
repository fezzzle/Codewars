let results = ["1:0","2:1","3:0","4:0","2:1","3:1","4:1","1:0","4:2","4:3"];

function points(games) {
    let arrOfResults = [];
    const totalPoints = [0]
    for (let i = 0; i < results.length; i++) {
        arrOfResults.push(results[i].replace(":", "").split(""));
    }
    for (let j = 0; j < arrOfResults.length; j++) {
        for (let a = 0; a < arrOfResults[j].length -1; a++) {
            let first = Number(arrOfResults[j][0]);
            let second = Number(arrOfResults[j][1]);
            if (first > second) {
                totalPoints[0] = totalPoints[0] + 3;
            } else if (second === first) {
                totalPoints[0] = totalPoints[0] + 1;
            }
        }
    }
    return totalPoints;
}

points(results);