const repeatString = function(input, reps) {
    let output = "";
    if (reps >= 0) {
        for (i = 0; i < reps; i++) {
            output += input;
        }
        return output;
    }
    else {
        return "ERROR";
    }
        
}

module.exports = repeatString