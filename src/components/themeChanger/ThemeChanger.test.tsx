import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ThemeChanger from './ThemeChanger';
import { ThemeContext } from '../app/App';
import ue from '@testing-library/user-event';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// Mock the useOutletContext hook

const mockContext = {
	value: 'light',
	change: vi.fn(),
};

const user = ue.setup();

beforeEach(() => {
	render(
		<RouterProvider
			router={createBrowserRouter([
				{
					path: '/',
					element: (
						<ThemeContext.Provider value={mockContext}>
							<ThemeChanger />
						</ThemeContext.Provider>
					),
				},
			])}
		/>,
	);
});

describe('Theme Changer', () => {
	it('renders a button with correct text', () => {
		const button = screen.getByRole('button');

		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent('Now you are on a lightSide');
	});

	it('allows user to click the button', async () => {
		screen.debug();
		const button = screen.getByRole('button');
		expect(mockContext.change).not.toBeCalled();

		await user.click(button);

		expect(mockContext.change).toBeCalled();
	});
});
