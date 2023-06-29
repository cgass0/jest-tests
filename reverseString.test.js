const reverseString = require('./reverseString');

test('"test" should become "Test"', () => {
    expect(reverseString('test and test')).toBe('tset dna tset');
});