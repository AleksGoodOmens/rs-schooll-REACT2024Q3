import { useParams } from 'react-router-dom';

import { IPlanet } from '../../../utils/interfaces/interfaces';

import styles from './styles.module.css';
import useAsyncGetItem from '../../../utils/hooks/useGetAsyncItem';
import Loader from '../../loader/loader';

const PlanetCard = () => {
	const { id } = useParams();
	const { data, isLoading } = useAsyncGetItem<IPlanet>(`planets/${id}`);

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
								climate: <span>{data.climate}</span>
							</div>
							<div>
								diameter: <span>{data.diameter}</span>
							</div>
							<div>
								gravity: <span>{data.gravity}</span>
							</div>
							<div>
								orbital_period: <span>{data.orbital_period}</span>
							</div>
							<div>
								population: <span>{data.population}</span>
							</div>
							<div>
								surface_water: <span>{data.surface_water}</span>
							</div>
							<div>
								terrain: <span>{data.terrain}</span>
							</div>
						</div>
					</div>
				</article>
			)}
		</>
	);
};

export default PlanetCard;
