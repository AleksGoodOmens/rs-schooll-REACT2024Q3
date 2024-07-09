import { IPeopleItem } from '../../interfaces/interfaces';

import styles from './styles.module.css';

const PeopleItem = (item: IPeopleItem) => {
	return (
		<article
			className={styles.box}
			key={item.name}
		>
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
		</article>
	);
};

export default PeopleItem;
