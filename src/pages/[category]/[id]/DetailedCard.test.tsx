import { describe, expect, it, vi, beforeEach } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../test/test-utils';
import DetailedCard from '.';
import { AppRouterContextProviderMock } from '../../../test/AppRouterContextProviderMock';

vi.mock('next/router', () => ({
	useRouter: () => ({
		push: vi.fn(),
		query: { category: 'people', id: '1' },
	}),
}));

describe('DetailedCard', () => {
	beforeEach(() => {
		renderWithProviders(
			<AppRouterContextProviderMock router={{}}>
				<DetailedCard />
			</AppRouterContextProviderMock>,
			{
				preloadedState: {
					cards: { activeCard: { category: 'people', id: '1' } },
				},
			},
		);
	});

	it('renders loader when loading data', async () => {
		expect(screen.getByText('Loading...')).toBeInTheDocument();
	});

	it('renders correct data when come status ok', async () => {
		expect(
			await screen.findByRole('heading', { name: /luke/i }),
		).toBeInTheDocument();
	});

	it.skip('renders "something go wrong" if 404', async () => {
		expect(await screen.findByText(/something go wrong/i)).toBeInTheDocument();
	});
});
