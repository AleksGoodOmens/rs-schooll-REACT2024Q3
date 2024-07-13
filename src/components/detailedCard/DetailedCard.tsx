import { useNavigate, useParams } from 'react-router-dom';
import PersonCard from './variantsOfCards/PersonCard';
import PlanetCard from './variantsOfCards/PlanetCard';
import FilmCard from './variantsOfCards/FilmCard';
import SpecieCard from './variantsOfCards/SpecieCard';
import VehicleCard from './variantsOfCards/VehicleCard';
import StarshipCard from './variantsOfCards/StarshipCard';

const DetailedCard = () => {
	const { dynamicCategory } = useParams();
	const navigate = useNavigate();

	switch (dynamicCategory) {
		case 'people':
			return <PersonCard />;
		case 'planets':
			return <PlanetCard />;
		case 'films':
			return <FilmCard />;
		case 'species':
			return <SpecieCard />;
		case 'vehicles':
			return <VehicleCard />;
		case 'starships':
			return <StarshipCard />;
		default:
			navigate('/notFound');
	}
};

export default DetailedCard;
