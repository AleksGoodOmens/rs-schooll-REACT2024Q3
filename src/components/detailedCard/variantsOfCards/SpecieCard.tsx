import { useParams } from 'react-router-dom';

import { ISpice } from '../../../utils/interfaces/interfaces';

import styles from './styles.module.css';
import useAsyncGetItem from '../../../utils/hooks/useGetAsyncItem';
import Loader from '../../loader/loader';

const SpecieCard = () => {
	const { id } = useParams();
	const { data, isLoading } = useAsyncGetItem<ISpice>(`species/${id}`);

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
								average_height: <span>{data.average_height}</span>
							</div>
							<div>
								edited: <span>{data.edited}</span>
							</div>
							<div>
								average_lifespan: <span>{data.average_lifespan}</span>
							</div>
							<div>
								classification: <span>{data.classification}</span>
							</div>
							<div>
								designation: <span>{data.designation}</span>
							</div>
							<div>
								eye_colors: <span>{data.eye_colors}</span>
							</div>
							<div>
								skin_colors: <span>{data.skin_colors}</span>
							</div>
							<div>
								language: <span>{data.language}</span>
							</div>
						</div>
					</div>
				</article>
			)}
		</>
	);
};

export default SpecieCard;
