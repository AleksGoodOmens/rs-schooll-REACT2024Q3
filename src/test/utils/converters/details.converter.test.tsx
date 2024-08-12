// detailsDataConverter.test.tsx
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { detailsDataConverter } from '../../../utils';
import { IDetailedCard } from '../../../types';

describe('detailsDataConverter', () => {
	it('should correctly handle empty objects', () => {
		const { container } = render(
			<>{detailsDataConverter({} as IDetailedCard)}</>,
		);

		// Ожидается, что ничего не будет отображаться
		expect(container.textContent).toBe('');
	});

	it('should correctly handle objects with only array values', () => {
		const { container } = render(
			<>
				{detailsDataConverter({
					array: ['reading', 'sports'],
					url: 'anyString',
				})}
			</>,
		);

		expect(container.textContent).toContain('anyString');
	});

	it('should replace underscores in keys with spaces', () => {
		const dataWithUnderscores = {
			first_name: 'Jane',
			last_name: 'Doe',
			profession: 'Engineer',
			url: 'thisIsTestingString',
		};

		const { container } = render(
			<>{detailsDataConverter(dataWithUnderscores)}</>,
		);

		expect(container.textContent).toContain('first name: Jane');
		expect(container.textContent).toContain('last name: Doe');
		expect(container.textContent).toContain('profession: Engineer');
	});
});
