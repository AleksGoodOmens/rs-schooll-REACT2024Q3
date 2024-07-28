import { describe, expect, it } from 'vitest';
import { renderWithProviders } from '../../test/test-utils';
import Cards from './Cards';
import { screen } from '@testing-library/dom';

describe('Cards', () => {
	it('render loader when loading data', () => {
		renderWithProviders(<Cards />);

		expect(screen.getByText(/loading/i)).toBeInTheDocument();
	});

	it('render pagination element', () => {
		renderWithProviders(<Cards />);

		expect(
			screen.getByRole('navigation', { name: /Pagination Navigation/i }),
		).toBeInTheDocument();
	});

	it('render no items founded if no data', async () => {
		renderWithProviders(<Cards />);

		expect(await screen.findByText(/nothing/i)).toBeInTheDocument();
	});
});
