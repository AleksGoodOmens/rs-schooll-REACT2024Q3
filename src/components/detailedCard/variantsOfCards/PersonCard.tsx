import { useParams } from 'react-router-dom';

import { IPerson } from '../../../utils/interfaces/interfaces';

import styles from './styles.module.css';
import useAsyncGetItem from '../../../utils/hooks/useGetAsyncItem';
import Loader from '../../loader/loader';

const PersonCard = () => {
	const { id } = useParams();
	const { data, isLoading } = useAsyncGetItem<IPerson>(`people/${id}`);

	if (!id) {
		return;
	}

	return (
		<>
			{isLoading && <Loader />}
			{data && (
				<article
					className={`${styles.box} `}
					key={data.name}
				>
					<div>
						<h2>{data.name}</h2>
						<h3>Description</h3>
						<div className={styles['content']}>
							<div>
								gender: <span>{data.gender}</span>
							</div>
							<div>
								skin_color: <span>{data.skin_color}</span>
							</div>
							<div>
								mass: <span>{data.mass}</span>
							</div>
							<div>
								population: <span>{data.height}</span>
							</div>
							<div>
								eye_color: <span>{data.eye_color}</span>
							</div>
							<div>
								birth_year: <span>{data.birth_year}</span>
							</div>
						</div>
					</div>
				</article>
			)}
		</>
	);
};

export default PersonCard;
