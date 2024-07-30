// Импортируем функцию, которую будем тестировать
import { describe, expect, it } from 'vitest';
import tabConverter from './tabs.converter';

describe('tabConverter', () => {
	it('should return an array of keys for a given object', () => {
		const input = {
			key1: 'value1',
			key2: 'value2',
			key3: 'value3',
		};
		const expectedOutput = ['key1', 'key2', 'key3'];
		expect(tabConverter(input)).toEqual(expectedOutput);
	});

	it('should return an empty array for an empty object', () => {
		const input = {};
		const expectedOutput: string[] = [];
		expect(tabConverter(input)).toEqual(expectedOutput);
	});

	it('should return an array of keys for an object with various data types', () => {
		const input = {
			key1: 'value1',
			key2: 42,
			key3: true,
			key4: null,
			key5: undefined,
		};
		const expectedOutput = ['key1', 'key2', 'key3', 'key4', 'key5'];
		expect(tabConverter(input)).toEqual(expectedOutput);
	});
});
