import cn from 'classnames';

import fileInput from './fileInput.module.css';
import { useFormContext } from 'react-hook-form';

export const FileInput = () => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<>
			<label
				className={fileInput['label']}
				htmlFor="picture"
			>
				Upload Picture
				<input
					className={cn(fileInput['input'], {
						[fileInput['input-error']]: errors,
					})}
					type="file"
					id="picture"
					{...register('picture')}
				/>
			</label>

			<p
				className={cn(fileInput['error'], {
					[fileInput['error-active']]: errors['picture'],
				})}
			>
				{errors['picture']?.message ? String(errors['picture'].message) : ''}
			</p>
		</>
	);
};
