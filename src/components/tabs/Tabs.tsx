import { useEffect } from 'react';
import useGetData from '../../hooks/useGetData';
import { NavLink } from 'react-router-dom';

import styles from './styles.module.css';

const Tabs = () => {
	const { isLoading, data, fetchData } = useGetData<string>();

	useEffect(() => {
		fetchData({});
	}, [fetchData]);

	return (
		<>
			{isLoading && <div>tabs Loading...</div>}
			{data && (
				<nav className={styles['flex']}>
					{data.map((link) => (
						<NavLink
							key={link}
							to={`/${link}`}
						>
							{link}
						</NavLink>
					))}
				</nav>
			)}
		</>
	);
};

export default Tabs;
