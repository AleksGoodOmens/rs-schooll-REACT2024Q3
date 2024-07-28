import { describe, expect, it, vi } from 'vitest';
import { screen } from '@testing-library/react';
import ErrorFallBack from './ErrorFallBack';
import { renderWithProviders } from '../../../test/test-utils';
import userEvent from '@testing-library/user-event';

describe('ErrorFallBack', () => {
	it('should render two heading with text', () => {
		renderWithProviders(<ErrorFallBack />);

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
