import { HTag, Input } from '../../components';

export const Uncontrolled = () => {
	return (
		<>
			<HTag value={1}>Uncontrolled form</HTag>
			<form>
				<Input />
			</form>
		</>
	);
};
