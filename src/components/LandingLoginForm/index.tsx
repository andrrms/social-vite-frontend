import { FC, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import AppLogo from '../AppLogo';
import AppThemeSelector from '../AppThemeSelector';
import ThemeButton from '../ThemeButton';
import {
	Form,
	Input,
	LandingLoginFormContainer,
	Subtitle,
	Title,
} from './styles';
import { LoginFormData } from './types';
import { useUserSession } from '../../contexts/UserSessionProvider';

const loginFormSchema: yup.SchemaOf<LoginFormData> = yup.object().shape({
	login: yup.string().required('Nome de usuário obrigatório'),
	password: yup
		.string()
		.required('Senha obrigatória')
		.min(8, 'Senha muito curta'),
});

const LandingLoginForm: FC = () => {
	const navigate = useNavigate();
	const { loginUser } = useUserSession();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormData>({
		resolver: yupResolver(loginFormSchema),
		reValidateMode: 'onBlur',
	});

	const [isRequesting, setIsRequesting] = useState(false);
	const [error, setError] = useState('');

	function handleLogin(data: LoginFormData) {
		setIsRequesting(true);
		loginUser(data.login, data.password)
			.then(() => {
				setError('');
				navigate('/home');
			})
			.catch(({ response }) => {
				console.error(response);

				if (response.status === 401) {
					setError('Usuário ou senha inválidos');
				}
			})
			.finally(() => {
				setIsRequesting(false);
			});
	}

	return (
		<LandingLoginFormContainer>
			{!!error && (
				<div className="error">
					<p>{error}</p>
				</div>
			)}
			<Title>
				<AppLogo />
			</Title>
			<Subtitle>Entre na sua conta</Subtitle>
			<Form onSubmit={handleSubmit(handleLogin)}>
				<Input
					{...register('login')}
					placeholder="Nome de usuário"
					$error={errors.login?.message}
				/>
				{!!errors.login && <p className="error">{errors.login?.message}</p>}
				<Input
					{...register('password')}
					placeholder="Senha"
					type="password"
					$error={errors.password?.message}
				/>
				{!!errors.password && (
					<p className="error">{errors.password?.message}</p>
				)}
				<ThemeButton type="submit" extend primary disabled={isRequesting}>
					Entrar
				</ThemeButton>
				<p className="hint">
					Não tem uma conta? <Link to="/signin">Crie a sua aqui</Link>
				</p>
			</Form>
			<div className="selector-container">
				<AppThemeSelector />
			</div>
		</LandingLoginFormContainer>
	);
};

export default LandingLoginForm;
