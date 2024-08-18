import { Form, HTag } from '../../components';

import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../utils';

export const Uncontrolled = () => {
	const methods = useForm({
		mode: 'onSubmit',
		resolver: yupResolver(schema),
	});

	return (
		<section className="section">
			<HTag value={2}>Un Controlled Form</HTag>
			<FormProvider {...methods}>
				<Form />
			</FormProvider>
		</section>
	);
};
