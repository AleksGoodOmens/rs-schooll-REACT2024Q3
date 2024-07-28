import { CSVLink } from 'react-csv';
import { useAppSelector } from '../../store/hooks/hooks';

import styles from './styles.module.css';
import { FunctionComponent } from 'react';

interface UnSureProps {
	setSure: (b: boolean) => void;
}

const UnSure: FunctionComponent<UnSureProps> = ({ setSure }) => {
	const { favoriteCards } = useAppSelector((state) => state.cards);

	const fileName = `${favoriteCards.length}-starWars_characters.csv`;

	return (
		<>
			<div className={styles['center']}>
				<span
					aria-label={`amount of favorite cards = ${favoriteCards.length}`}
					className={styles['value']}
				>
					{favoriteCards.length}
				</span>
				<div>
					{favoriteCards.length > 1 ? 'Cards are' : 'Card is'}
					<br /> selected
				</div>
			</div>
			<div className={styles['box']}>
				<button
					className={styles['button']}
					onClick={() => setSure(true)}
				>
					Unselect all
				</button>
				<CSVLink
					className={styles['download']}
					data={favoriteCards}
					filename={fileName}
				>
					Download favorite
				</CSVLink>
			</div>
		</>
	);
};

export default UnSure;
