import { NavLink } from 'react-router-dom';
import { IPeopleItem } from '../../interfaces/interfaces';

import styles from './styles.module.css';

interface IPeopleProps {
	item: IPeopleItem;
	category: string;
}

const PeopleItem = ({ item, category }: IPeopleProps) => {
	return (
		<article
			className={`${styles.box} fadeIn`}
			key={item.name}
		>
			<NavLink to={`/${category}/${item.name} `}>
				<h2>{item.name}</h2>
				<dl>
					<dt>Description</dt>
					<dd>height: {item.height}</dd>
					<dd>gender: {item.gender}</dd>
					<dd>eyes: {item.eye_color}</dd>
					<dd>hair: {item.hair_color}</dd>
					<dd>skin: {item.skin_color}</dd>
					<dd>year: {item.birth_year}</dd>
					<dd>mass: {item.mass}</dd>
				</dl>
			</NavLink>
		</article>
	);
};

export default PeopleItem;
