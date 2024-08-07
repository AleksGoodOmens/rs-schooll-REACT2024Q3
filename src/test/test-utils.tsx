import { PropsWithChildren, ReactElement } from 'react';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';

import type { AppStore } from '../store';
import { setupStore } from '../store';

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
		store = setupStore(preloadedState),
		...renderOptions
	} = extendedRenderOptions;

	const Wrapper = ({ children }: PropsWithChildren) => (
		<Provider store={store}>{children}</Provider>
	);

	return {
		store,
		...render(ui, { wrapper: Wrapper, ...renderOptions }),
	};
}
