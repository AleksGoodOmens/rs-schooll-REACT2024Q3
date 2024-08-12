import { HTag, Input } from '../../components';

export const Controlled = () => {
	return (
		<>
			<HTag value={1}>Controlled form</HTag>
			<form>
				<Input />
			</form>
		</>
	);
};
