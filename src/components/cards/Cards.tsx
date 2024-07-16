import { NavLink } from 'react-router-dom';
import { FunctionComponent } from 'react';

import styles from './styles.module.css';

interface ICard {
	url: string;
	name?: string;
	title?: string;
}

interface CardsProps {
	results: ICard[];
	dynamicCategory: string | undefined;
}

const Cards: FunctionComponent<CardsProps> = ({ results, dynamicCategory }) => {
	const getId = (s: string) => {
		const regex = /\/(\d+)\/$/;
		const found = s.match(regex);

		const id = found ? found[1] : '';
		return id;
	};

	return (
		<div className={styles['container']}>
			<div className={styles['category']}>
				{results.map((item) => {
					return (
						<NavLink
							className={({ isActive }) =>
								` ${styles['item']} ${isActive ? styles['active'] : ''}`
							}
							key={item.url}
							to={`${dynamicCategory}/${getId(item.url)}`}
						>
							{item.name || item.title}
						</NavLink>
					);
				})}
			</div>
		</div>
	);
};

export default Cards;
