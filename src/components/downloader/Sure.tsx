import { FunctionComponent } from 'react';
import { useAppDispatch } from '../../store/hooks/hooks';
import { clearFavoriteCards } from '../../store/slices/cards.slice';

interface SureProps {
	setSure: (b: boolean) => void;
}
const Sure: FunctionComponent<SureProps> = ({ setSure }) => {
	const dispatch = useAppDispatch();
	return (
		<>
			<span>Are you sure?</span>
			<button onClick={() => dispatch(clearFavoriteCards())}>yes</button>
			<button onClick={() => setSure(false)}>no</button>
		</>
	);
};

export default Sure;
