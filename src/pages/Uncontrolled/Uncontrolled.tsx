import classNames from 'classnames';
import { HTag, Input } from '../../components';
import formStyles from './Uncontrolled.module.css';

import { SubmitHandler, useForm } from 'react-hook-form';

interface IForm {
	name: string;
	age: number;
	email: string;
	password: string;
	confirm_password: string;
	gender: 'male' | 'female';
	terms: boolean;
	pic: string;
}

export const Uncontrolled = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<IForm>();

	const onSubmit: SubmitHandler<IForm> = (data) => {
		const file = data.pic[0];
		const reader = new FileReader();
		const base64String = '';

		reader.onloadend = () => {
			const base64Pic = reader.result;
			console.log(base64Pic);
			// Сохранение в Redux Store
		};
		console.log(file);
		console.log({ ...data, pic: base64String });
	};

	return (
		<>
			<HTag value={1}>Uncontrolled form</HTag>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className={classNames(formStyles['form'])}
				noValidate
			>
				<fieldset>
					<label htmlFor="name">Type your name</label>
					<Input
						{...register('name', {
							required: true,
							pattern: {
								value: /^[A-Z][a-z_-]{3,19}$/,
								message:
									'The name should start with a capital letter and no numbers in the name',
							},
							minLength: {
								value: 3,
								message: 'The name should be at least 3 symbols',
							},
						})}
					/>
					<p>{errors.name?.message}</p>
				</fieldset>
				<fieldset>
					<label htmlFor="age">Type your age</label>
					<Input
						{...register('age', {
							required: true,
							min: { value: 12, message: 'Your age should be over 12' },
						})}
						type="number"
					/>
					<p>{errors.age?.message}</p>
				</fieldset>
				<fieldset>
					<label htmlFor="email">Type your email</label>
					<Input
						{...register('email', {
							required: {
								value: true,
								message: 'Please type your email',
							},
							pattern: {
								value: /[^@]+@[^@]+\.[a-zA-Z]{2,6}/,
								message: 'Please enter a valid email address',
							},
						})}
						type="email"
					/>
					<p>{errors.email?.message}</p>
				</fieldset>
				<fieldset>
					<label htmlFor="password">Type your password</label>
					<Input
						{...register('password', {
							required: { value: true, message: 'Type password' },
							minLength: {
								value: 8,
								message: 'Password should contain at east 8 characters',
							},
							pattern: {
								value:
									/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
								message:
									'Password strength: 1 number, 1  uppercase letter, 1 lowercased letter, 1 special character,',
							},
						})}
						type="password"
					/>
					<p>{errors.password?.message}</p>
				</fieldset>
				<fieldset>
					<label htmlFor="confirm_password">Type your approvePassword</label>
					<Input
						{...register('confirm_password', {
							required: true,
							validate: (val: string) => {
								if (watch('password') != val) {
									return 'Your passwords do no match';
								}
							},
						})}
						type="password"
					/>
					<p>{errors.confirm_password?.message}</p>
				</fieldset>

				<fieldset>
					<label htmlFor="male">I'am male</label>
					<Input
						{...register('gender', {
							required: { value: true, message: 'Please choose your gender' },
						})}
						type="radio"
						value={'male'}
						id="male"
					/>
					<label htmlFor="gender">I'am female</label>
					<Input
						{...register('gender', {})}
						type="radio"
						value={'female'}
						id="female"
					/>
					<p>{errors.gender?.message}</p>
				</fieldset>

				<fieldset>
					<label htmlFor="terms">
						Are you agree with my terms and conditions
					</label>
					<Input
						{...register('terms', {
							required: {
								value: true,
								message:
									'Please confirm that you agree with my terms and conditions',
							},
						})}
						type="checkbox"
						id="terms"
					/>
					<p>{errors.terms?.message}</p>
				</fieldset>

				<fieldset>
					<label>Upload your picture</label>
					<Input
						{...register('pic', {
							required: { value: true, message: 'Please upload the picture' },
							validate: {},
						})}
						name="pic"
						type="file"
					/>
					<p>{errors.pic?.message}</p>
				</fieldset>

				{/*<select>
					<option value="Russia">Russia</option>
					<option value="uk">uk</option>
					<option value="usa">usa</option>
				</select> */}
				<button>submit form</button>
			</form>
		</>
	);
};
