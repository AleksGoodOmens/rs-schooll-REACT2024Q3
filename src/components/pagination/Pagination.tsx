import { FunctionComponent } from 'react';
import styles from './styles.module.css';

interface PaginationProps {
	disabledPrev: boolean;
	disabledNext: boolean;
	handleChangePageNumber: (n: number) => void;
	currentPage: number;
	count: number;
}

const Pagination: FunctionComponent<PaginationProps> = ({
	handleChangePageNumber,
	disabledNext,
	disabledPrev,
	currentPage,
	count,
}) => {
	return (
		<div className={styles['pagination']}>
			<button
				disabled={disabledPrev}
				onClick={() => handleChangePageNumber(-1)}
			>
				prev
			</button>
			<div className={styles['info']}>
				<div className={styles['info__item']}>
					Total cards: <span>{count}</span>
				</div>
				<div className={styles['info__item']}>
					Pages:
					<span>
						{currentPage}/{Math.ceil(count / 10)}
					</span>
				</div>
			</div>
			<button
				disabled={disabledNext}
				onClick={() => handleChangePageNumber(1)}
			>
				next
			</button>
		</div>
	);
};

export default Pagination;
