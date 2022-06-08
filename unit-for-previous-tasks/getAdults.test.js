import { getAdults } from './getAdults.js';

it('should get null', () => {
    const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });

    expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});

it('should get null', () => {
    const result = getAdults({});

    expect(result).toEqual({});
});

it('should get null', () => {
    const result = getAdults({ Fred: 50, Andrey: 7 });

    expect(result).toEqual({ Fred: 50 });
});