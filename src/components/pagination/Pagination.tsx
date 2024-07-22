import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { changePage } from '../../store/slices/cards.slice';

import classnames from 'classnames';
import styles from './styles.module.css';

const Pagination = () => {
	const dispatch = useAppDispatch();
	const { next, previous, totalPages, page, totalCards } = useAppSelector(
		(state) => state.cards,
	);

	return (
		<nav
			className={styles['pagination']}
			aria-label="Pagination Navigation"
		>
			<ul className={styles['pagination__list']}>
				<li className={styles['pagination__item']}>
					<button
						disabled={!previous}
						onClick={() => {
							if (page > 0) dispatch(changePage(-1));
						}}
						aria-label="Previous page"
					>
						Prev
					</button>
				</li>
				<li className={classnames(styles['pagination__item'], styles['info'])}>
					<div className={styles['info__item']}>
						Total cards: <span>{totalCards}</span>
					</div>
					<div className={styles['info__item']}>
						Pages:
						<span>
							{page}/{totalPages}
						</span>
					</div>
				</li>
				<li className={styles['pagination__item']}>
					<button
						disabled={!next}
						onClick={() => {
							if (page < totalPages) dispatch(changePage(1));
						}}
						aria-label="Next page"
					>
						Next
					</button>
				</li>
			</ul>
		</nav>
	);
};

export default Pagination;
