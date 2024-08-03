import { describe, expect, it, vi } from 'vitest';
import { screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import ThemeChanger from './ThemeChanger';

import { ThemeContext } from '../../pages/_app';
import { renderWithProviders } from '../../test/test-utils';

describe('ThemeChanger Component', () => {
	const mockContext = {
		value: 'light',
		change: vi.fn(),
	};

	it('renders a button with correct text', () => {
		renderWithProviders(
			<ThemeContext.Provider value={mockContext}>
				<ThemeChanger />
			</ThemeContext.Provider>,
		);

		const button = screen.getByRole('button');

		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent(/light Side/i);
	});

	it('allows user to click the button', async () => {
		const user = userEvent.setup();
		renderWithProviders(
			<ThemeContext.Provider value={mockContext}>
				<ThemeChanger />
			</ThemeContext.Provider>,
		);

		const button = screen.getByRole('button');
		expect(mockContext.change).not.toBeCalled();

		await user.click(button);

		expect(mockContext.change).toBeCalled();
	});
});

/* 	describe('Theme Changer', () => {
		const mockContext = {
			value: 'light',
			change: vi.fn(),
		};
	
		const user = ue.setup();
	
		beforeEach(() => {
			render(
				<ThemeContext.Provider value={mockContext}>
					<ThemeChanger />
				</ThemeContext.Provider>,
			);
		});
		it('renders a button with correct text', () => {
			const button = screen.getByRole('button');
	
			expect(button).toBeInTheDocument();
			expect(button).toHaveTextContent('Now you are on a lightSide');
		});
	
		it('allows user to click the button', async () => {
			const button = screen.getByRole('button');
			expect(mockContext.change).not.toBeCalled();
	
			await user.click(button);
	
			expect(mockContext.change).toBeCalled();
		});
	}); */
