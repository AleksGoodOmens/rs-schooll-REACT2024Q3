import Categories from '@/components/categories/Categories';
import CategoryLayout from '@/components/categoryLayout/CategoryLayout';
import SearchBar from '@/components/searchBar/SearchBar';
import { usePathname } from 'next/navigation';

const CategoryPage = () => {
	const pathName = usePathname();
	return (
		<>
			<CategoryLayout>
				{pathName.endsWith('category') && (
					<div className='text-center'>
						please choose category from the list above
					</div>
				)}
			</CategoryLayout>
		</>
	);
};

export default CategoryPage;
