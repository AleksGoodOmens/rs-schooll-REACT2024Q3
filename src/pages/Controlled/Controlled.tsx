import { HTag } from '../../components';

import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../utils';
import Form from '../../components/Form/Form';

export const Controlled = () => {
	const methods = useForm({
		mode: 'onChange',
		resolver: yupResolver(schema),
	});

	return (
		<>
			<HTag value={1}>Controlled form</HTag>
			<FormProvider {...methods}>
				<Form />
			</FormProvider>
		</>
	);
};
