import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { setupStore } from '@/store/store';
import useLocalStorage_v2 from '@/utils/hooks/UseLocalStorage_v2';
import { createContext, ReactElement, ReactNode } from 'react';
import { Provider } from 'react-redux';
import Head from 'next/head';
import AppLayout from '@/components/layout/AppLayout';
import { NextPage } from 'next';

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

export const ThemeContext = createContext<{
	value: string;
	change: () => void;
}>({
	value: 'light',
	change: () => {},
});

const store = setupStore();

export default function App({ Component, pageProps }: AppPropsWithLayout) {
	const [storedTheme, setStoredTheme] = useLocalStorage_v2('theme', 'Dark');

	const handleChangeTheme = () => {
		if (!storedTheme) {
			return setStoredTheme('theme', 'Light');
		}

		if (storedTheme === 'Light') {
			setStoredTheme('theme', 'Dark');
		} else setStoredTheme('theme', 'Light');
	};

	const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

	return (
		<Provider store={store}>
			<ThemeContext.Provider
				value={{ value: storedTheme || 'Dark', change: handleChangeTheme }}
			>
				<Head>
					<title>Star wars - wiki by AmensGood next.js</title>
					<link
						rel="icon"
						href="/favicon.ico"
					/>
				</Head>

				<AppLayout>{getLayout(<Component {...pageProps} />)}</AppLayout>
			</ThemeContext.Provider>
		</Provider>
	);
}
