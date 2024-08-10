import { NavCategories } from '../../components';

export const generateMetaData = () => {};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<NavCategories />
			{children}
		</>
	);
}
