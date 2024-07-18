import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { createContext, useContext } from 'react';
import ThemeChanger from './ThemeChanger';
import ue from '@testing-library/user-event';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

// Mock the useOutletContext hook
const setValue = () => 'Light';

const value = setValue();

const mockContext = [value, vi.fn(setValue)];
const MockOutletContext = createContext(mockContext);

const MockProvider = ({ children }: { children: JSX.Element }) => {
	return (
		<MockOutletContext.Provider value={mockContext}>
			{children}
		</MockOutletContext.Provider>
	);
};

vi.mock('react-router-dom', async (importOriginal) => {
	const actual = await importOriginal<object>();
	return {
		...actual,
		useOutletContext: () => useContext(MockOutletContext),
	};
});

const user = ue.setup();

describe('Theme Changer', () => {
	afterEach(() => {
		cleanup();
	});
	it('renders a button with correct text', () => {
		render(
			<MemoryRouter initialEntries={['/']}>
				<Routes>
					<Route
						path="/"
						element={
							<MockProvider>
								<ThemeChanger />
							</MockProvider>
						}
					/>
				</Routes>
			</MemoryRouter>,
		);
		const button = screen.getByRole('button');

		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent('Now you are on a LightSide');
	});

	it('allows user to click the button', async () => {
		render(
			<MemoryRouter initialEntries={['/']}>
				<Routes>
					<Route
						path="/"
						element={
							<MockProvider>
								<ThemeChanger />
							</MockProvider>
						}
					/>
				</Routes>
			</MemoryRouter>,
		);
		const button = screen.getByRole('button');

		expect(mockContext[1]).not.toBeCalled();
		await user.click(button);
		expect(mockContext[1]).toBeCalled();
	});
});
