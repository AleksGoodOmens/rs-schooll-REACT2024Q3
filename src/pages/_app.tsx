import '/src/styles/globals.css';
import type { AppProps } from 'next/app';
import { createContext, ReactElement, ReactNode } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import useLocalStorage_v2 from '../utils/hooks/UseLocalStorage_v2';
import AppLayout from '../components/layout/AppLayout';
import { wrapper } from '../store';

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

export function App({ Component, pageProps }: AppPropsWithLayout) {
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
	);
}

export default wrapper.withRedux(App);
