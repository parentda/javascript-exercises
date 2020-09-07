const sumAll = function(start, stop) {
    let x;
    let y;
    let sum = 0;
    if (typeof(start) !== "number" || typeof(stop) !== "number") {
        return "ERROR";
    }
    else if (start < 0 || stop < 0){
        return "ERROR";
    }
    else {
        if (stop < start) {
            x = stop;
            y = start;
        }
        else {
            x = start;
            y = stop;
        }
        for (let i = x; i <= y; i++) {
            console.log("i: " + i);
            sum += i;
            console.log("sum: " + sum);
        }
    }
    console.log(sum);
    return sum;

}

module.exports = sumAll
