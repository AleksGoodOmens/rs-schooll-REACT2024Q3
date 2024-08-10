'use client';
import './global.css';

import Footer from '../components/header/footer/Footer';
import Header from '../components/header/header/Header';
import ThemeProvider from '../context/ThemeProvider';

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
				<ThemeProvider theme="Dark">
					<Header />
					<main className="main">{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
