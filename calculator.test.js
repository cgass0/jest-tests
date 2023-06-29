const calculator = require('./calculator');

test('"test" should become "Test"', () => {
    expect(calculator.add(5, 3)).toBe(8);
});

test('"test" should become "Test"', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
});

test('"test" should become "Test"', () => {
    expect(calculator.multiply(5, 3)).toBe(15);
});

test('"test" should become "Test"', () => {
    expect(calculator.divide(6 ,3)).toBe(2);
});

test('"test" should become "Test"', () => {
    expect(calculator.add(-5, 3)).toBe(-2);
});

test('"test" should become "Test"', () => {
    expect(calculator.subtract(5, -3)).toBe(8);
});

test('"test" should become "Test"', () => {
    expect(calculator.multiply(-5, 3)).toBe(-15);
});

test('"test" should become "Test"', () => {
    expect(calculator.divide(-5 ,3)).toBe(-5/3);
});