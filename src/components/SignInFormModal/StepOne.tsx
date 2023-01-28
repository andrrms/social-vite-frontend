import { FC } from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import ThemeButton from '../ThemeButton';
import ThemeInput from '../ThemeInput';
import { Form, Subtitle, Title } from './styles';
import { SignInFormDataStepOne, StepFormProps } from './types';

const DATE_18_YEARS_AGO = new Date(
	+new Date() - 18 * 365 * 24 * 60 * 60 * 1000
);
const signInFormSchema: yup.SchemaOf<SignInFormDataStepOne<Date>> = yup
	.object()
	.shape({
		name: yup.string().required('Nome obrigatório'),
		email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
		birthDate: yup
			.date()
			.required('Data de nascimento obrigatória')
			.max(DATE_18_YEARS_AGO, 'Você deve ter mais de 18 anos'),
	});

const StepOne: FC<StepFormProps> = ({ setStep, setUserData, userData }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignInFormDataStepOne<Date>>({
		resolver: yupResolver(signInFormSchema),
		reValidateMode: 'onBlur',
	});

	function onSignIn(data: SignInFormDataStepOne<Date>) {
		const { birthDate, ...rest } = data;
		const newData = {
			...rest,
			birthDate: birthDate.toISOString().split('T')[0],
		};

		setUserData((data) => ({ ...data, ...newData }));
		setStep((s) => s + 1);
	}

	return (
		<Form onSubmit={handleSubmit(onSignIn)}>
			<Title>Cadastro</Title>
			<p>Vamos começar preenchendo algumas informações básicas</p>
			<ThemeInput
				{...register('name')}
				type="text"
				defaultValue={userData?.name}
				placeholder="Nome"
				error={!!errors.name}
				hint={errors.name?.message}
			/>
			<ThemeInput
				{...register('email')}
				type="email"
				defaultValue={userData?.email}
				placeholder="Endereço de e-mail"
				error={!!errors.email}
				hint={errors.email?.message}
			/>
			<Subtitle>Data de nascimento</Subtitle>
			<p className="hint">
				Isso não será exibido publicamente. Confirme sua própria idade, mesmo se
				esta conta for de empresa, de um animal de estimação ou outros.
			</p>
			<ThemeInput
				{...register('birthDate')}
				type="date"
				placeholder="Data de nascimento"
				defaultValue={
					userData?.birthDate || new Date().toISOString().split('T')[0]
				}
				error={!!errors.birthDate}
				hint={errors.birthDate?.message}
			/>
			<ThemeButton type="submit" extend large secondary>
				Continuar
			</ThemeButton>
			<p className="disclaimer">
				Ao continuar, você concorda com nossos <a href="#">Termos de uso</a>,
				com a <a href="#">Política de Privacidade</a> e com o{' '}
				<a href="#">Uso de Cookies</a>. O Bluebird pode usar suas informações de
				contato, inclusive seu endereço de e-mail e seu número de telefone, para
				os fins descritos na nossa Política de Privacidade.
			</p>
		</Form>
	);
};

export default StepOne;
