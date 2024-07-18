import { NavLink } from 'react-router-dom';

import { useGetCategoriesQuery } from '../../store/services/starWarsApi';
import { useAppDispatch } from '../../store/hooks/hooks';
import {
	resetPage,
	setActiveCategory,
	setSearchValue,
} from '../../store/slices/slices';

import styles from './styles.module.css';

const Tabs = () => {
	const { data, isError, isLoading } = useGetCategoriesQuery('');

	const dispatch = useAppDispatch();

	const handleChangeCategory = (link: string) => {
		dispatch(resetPage());
		dispatch(setSearchValue(''));
		dispatch(setActiveCategory(link));
	};

	if (data) {
		return (
			<nav className={styles['flex']}>
				{data.map((link) => (
					<NavLink
						onClick={() => handleChangeCategory(link)}
						className={({ isActive }) =>
							`${styles['link']} ${isActive ? styles['active'] : ''}`
						}
						key={link}
						to={`${link}/`}
					>
						{link}
					</NavLink>
				))}
			</nav>
		);
	}

	if (isLoading) return <div>tabs Loading...</div>;

	if (isError) return <div>something go wrong</div>;

	if (!data) return <div>Server have problem, please come back soon</div>;
};

export default Tabs;
