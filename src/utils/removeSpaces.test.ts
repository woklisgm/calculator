import { removeSpaces } from './removeSpaces';

describe('removeSpaces', () => {
	test('spaces in start', () => {
		expect(removeSpaces(" somestring")).toBe("somestring");
	});

	test('spaces in end', () => {
		expect(removeSpaces("somestring ")).toBe("somestring");
	});

	test('spaces in middle', () => {
		expect(removeSpaces("somes tring")).toBe("somestring");
	});

	test("only spaces string", () => {
		expect(removeSpaces("   ")).toBe("");
	});

	test("check \\n", () => {
		expect(removeSpaces("\nsomestring")).toBe("somestring");
	});

	test("check \\r", () => {
		expect(removeSpaces("\rsomestring")).toBe("somestring");
	});
})