const capitalize = (string) => {
    const array = string.split("");
    let first = array[0].toUpperCase();
    array.shift();
    array.unshift(first);
    
    return array.join("");
}

module.exports = capitalize;