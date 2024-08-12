import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';

import { renderWithProviders } from '../../test/test-utils';
import { ThemeChanger } from '../../components';
import { ThemeProvider } from '../../context';

describe('ThemeChanger Component', () => {
	it('renders a button with correct text', () => {
		renderWithProviders(
			<ThemeProvider theme="Light">
				<ThemeChanger />
			</ThemeProvider>,
		);

		const button = screen.getByRole('button');

		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent(/light Side/i);
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
