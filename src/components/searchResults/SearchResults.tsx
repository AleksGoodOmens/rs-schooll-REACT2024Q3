import styles from './styles.module.css';
import PeopleItem from '../peopleItem/PeopleItem';
import { IPeopleItem } from '../../interfaces/interfaces';

interface IProps {
	fade: string;
	data: IPeopleItem[];
}

const SearchResults = ({ fade, data }: IProps) => {
	return (
		<>
			<h2>Search results</h2>

			<div className={`${styles.flex} ${fade}`}>
				{data.map((item) => (
					<PeopleItem
						key={item.name}
						{...item}
					/>
				))}
			</div>
		</>
	);
};

export default SearchResults;
