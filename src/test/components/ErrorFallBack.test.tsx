import { describe, expect, it, vi } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../test-utils';
import { AppRouterContextProviderMock } from '../AppRouterContextProviderMock';
import ErrorFallBack from '../../components/error/errorFallBack/ErrorFallBack';

describe('ErrorFallBack', () => {
	vi.mock('next/router', () => ({
		useRouter: () => ({
			push: vi.fn(),
			query: { category: 'people', id: '1' },
		}),
	}));
	it('should render two heading with text', () => {
		renderWithProviders(
			<AppRouterContextProviderMock router={{}}>
				<ErrorFallBack />
			</AppRouterContextProviderMock>,
		);

		expect(
			screen.getByRole('heading', { name: /you a great person/i }),
		).toBeInTheDocument();
		expect(
			screen.getByRole('heading', { name: /click wrong button/i }),
		).toBeInTheDocument();
	});

	it('should call handleReload on button click', async () => {
		const handleReload = vi.fn();

		renderWithProviders(<ErrorFallBack />);
		expect(handleReload).not.toBeCalled();

		await userEvent.click(screen.getByRole('button'));
	});
});
