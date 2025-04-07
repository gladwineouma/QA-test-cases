const {add, subtract, multiply, divide} = require('./math')

test('adds 2 + 3 to equal 5', () => {
    expect(add(2, 3)).toBe(5);
});

test('subtract 7 - 3 to equal 4', () => {
    expect(subtract(7, 3)).toBe(4);
});

test('multiply 4 * 3 to equal 12', () => {
    expect(multiply(4, 3)).toBe(12);
});

test('divide 10 // 2 to equal 5', () => {
    expect(divide(10, 2)).toBe(5);
});
