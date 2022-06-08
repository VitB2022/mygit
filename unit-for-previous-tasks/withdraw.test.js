import { withdraw } from "./withdraw.js";

it('should get a number', () => {
    const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);

    expect(result).toEqual(37);
});

it('should get -1', () => {
    const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);

    expect(result).toEqual(-1);
});

it('should get null', () => {
    const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Ann', 400);

    expect(result).toEqual(1000);
});