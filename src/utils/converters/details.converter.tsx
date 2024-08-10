import { IDetailedCard } from '../../types';

export const detailsDataConverter = (data: IDetailedCard) => {
	const entries = Object.entries(data).filter(
		([, value]) => !Array.isArray(value),
	);

	return entries.map(([key, value]) => (
		<div key={key}>
			{key.replace(/_/g, ' ')}: <span>{value}</span>
		</div>
	));
};
