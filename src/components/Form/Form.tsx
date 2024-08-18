import { FunctionComponent } from 'react';
import { CountryAutoComplete } from '../AutoSelect/CountryAutoComplete';
import { useFormContext } from 'react-hook-form';
import {
	setControlledValues,
	setShowPassword,
	showPasswordSelector,
	useAppDispatch,
	useAppSelector,
} from '../../store';
import { Input } from '../Input/Input';
import { IValues } from '../../store/slices/inputs.types.interface';
import { convertBase64 } from '../../utils';

interface FormProps {}

const Form: FunctionComponent<FormProps> = () => {
	const { handleSubmit } = useFormContext<IValues>();

	const showPassword = useAppSelector(showPasswordSelector);
	const dispatch = useAppDispatch();

	const onSubmit = async (data: IValues) => {
		if (!data.picture) return;

		const pic64 = (await convertBase64(data.picture[0])) as string;
		dispatch(setControlledValues({ ...data, picture64: pic64 }));
	};

	const passwordShow = () => {
		dispatch(setShowPassword());
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Input name="name" />
			<Input
				name="age"
				type="number"
			/>
			<Input
				name="email"
				type="email"
			/>
			<div>
				<Input
					name="password"
					type={showPassword ? 'text' : 'password'}
				/>

				<Input
					name="confirm_password"
					type={showPassword ? 'text' : 'password'}
				/>
			</div>
			<div>
				<Input
					name="gender"
					type="radio"
					value={'male'}
					id="male"
				/>
				<Input
					name="gender"
					type="radio"
					value={'female'}
					id="female"
				/>
			</div>
			<Input
				name="terms"
				type="checkbox"
				id="terms"
			/>

			<Input
				name="picture"
				type="file"
			/>
			<CountryAutoComplete />
			<button
				type="button"
				onClick={passwordShow}
			>
				show password
			</button>

			<button type="submit">submit</button>
		</form>
	);
};

export default Form;
