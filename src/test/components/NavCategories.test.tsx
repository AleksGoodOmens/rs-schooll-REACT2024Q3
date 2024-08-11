import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, screen } from '@testing-library/react';
import { renderWithProviders } from '../../test/test-utils';
import { AppRouterContextProviderMock } from '../../test/AppRouterContextProviderMock';
import { NavCategories } from '../../components';

describe.todo('Categories', () => {
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
				<NavCategories
					categories={[`mock`, 'mockTest', 'MOckPass']}
					active={'mockTest'}
				/>
			</AppRouterContextProviderMock>,
		);
	});
	afterEach(() => {
		cleanup();
	});

	it('render correct items on loaded stage', async () => {
		const buttons = await screen.findAllByRole('button', { name: /mock/i });

		expect(buttons.length).toBe(3);
	});
});
