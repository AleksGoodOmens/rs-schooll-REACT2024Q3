import { describe, expect, it, vi, beforeEach } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../test-utils';
import { AppRouterContextProviderMock } from '../AppRouterContextProviderMock';
import DetailedCard from '../../pages/[category]/[id]';

vi.mock('next/router', () => ({
	useRouter: () => ({
		push: vi.fn(),
		query: { category: 'people', id: '1' },
	}),
}));

describe('DetailedPage', () => {
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

	it('renders correct data when come status ok', async () => {
		expect(
			await screen.findByRole('heading', { name: /luke/i }),
		).toBeInTheDocument();
	});
});
