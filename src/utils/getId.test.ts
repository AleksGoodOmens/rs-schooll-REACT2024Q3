// Импортируем функцию, которую будем тестировать
import { describe, expect, it } from 'vitest';
import getId from './getId';

describe('getId', () => {
	it('should return a string of numbers joined by a comma from a given string', () => {
		const input = 'abc123def456';
		const expectedOutput = '123,456';
		expect(getId(input)).toEqual(expectedOutput);
	});

	it('should return an empty string when there are no numbers in the input string', () => {
		const input = 'abcdef';
		const expectedOutput = '';
		expect(getId(input)).toEqual(expectedOutput);
	});

	it('should return a string of numbers joined by a comma from a string with various delimiters', () => {
		const input = 'abc 123 def-456_789';
		const expectedOutput = '123,456,789';
		expect(getId(input)).toEqual(expectedOutput);
	});

	it('should return an empty string for an empty input string', () => {
		const input = '';
		const expectedOutput = '';
		expect(getId(input)).toEqual(expectedOutput);
	});

	it('should return the number as a string when there is only one number in the input string', () => {
		const input = 'abc123def';
		const expectedOutput = '123';
		expect(getId(input)).toEqual(expectedOutput);
	});
});
