import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { changePage } from '../../store/slices/cards.slice';

import classnames from 'classnames';
import styles from './styles.module.css';
import { cardSelector } from '../../store/slices/selectors';

const Pagination = () => {
	const dispatch = useAppDispatch();
	const { totalPages, page, totalCards } = useAppSelector(cardSelector);

	const handleChangePage = (v: number) => {
		if (v === -1) {
			if (page > 0) {
				dispatch(changePage(v));
			}
		} else {
			if (page < totalPages) dispatch(changePage(v));
		}
	};

	return (
		<nav
			className={styles['pagination']}
			aria-label="Pagination Navigation"
		>
			<ul className={styles['pagination__list']}>
				<li className={styles['pagination__item']}>
					<button
						disabled={page === 1}
						onClick={() => {
							handleChangePage(-1);
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
						disabled={totalPages <= page}
						onClick={() => handleChangePage(1)}
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
