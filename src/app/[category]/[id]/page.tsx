import Link from 'next/link';
import { fetchDetails } from './actions';
import styles from './styles.module.css';
import CategoryPage from '../page';
import { Banner } from '../../../components';
import { detailsDataConverter } from '../../../utils';

interface DetailedCardPageProps {
	params: {
		category: string;
		id: string;
	};
	searchParams: { page: string; search: string };
}

const DetailedCardPage = async ({
	params,
	searchParams,
}: DetailedCardPageProps) => {
	const detailsData = await fetchDetails({
		category: params.category,
		id: params.id,
	});

	if (!detailsData) return <Banner>Something gor wrong</Banner>;

	return (
		<div className={styles['columns']}>
			<div>
				<CategoryPage
					params={params}
					searchParams={searchParams}
				/>
			</div>
			<article className={`${styles['box']} `}>
				<header className={styles['header']}>
					<span>{detailsData?.title || detailsData?.name}</span>
					<Link
						href={`/${params.category}?page=${searchParams.page}${searchParams.search ? `&search=${searchParams.search}` : ''}`}
						className={styles['close']}
					>
						X
					</Link>
				</header>
				<h3 className={styles['heading']}>Description</h3>
				<div className={styles['content']}>
					{detailsData && detailsDataConverter(detailsData)}
				</div>
			</article>
		</div>
	);
};

export default DetailedCardPage;
