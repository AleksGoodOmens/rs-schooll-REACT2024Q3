import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { changePage } from '../../store/slices/cards.slice';
import styles from './styles.module.css';

const Pagination = () => {
	const dispatch = useAppDispatch();
	const { next, previous, totalPages, page, totalCards } = useAppSelector(
		(state) => state.cards,
	);

	return (
		<div className={styles['pagination']}>
			<button
				disabled={!previous}
				onClick={() => {
					if (page > 0) dispatch(changePage(-1));
				}}
			>
				prev
			</button>
			<div className={styles['info']}>
				<div className={styles['info__item']}>
					Total cards: <span>{totalCards}</span>
				</div>
				<div className={styles['info__item']}>
					Pages:
					<span>
						{page}/{totalPages}
					</span>
				</div>
			</div>
			<button
				disabled={!next}
				onClick={() => {
					if (page < totalPages) dispatch(changePage(1));
				}}
			>
				next
			</button>
		</div>
	);
};

export default Pagination;
