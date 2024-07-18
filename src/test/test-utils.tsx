import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { setupStore } from '../store/store';
import type { AppStore } from '../store/store';
import { MemoryRouter } from 'react-router-dom';

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store. For
// future dependencies, such as wanting to test with react-router, you can extend
// this interface to accept a path and route and use those in a <MemoryRouter />
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
	store?: AppStore;
}

function renderWithProviders(
	ui: React.ReactElement,
	{ store = setupStore(), ...renderOptions }: ExtendedRenderOptions = {},
) {
	function Wrapper({ children }: PropsWithChildren<object>): JSX.Element {
		return (
			<Provider store={store}>
				<MemoryRouter>{children}</MemoryRouter>
			</Provider>
		);
	}
	return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export { renderWithProviders };
