import { describe, expect, it, vi, beforeEach } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../test-utils';
import { AppRouterContextProviderMock } from '../AppRouterContextProviderMock';
import DetailedCardPage from '../../app/[category]/[id]/page';

vi.mock('next/router', () => ({
	useRouter: () => ({
		push: vi.fn(),
		query: { category: 'people', id: '1' },
	}),
}));

describe.todo('DetailedPage', () => {
	beforeEach(() => {
		renderWithProviders(
			<AppRouterContextProviderMock router={{}}>
				<DetailedCardPage />
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
