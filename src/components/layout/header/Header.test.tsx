import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { createContext, useContext } from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

const mockContext = ['dark', vi.fn()];
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

describe('Header', () => {
	it('header is rendered at the page with proper aria-label', () => {
		render(
			<MemoryRouter initialEntries={['/']}>
				<Routes>
					<Route
						path="/"
						element={
							<MockProvider>
								<Header />
							</MockProvider>
						}
					/>
				</Routes>
			</MemoryRouter>,
		);

		const loadingText = screen.getByRole('banner', {
			name: 'AmensGood navigation header',
		});

		expect(loadingText).toBeInTheDocument();
	});
});
