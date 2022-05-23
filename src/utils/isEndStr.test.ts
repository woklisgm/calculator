import { isEndStr } from './isEndStr';

describe('isEndStr', () => {
	test('empty string', () => {
		expect(isEndStr("", 1)).toBe(true);
	});

	test('n < 0', () => {
		expect(isEndStr("string", -1)).toBe(false);
	});

	test('n < str.lengtn', () => {
		expect(isEndStr("string", 1)).toBe(false);
	});
	
	test('n = str.length', () => {
		expect(isEndStr("string", 6)).toBe(true);
	});	
	
	test('n > str.length', () => {
		expect(isEndStr("string", 7)).toBe(true);
	});	
});