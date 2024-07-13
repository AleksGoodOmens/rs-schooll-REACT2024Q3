import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import useSearchData from '../../utils/hooks/useSearchData';
import Loader from '../loader/loader';
import Cards from '../cards/Cards';
import Pagination from '../pagination/Pagination';

import { IPerson } from '../../utils/interfaces/interfaces';

import styles from './styles.module.css';

const Categories = () => {
	const { dynamicCategory, id } = useParams();

	const navigate = useNavigate();

	const location = useLocation();
	const { data, isLoading, fetchData } = useSearchData<IPerson>();

	const [currentPage, setCurrentPage] = useState<number>(1);
	const [currentCategory, setCurrentCategory] = useState(dynamicCategory);

	useEffect(() => {
		let search: string | undefined;
		if (location.search) {
			search = location.search.split('=')[1];
			setCurrentPage(1);
		}

		if (id) {
			return;
		}

		if (dynamicCategory !== currentCategory) {
			setCurrentCategory(dynamicCategory);
			setCurrentPage(1);
			return;
		}

		if (dynamicCategory)
			fetchData({
				path: dynamicCategory,
				search: search,
				page: currentPage,
			});
		return;
	}, [dynamicCategory, fetchData, currentCategory, location, currentPage, id]);

	const handleChangePageNumber = (v: number) => {
		setCurrentPage((prev) => prev + v);
	};

	const handleUnfreeze = () => {
		if (id) {
			navigate(`${currentCategory}/`);
		}
	};

	return (
		<div>
			{!dynamicCategory && <h3>Please chose any category</h3>}
			<div
				className={id && styles['swap']}
				onClick={handleUnfreeze}
			>
				{data && (
					<div>
						<Pagination
							count={data.count}
							currentPage={currentPage}
							disabledNext={!data.next || isLoading}
							disabledPrev={!data.previous || isLoading}
							handleChangePageNumber={handleChangePageNumber}
						/>
						{data && (
							<Cards
								results={data.results}
								dynamicCategory={dynamicCategory}
							/>
						)}
					</div>
				)}

				{id && <Outlet />}
			</div>

			{isLoading && <Loader />}
		</div>
	);
};

export default Categories;
