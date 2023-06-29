const analyzeArray = (...array) => {
    
    // Sorts the passed array from small to largest
    let sortedArray = array.sort((a, b) => a - b);

    // Retreive array data
    let length = array.length;
    let min = sortedArray[0];
    let max = sortedArray[length - 1];

    let sum = 0; // Initialize the sum variable
    
    // Sum the array
    for (let i = 0; i < length; i++) {
        sum += array[i];
    }

    let average = sum / length;

    // Create the object
    let obj = {
        average: average,
        min: min,
        max: max,
        length: length
    };

    return obj;

}


module.exports = analyzeArray;