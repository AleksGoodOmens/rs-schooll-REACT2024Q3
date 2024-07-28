import { PropsWithChildren, ReactElement } from 'react';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';

import type { AppStore } from '../store/store';
import { setupStore } from '../store/store';

import { MemoryRouter } from 'react-router-dom';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
	preloadedState?: InitialState;
	store?: AppStore;
}

type InitialState = {
	[key: string]: string | string[] | number | boolean | object;
};

export function renderWithProviders(
	ui: ReactElement,
	extendedRenderOptions: ExtendedRenderOptions = {},
) {
	const {
		preloadedState = {},
		// Automatically create a store instance if no store was passed in
		store = setupStore(preloadedState),
		...renderOptions
	} = extendedRenderOptions;

	const Wrapper = ({ children }: PropsWithChildren) => (
		<MemoryRouter>
			<Provider store={store}>{children}</Provider>
		</MemoryRouter>
	);

	// Return an object with the store and all of RTL's query functions
	return {
		store,
		...render(ui, { wrapper: Wrapper, ...renderOptions }),
	};
}
