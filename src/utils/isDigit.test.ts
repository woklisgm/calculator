import { isDigit } from './isDigit';

describe('isDigit', () => {
	test('empty string', () => {
		expect(isDigit("", 1)).toBe(false);
	});

	test('n > string length', () => {
		expect(isDigit("123", 10)).toBe(false);
	});

	test('char is not digit', () => {
		expect(isDigit("a23", 0)).toBe(false);
	});

	test('char is digit', () => {
		expect(isDigit("a23", 1)).toBe(true);
	});
});