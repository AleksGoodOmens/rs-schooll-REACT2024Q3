'use client';
import classnames from 'classnames';
import styles from './styles.module.css';
import { useRouter } from 'next/navigation';

interface IPaginationProps {
	count: number;
	page: string | number;
	category: string;
	search: string;
}
export const Pagination = ({
	count,
	page,
	category,
	search,
}: IPaginationProps) => {
	const router = useRouter();

	const totalPages = Math.ceil(count / 10);

	const handleChangePage = (v: number) => {
		router.push(
			`/${category}?page=${+page + v}${search ? `&search=${search}` : ''}`,
		);
		// todo correct category
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
