import { useParams } from 'react-router-dom';

import { IStarship } from '../../../utils/interfaces/interfaces';

import styles from './styles.module.css';
import useAsyncGetItem from '../../../utils/hooks/useGetAsyncItem';
import Loader from '../../loader/loader';

const StarshipCard = () => {
	const { id } = useParams();
	const { data, isLoading } = useAsyncGetItem<IStarship>(`starships/${id}`);

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
								cargo_capacity: <span>{data.cargo_capacity}</span>
							</div>
							<div>
								edited: <span>{data.edited}</span>
							</div>
							<div>
								consumables: <span>{data.consumables}</span>
							</div>
							<div>
								cost_in_credits: <span>{data.cost_in_credits}</span>
							</div>
							<div>
								crew: <span>{data.crew}</span>
							</div>
							<div>
								length: <span>{data.length}</span>
							</div>
							<div>
								manufacturer: <span>{data.manufacturer}</span>
							</div>
							<div>
								max_atmosphering_speed:{' '}
								<span>{data.max_atmosphering_speed}</span>
							</div>
							<div>
								model: <span>{data.model}</span>
							</div>
							<div>
								passengers: <span>{data.passengers}</span>
							</div>
						</div>
					</div>
				</article>
			)}
		</>
	);
};

export default StarshipCard;
