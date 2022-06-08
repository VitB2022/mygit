import { calc } from './calculator.js'

it('should get sum', () => {
    const result = calc('2 + 3');

    expect(result).toEqual('2 + 3 = 5');
});

it('should get difference', () => {
    const result = calc('3 - 1');

    expect(result).toEqual('3 - 1 = 2');
});

it('should get multiplication', () => {
    const result = calc('3 * 4');

    expect(result).toEqual('3 * 4 = 12');
});

it('should get division', () => {
    const result = calc('15 / 3');

    expect(result).toEqual('15 / 3 = 5');
});

it('should get null', () => {
    const result = calc([10, 2]);

    expect(result).toEqual(null);
});