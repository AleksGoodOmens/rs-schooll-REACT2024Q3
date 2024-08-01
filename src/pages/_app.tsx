import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { setupStore } from '@/store/store';
import useLocalStorage_v2 from '@/utils/hooks/UseLocalStorage_v2';
import { createContext } from 'react';
import { Provider } from 'react-redux';
import Head from 'next/head';
import AppLayout from '@/components/layout/AppLayout';

export const ThemeContext = createContext<{
	value: string;
	change: () => void;
}>({
	value: 'light',
	change: () => {},
});

const store = setupStore();

export default function App({ Component, pageProps }: AppProps) {
	const [storedTheme, setStoredTheme] = useLocalStorage_v2('theme', 'Dark');

	const handleChangeTheme = () => {
		if (!storedTheme) {
			return setStoredTheme('theme', 'Light');
		}

		storedTheme === 'Light'
			? setStoredTheme('theme', 'Dark')
			: setStoredTheme('theme', 'Light');
	};

	return (
		<Provider store={store}>
			<ThemeContext.Provider
				value={{ value: storedTheme || 'Dark', change: handleChangeTheme }}
			>
				<Head>
					<title>Star wars - wiki by AmensGood next.js</title>
					<link
						rel='icon'
						href='/favicon.ico'
					/>
				</Head>

				<AppLayout>
					<Component {...pageProps} />
				</AppLayout>
			</ThemeContext.Provider>
		</Provider>
	);
}
