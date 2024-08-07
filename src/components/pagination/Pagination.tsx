import classnames from 'classnames';
import styles from './styles.module.css';
import {} from '../../store/services/starWarsApi';
import { useRouter } from 'next/router';

const Pagination = ({
	count,
	page,
}: {
	count: number;
	page: string | number;
}) => {
	const router = useRouter();
	const totalPages = Math.ceil(count / 10);

	const handleChangePage = (v: number) => {
		if (v === -1) {
			if (+page > 0) {
				router.push({
					query: {
						category: router.query['category'],
						page: +page + v,
						search: router.query['search'],
					},
				});
			}
		} else {
			if (+page < totalPages)
				router.push({
					query: {
						category: router.query['category'],
						page: +page + v,
						search: router.query['search'],
					},
				});
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
						className={styles['control__btn']}
						disabled={page === '1'}
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
						Total cards: <span>{count}</span>
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
						className={styles['control__btn']}
						disabled={totalPages <= +page}
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
