const removeFromArray = function(array, ...theElements) {
    let redacted = [];
    for (let value of array) {
        let toRemove =0;
        for (let element of theElements) {
            if (value === element) {
                toRemove = 1
            }
        }
        if (toRemove != 1) {
            redacted[redacted.length] = value;
        }
        
    }
    return redacted;
};
// Do not edit below this line
module.exports = removeFromArray;