import { ICard } from '../../types';
import { Banner } from '../banner/Banner';
import { Card } from '../card/Card';
import styles from './styles.module.css';

interface CardsProps {
	cards: ICard[];
}
export const Cards = ({ cards }: CardsProps) => {
	return (
		<section className={`fadeIn ${styles['items']}`}>
			{!cards ? (
				<Banner>something go wrong</Banner>
			) : cards.length === 0 ? (
				<Banner>Nothing found</Banner>
			) : (
				cards.map((card) => (
					<Card
						key={card.url}
						card={card}
					/>
				))
			)}
		</section>
	);
};
