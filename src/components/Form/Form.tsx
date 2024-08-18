import { FunctionComponent } from 'react';
import { CountryAutoComplete } from '../AutoSelect/CountryAutoComplete';
import { useFormContext } from 'react-hook-form';
import {
	setControlledValues,
	setShowPassword,
	setUnControlledValues,
	showPasswordSelector,
	useAppDispatch,
	useAppSelector,
} from '../../store';
import { Input } from '../Input/Input';
import { IValues } from '../../store/slices/inputs.types.interface';
import { convertBase64 } from '../../utils';

import formStyles from './formStyles.module.css';
import { FileInput } from '../FileInput/FileInput';
import { useNavigate } from 'react-router';
import { RadioInput } from '../radioInput/radioInput';
import { TermsInput } from '../TermsInput/TermsInput';

interface FormProps {
	isControlledForm?: boolean;
}

export const Form: FunctionComponent<FormProps> = ({ isControlledForm }) => {
	const { handleSubmit } = useFormContext<IValues>();
	const navigate = useNavigate();

	const showPassword = useAppSelector(showPasswordSelector);
	const dispatch = useAppDispatch();

	const onSubmit = async (data: IValues) => {
		if (!data.picture) return;

		const pic64 = (await convertBase64(data.picture[0])) as string;

		if (isControlledForm) {
			dispatch(
				setControlledValues({ ...data, picture: undefined, picture64: pic64 }),
			);

			navigate('/main?active=controlled');
		}
		if (!isControlledForm) {
			dispatch(
				setUnControlledValues({
					...data,
					picture: undefined,
					picture64: pic64,
				}),
			);
			navigate('/main?active=unControlled');
		}
	};

	const passwordShow = () => {
		dispatch(setShowPassword());
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={formStyles['form']}
		>
			<fieldset className={formStyles['fieldset']}>
				<Input name="name" />
				<Input name="age" />
				<Input
					name="email"
					type="email"
				/>
			</fieldset>
			<fieldset className={formStyles['fieldset']}>
				<Input
					name="password"
					type={showPassword ? 'text' : 'password'}
				/>

				<Input
					name="confirm_password"
					type={showPassword ? 'text' : 'password'}
				/>
				<button
					type="button"
					onClick={passwordShow}
					className={formStyles['showButton']}
				>
					show password
				</button>
			</fieldset>
			<fieldset className={formStyles['fieldset']}>
				<RadioInput />
			</fieldset>
			<fieldset className={formStyles['fieldset']}>
				<TermsInput />
			</fieldset>

			<fieldset className={formStyles['fieldset']}>
				<FileInput />
			</fieldset>
			<fieldset className={formStyles['fieldset']}>
				<CountryAutoComplete />
			</fieldset>

			<button
				className={formStyles['submitButton']}
				type="submit"
			>
				submit
			</button>
		</form>
	);
};
