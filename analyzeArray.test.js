const analyzeArray = require('./analyzeArray');

describe('analyzeArray', () => {
  test('should analyze the array correctly', () => {
    const array = [7, 2, 9, 1, 5];
    const result = analyzeArray(...array);

    expect(result).toEqual({
      average: 4.8,
      min: 1,
      max: 9,
      length: 5
    });
  });
});

describe('analyzeArray', () => {
    test('should analyze the array correctly', () => {
      const array = [1,8,3,4,2,6];
      const result = analyzeArray(...array);
  
      expect(result).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      });
    });
});