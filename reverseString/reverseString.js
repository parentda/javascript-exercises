const reverseString = function(input) {
    
    let temp = input.split("");
    let tempLength = temp.length;
    let reverse = "";

    for (i = 0; i < tempLength; i++)
    {
        reverse += temp[(tempLength - 1) - i];
        console.log(reverse);
    }

    return reverse;

}

module.exports = reverseString
