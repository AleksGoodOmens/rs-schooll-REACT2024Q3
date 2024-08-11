import { Downloader, NavCategories, SearchBar } from '../../components';

export const generateMetaData = () => {};

export default function CategoriesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<NavCategories />
			<SearchBar />
			<Downloader />

			{children}
		</>
	);
}
