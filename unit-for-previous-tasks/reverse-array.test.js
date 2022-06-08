import { reverseArray } from './reverse-array.js';

it('should get null', () => {
    const result = reverseArray(1, 5);

    expect(result).toEqual(null);
});

it('should get also null', () => {
    const result = reverseArray('abc');

    expect(result).toEqual(null);
});

it('should get reverse array', () => {
    const result = reverseArray([1, 3, 5]);

    expect(result).toEqual([5, 3, 1]);
});