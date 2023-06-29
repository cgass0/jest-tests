const caesarCipher = require('./caesarCipher');

test('"abc" should become "bcd"', () => {
    const input = 'abc';
    const shift = 1;
    const expectedOutput = 'bcd';
  
    const result = caesarCipher(input, shift);
  
    expect(result).toBe(expectedOutput);
});

test('"abc" should become "bcd"', () => {
    const input = 'Aaaaa Bbbb CcCc';
    const shift = 1;
    const expectedOutput = 'Bbbbb Cccc DdDd';

    const result = caesarCipher(input, shift);

    expect(result).toBe(expectedOutput);
});

test('"abc" should become "bcd"', () => {
    const input = 'Aaaaa 1 Bbbb ? CcCc';
    const shift = 1;
    const expectedOutput = 'Bbbbb 1 Cccc ? DdDd';

    const result = caesarCipher(input, shift);

    expect(result).toBe(expectedOutput);
});

test('"abc" should become "bcd"', () => {
    const input = 'abcd';
    const shift = 3;
    const expectedOutput = 'defg';

    const result = caesarCipher(input, shift);

    expect(result).toBe(expectedOutput);
});