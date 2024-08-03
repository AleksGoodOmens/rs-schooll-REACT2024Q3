import { describe, expect, it, vi } from 'vitest';
import { renderWithProviders } from '../../test/test-utils';
import Cards from './Cards';
import { screen } from '@testing-library/dom';

describe('Cards', () => {
	vi.mock('next/router', () => ({
		useRouter: () => ({
			push: vi.fn(),
			query: { category: 'people', id: '1' },
		}),
	}));
	it('render loader when loading data', () => {
		renderWithProviders(<Cards />);

		expect(screen.getByText(/loading/i)).toBeInTheDocument();
	});

	it('render no items founded if no data', async () => {
		renderWithProviders(<Cards />);

		expect(await screen.findByText(/nothing/i)).toBeInTheDocument();
	});
});
