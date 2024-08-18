import { Form, HTag } from '../../components';

import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../utils';

export const Controlled = () => {
	const methods = useForm({
		mode: 'onChange',
		resolver: yupResolver(schema),
	});

	return (
		<section className="section">
			<HTag value={2}>Controlled form</HTag>
			<FormProvider {...methods}>
				<Form isControlledForm />
			</FormProvider>
		</section>
	);
};
