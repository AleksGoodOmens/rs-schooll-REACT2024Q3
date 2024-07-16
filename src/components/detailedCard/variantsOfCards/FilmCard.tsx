import { useParams } from 'react-router-dom';

import { IFilm } from '../../../utils/interfaces/interfaces';

import styles from './styles.module.css';
import useAsyncGetItem from '../../../utils/hooks/useGetAsyncItem';
import Loader from '../../loader/loader';

const FilmCard = () => {
	const { id } = useParams();
	const { data, isLoading } = useAsyncGetItem<IFilm>(`films/${id}`);

	if (!id) {
		return;
	}

	return (
		<>
			{isLoading && <Loader />}
			{data && (
				<article
					className={`${styles.box} `}
					key={data.title}
				>
					<div>
						<h2>{data.title}</h2>
						<h3>Description</h3>
						<div className={styles['content']}>
							<div>
								director: <span>{data.director}</span>
							</div>
							<div>
								edited: <span>{data.edited}</span>
							</div>
							<div>
								episode_id: <span>{data.episode_id}</span>
							</div>
							<div>
								opening_crawl: <span>{data.opening_crawl}</span>
							</div>
							<div>
								producer: <span>{data.producer}</span>
							</div>
							<div>
								release_date: <span>{data.release_date}</span>
							</div>
						</div>
					</div>
				</article>
			)}
		</>
	);
};

export default FilmCard;
