import { IValues } from '../../store/slices/inputs.types.interface';
import { HTag } from '../HTag/HTag';

import styles from './styles.module.css';

export const Tile = (data: IValues) => {
	const { age, country, email, gender, name, password, picture64 } = data;

	return (
		<div className={styles['wrapper']}>
			<div className={styles['box']}>
				<img
					src={picture64}
					alt="picture in base64 format"
					width={100}
					height={100}
				/>
				<div>
					<div>
						Hi - <strong>{name}</strong>
					</div>
					<div>
						age - <strong>{age}</strong>
					</div>
					<div>
						From - <strong>{country}</strong>
					</div>
				</div>
			</div>

			<div>
				You say that your email is - <strong>{email}</strong>
			</div>
			<div>
				You say that your gender is - <strong>{gender}</strong>
			</div>
			<div>
				You say that your password is - <strong>{password}</strong>
			</div>

			<HTag value={2}> Now I know who you are!</HTag>
		</div>
	);
};
