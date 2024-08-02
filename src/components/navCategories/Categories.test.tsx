import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { cleanup, screen } from '@testing-library/react';
import Categories from './NavCategories';
import { renderWithProviders } from '../../test/test-utils';
import userEvent from '@testing-library/user-event';

describe('Categories', () => {
	beforeEach(() => {
		renderWithProviders(<Categories />);
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

	it('after click should on first element should add class "active"', async () => {
		renderWithProviders(<Categories />);

		const buttons = await screen.findAllByRole('button', { name: /mock/i });

		buttons.forEach((button) => {
			expect(button).not.toHaveClass(/active/i);
		});

		await userEvent.click(buttons[0]);

		expect(buttons[0]).toHaveClass(/active/i);
	});
});
