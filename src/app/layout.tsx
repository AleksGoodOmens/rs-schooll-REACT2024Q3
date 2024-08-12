'use client';
import './global.css';

import { setupStore } from '../store';

import { Provider } from 'react-redux';
import { Footer, Header } from '../components';
import { ThemeProvider } from '../context';

export const generateMetaData = () => {
	return {
		title: 'star wars',
	};
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<Provider store={setupStore()}>
					<ThemeProvider theme="Dark">
						<Header />
						<main className="main">{children}</main>
						<Footer />
					</ThemeProvider>
				</Provider>
			</body>
		</html>
	);
}
