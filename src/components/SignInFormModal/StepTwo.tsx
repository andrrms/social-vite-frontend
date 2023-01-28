import { FC } from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import ThemeButton from '../ThemeButton';
import ThemeInput from '../ThemeInput';
import { Form, Title } from './styles';
import { SignInFormDataStepTwo, StepFormProps } from './types';

const signInFormSchema: yup.SchemaOf<SignInFormDataStepTwo> = yup
	.object()
	.shape({
		username: yup
			.string()
			.required('Nome obrigatório')
			.min(5, 'Nome de usuário deve ter no mínimo 5 caracteres')
			.max(24, 'Nome de usuário pode ter no máximo 24 caracteres')
			.matches(
				/^[a-zA-Z0-9_]+$/,
				'Nome de usuário deve conter apenas letras, números e _'
			),
		password: yup
			.string()
			.required('Senha obrigatória')
			.min(8, 'Senha deve ter no mínimo 8 caracteres')
			.matches(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
				'Senha deve conter pelo menos uma letra maiúscula, uma minúscula, um número e um caractere especial'
			),
	});

const StepTwo: FC<StepFormProps> = ({
	setUserData,
	userData,
	handleSignIn,
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignInFormDataStepTwo>({
		resolver: yupResolver(signInFormSchema),
		reValidateMode: 'onBlur',
	});

	function onSignIn(data: SignInFormDataStepTwo) {
		setUserData({ ...userData, ...data });
		handleSignIn?.(data);
	}

	return (
		<Form onSubmit={handleSubmit(onSignIn)}>
			<Title>Cadastro</Title>
			<p>Agora vamos definir um nome de usuário e senha</p>
			<ThemeInput
				{...register('username')}
				type="text"
				defaultValue={userData?.username}
				placeholder="Nome de usuário"
				error={!!errors.username}
				hint={errors.username?.message}
			/>
			<ThemeInput
				{...register('password')}
				type="password"
				defaultValue={userData?.password}
				placeholder="Senha"
				error={!!errors.password}
				hint={errors.password?.message}
			/>
			<ThemeButton type="submit" extend large primary>
				Cadastrar
			</ThemeButton>
		</Form>
	);
};

export default StepTwo;
