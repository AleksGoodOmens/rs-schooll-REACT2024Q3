import { describe, expect, it } from 'vitest';
import { renderWithProviders } from '../../test/test-utils';
import DetailedCard from './DetailedCard';
import { screen } from '@testing-library/dom';

describe('DetailedCard', () => {
	it('render loader when loading data', async () => {
		renderWithProviders(<DetailedCard />, {
			preloadedState: {
				cards: { activeCard: { category: 'people', id: '1' } },
			},
		});

		expect(screen.getByText('Loading...')).toBeInTheDocument();
	});
	it('render correct data when come status ok', async () => {
		renderWithProviders(<DetailedCard />, {
			preloadedState: {
				cards: { activeCard: { category: 'people', id: '1' } },
			},
		});

		expect(
			await screen.findByRole('heading', { name: /luke/i }),
		).toBeInTheDocument();
	});
	it('render something go wrong if 404', async () => {
		renderWithProviders(<DetailedCard />, {
			preloadedState: {
				cards: { activeCard: { category: 'people', id: '2' } },
			},
		});

		expect(await screen.findByText(/something go wrong/i)).toBeInTheDocument();
	});
});
