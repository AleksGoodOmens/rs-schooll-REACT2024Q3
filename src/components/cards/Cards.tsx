import styles from './styles.module.css';
import Banner from '../banner/banner';
import Card from '../card/Card';
import { ICard } from '../../store/slices/interfaces';
const Cards = ({ cards }: { cards: ICard[] }) => {
	return (
		<section className={`fadeIn ${styles['items']}`}>
			{cards.length === 0 && <Banner>Nothing found</Banner>}

			{cards.map((card) => (
				<Card
					key={card.url}
					card={card}
					isInFavorite={false}
					isActive={false}
				/>
			))}
		</section>
	);
};

export default Cards;
