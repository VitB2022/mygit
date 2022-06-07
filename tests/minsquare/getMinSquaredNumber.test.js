import getMinSquaredNumber from "./getMinSquaredNumber.js";

it('should get null', () => {
    const result = getMinSquaredNumber([]);

    expect(result).toEqual(null);
});

it('should get also null', () => {
    const result = getMinSquaredNumber(' ');

    expect(result).toEqual(null);
});

it('should get 4', () => {
    const result = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);

    expect(result).toEqual(4);
});