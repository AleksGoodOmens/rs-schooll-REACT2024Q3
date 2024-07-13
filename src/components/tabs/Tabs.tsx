import { NavLink } from 'react-router-dom';

import styles from './styles.module.css';
import useGetTabs from '../../utils/hooks/useGetTabs';
import { FunctionComponent } from 'react';

interface TabsProps {
	setCategory: (value: string) => void;
}

const Tabs: FunctionComponent<TabsProps> = ({ setCategory }) => {
	const { isLoading, data } = useGetTabs();

	return (
		<>
			<nav className={styles['flex']}>
				{isLoading && <div>tabs Loading...</div>}
				{data &&
					data.map((link) => (
						<NavLink
							onClick={() => setCategory(link)}
							className={({ isActive }) =>
								`${styles['link']} ${isActive ? styles['active'] : ''}`
							}
							key={link}
							to={`categories/${link}/`}
						>
							{link}
						</NavLink>
					))}
			</nav>
		</>
	);
};

export default Tabs;
