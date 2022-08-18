const sumAll = function(firstValue,lastValue) {
    sum = 0;
    if (typeof(firstValue) != "number" || typeof(lastValue) != "number" || firstValue < 0 || lastValue < 0) {
        return("ERROR");
    }
    if (firstValue < lastValue) {
        for (let i = firstValue; i <= lastValue; i++) {
            sum += i;
        }
    }
    else if(lastValue < firstValue) {
        for (let i = lastValue; i <= firstValue; i++) {
            sum += i;
        }
    }
    return sum;
};
console.log(sumAll(-5,10));
// Do not edit below this line
module.exports = sumAll;
