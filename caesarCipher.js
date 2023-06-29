const alphabet = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
};

// Retrieve the key from an object based on the value
const getKey = (obj, val) => Object.keys(obj).find((key) => obj[key] === val);

const caesarCipher = (string, k) => {
    let result = '';

    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        const lowercaseChar = char.toLowerCase();

        // Check if the character is a letter (exists in the `alphabet` object)
        if (Object.keys(alphabet).indexOf(lowercaseChar) >= 0) {
            // Perform the Caesar cipher shift operation and retrieve the shifted character
            const shiftedChar = getKey(alphabet, (alphabet[lowercaseChar] + k) % 26);

            // Preserve the original casing in the result string
            result += char === lowercaseChar ? shiftedChar : shiftedChar.toUpperCase();
        } else {
            // If the character is not a letter, append it to the result string as is
            result += char;
        }
    }

    return result;
};

module.exports = caesarCipher;
  

  