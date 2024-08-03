// src/pages/404.test.tsx

import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AppRouterContextProviderMock } from '../test/AppRouterContextProviderMock';
import Custom404 from './404';

vi.mock('next/router', () => ({
	useRouter: () => ({
		push: vi.fn(),
	}),
}));

describe('404 NotFound', () => {
	it('user can see that this page not found', () => {
		render(
			<AppRouterContextProviderMock router={{ push: vi.fn() }}>
				<Custom404 />
			</AppRouterContextProviderMock>,
		);

		const loadingText = screen.getByText('page not found');

		expect(loadingText).toBeInTheDocument();
	});
});
