import '/src/styles/globals.css';
import type { AppProps } from 'next/app';
import {
	createContext,
	ReactElement,
	ReactNode,
	useEffect,
	useState,
} from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import useLocalStorage_v2 from '../utils/hooks/UseLocalStorage_v2';
import AppLayout from '../components/layout/AppLayout';
import { wrapper } from '../store';
import { useRouter } from 'next/router';
import Loader from '../components/loader/loader';

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
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	useEffect(() => {
		const handleStart = () => setLoading(true);
		const handleComplete = () => setLoading(false);

		router.events.on('routeChangeStart', handleStart);
		router.events.on('routeChangeComplete', handleComplete);
		router.events.on('routeChangeError', handleComplete);

		return () => {
			router.events.off('routeChangeStart', handleStart);
			router.events.off('routeChangeComplete', handleComplete);
			router.events.off('routeChangeError', handleComplete);
		};
	}, [router.events]);

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
			<AppLayout>
				{loading ? <Loader /> : getLayout(<Component {...pageProps} />)}
			</AppLayout>
		</ThemeContext.Provider>
	);
}

export default wrapper.withRedux(App);
