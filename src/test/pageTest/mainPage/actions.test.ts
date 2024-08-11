import { describe, expect, it, vi } from 'vitest';
import { fetchCategories } from '../../../app/actions';

global.fetch = vi.fn();

vi.mock('../utils', () => ({
	categoriesConverter: vi.fn(),
}));

describe('fetchCategories', () => {
	it('should return converted categories when fetch is successful', async () => {
		const result = await fetchCategories();

		expect(result).toEqual([
			'mockPeople',
			'mockplanets',
			'mockfilms',
			'mockspecies',
			'mockvehicles',
			'mockstarships',
		]);
	});
});
