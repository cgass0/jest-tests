const reverseString = (string) => {
    const array = string.split("");
    let reverseArray = [];
    
    for (let i = 0; i < array.length; i++) {
        reverseArray.unshift(array[i]);
    }
    
    return reverseArray.join("");
}

module.exports = reverseString;