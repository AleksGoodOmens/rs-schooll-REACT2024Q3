import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, screen } from '@testing-library/react';
import NavCategories from './NavCategories';
import { renderWithProviders } from '../../test/test-utils';
import { AppRouterContextProviderMock } from '../../test/AppRouterContextProviderMock';

describe('Categories', () => {
	vi.mock('next/router', () => ({
		useRouter: () => ({
			push: vi.fn(),
			query: { category: 'people' },
		}),
	}));

	const mockRouter = {
		query: {},
		push: vi.fn(),
	};

	beforeEach(() => {
		renderWithProviders(
			<AppRouterContextProviderMock router={mockRouter}>
				<NavCategories />
			</AppRouterContextProviderMock>,
		);
	});
	afterEach(() => {
		cleanup();
	});

	it('render loader on loading stage', async () => {
		const loadingText = screen.getByText('tabs Loading...');

		expect(loadingText).toBeInTheDocument();
	});

	it('render correct items on loaded stage', async () => {
		const buttons = await screen.findAllByRole('button', { name: /mock/i });

		expect(buttons.length).toBe(6);
	});
});
