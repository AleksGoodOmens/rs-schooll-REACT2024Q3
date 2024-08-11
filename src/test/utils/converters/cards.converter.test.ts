import { describe, expect, it } from 'vitest';
import { cardsConverter } from '../../../utils';

describe('cardsConverter', () => {
	it('should handle empty card array', () => {
		const convertedCards = cardsConverter([]);

		expect(convertedCards).toEqual([]);
	});
	it('should return correct value', () => {
		const convertedCards = cardsConverter([
			{
				name: 'mock',
				url: 'https://swapi.dev/api/mock/1/',
			},
		]);

		expect(convertedCards).toEqual([
			{
				url: 'https://swapi.dev/api/mock/1/',
				category: 'mock',
				id: '1',
				name: 'mock',
				title: '',
			},
		]);
	});
});
