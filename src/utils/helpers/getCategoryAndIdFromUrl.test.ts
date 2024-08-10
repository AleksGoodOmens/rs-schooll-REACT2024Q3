// Импортируем функцию, которую будем тестировать
import { describe, expect, it } from 'vitest';
import { getCategoryAndIdFromUrl } from './getCategoryAndIdFromUrl';

describe('getCategoryAndIdFromUrl', () => {
	it('should return the correct category and id for a valid URL', () => {
		const input = 'https://swapi.dev/api/people/1/';
		const expectedOutput = { category: 'people', id: '1' };
		expect(getCategoryAndIdFromUrl(input)).toEqual(expectedOutput);
	});

	it('should return null for a URL without a valid number', () => {
		const input = 'https://swapi.dev/api/people/';
		const expectedOutput = null;
		expect(getCategoryAndIdFromUrl(input)).toEqual(expectedOutput);
	});

	it('should return the correct category and id for different valid URLs', () => {
		const input1 = 'https://swapi.dev/api/planets/5/';
		const expectedOutput1 = { category: 'planets', id: '5' };
		expect(getCategoryAndIdFromUrl(input1)).toEqual(expectedOutput1);

		const input2 = 'https://swapi.dev/api/starships/10/';
		const expectedOutput2 = { category: 'starships', id: '10' };
		expect(getCategoryAndIdFromUrl(input2)).toEqual(expectedOutput2);
	});

	it('should return null for an invalid URL', () => {
		const input = 'https://invalidurl.com/api/people/1/';
		const expectedOutput = null;
		expect(getCategoryAndIdFromUrl(input)).toEqual(expectedOutput);
	});

	it('should return null for an empty input string', () => {
		const input = '';
		const expectedOutput = null;
		expect(getCategoryAndIdFromUrl(input)).toEqual(expectedOutput);
	});
});
