import { Downloader, NavCategories, SearchBar } from '../../components';

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
