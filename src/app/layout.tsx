'use client';
import './global.css';

import ThemeProvider from '../context/ThemeProvider';
import { setupStore } from '../store';

import { Provider } from 'react-redux';
import { Footer, Header } from '../components';

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
