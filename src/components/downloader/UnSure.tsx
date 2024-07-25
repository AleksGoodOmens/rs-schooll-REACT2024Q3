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
			<span aria-label={`amount of favorite cards = ${favoriteCards.length}`}>
				{favoriteCards.length}
			</span>
			<span>{favoriteCards.length > 1 ? 'cards are' : 'card is'} selected</span>
			<button onClick={() => setSure(true)}>Unselect all</button>
			<CSVLink
				className={styles['download']}
				data={favoriteCards}
				filename={fileName}
			>
				Download favorite
			</CSVLink>
		</>
	);
};

export default UnSure;
