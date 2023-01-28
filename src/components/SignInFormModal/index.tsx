/* eslint-disable indent */
import { FC, useState } from 'react';
import { createPortal } from 'react-dom';
import { FiChevronLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useUserSession } from '../../contexts/UserSessionProvider';
import api from '../../services/api';

import AppLogo from '../AppLogo';
import ThemeButton from '../ThemeButton';
import StepOne from './StepOne';
import StepTwo from './StepTwo';

import { LogoContainer, Modal, SignInFormModalContainer } from './styles';
import { SignInFormDataStepTwo, SignInUser } from './types';

const SignInFormModal: FC = () => {
	const navigate = useNavigate();
	const { loginUser } = useUserSession();
	const [step, setStep] = useState(1);

	const [userData, setUserData] = useState<SignInUser | undefined>();
	const [error, setError] = useState('');

	// Isso é uma gambiarra. Por conta do jeito que o React funciona
	// e renderiza os estados, a segunda parte do userData não é
	// atualizada automaticamente no estado quando o usuário preenche
	// o formulário. Por isso, eu tenho que fazer isso manualmente.

	function handleSignIn(data: SignInFormDataStepTwo) {
		const finalData = { ...userData, ...data };

		api
			.post('/users/register', finalData)
			.then(async () => {
				await loginUser(data.username, data.password);
				navigate('/home');
			})
			.catch((err) => {
				if (err.response.status === 409) {
					return setError(
						'Já existe um usuário com esse nome de usuário ou e-mail.'
					);
				}
				console.log(err);
			});
	}

	return createPortal(
		<SignInFormModalContainer>
			<LogoContainer>
				<AppLogo onlyLogo />
			</LogoContainer>
			<Modal>
				<div className="header">
					<ThemeButton
						sublime
						onClick={() => {
							if (step === 1) {
								navigate('/');
							} else {
								setStep((s) => s - 1);
							}
						}}
					>
						<FiChevronLeft /> <span>Voltar</span>
					</ThemeButton>
					<p>Etapa {step} de 2</p>
				</div>
				{error && (
					<div className="error">
						<p>{error}</p>
					</div>
				)}
				{(() => {
					switch (step) {
						default:
						case 1: {
							return (
								<StepOne
									setStep={setStep}
									setUserData={setUserData}
									userData={userData}
								/>
							);
						}
						case 2: {
							return (
								<StepTwo
									setStep={setStep}
									setUserData={setUserData}
									userData={userData}
									handleSignIn={handleSignIn}
								/>
							);
						}
					}
				})()}
			</Modal>
		</SignInFormModalContainer>,
		document.getElementById('modal-root') as Element
	);
};

export default SignInFormModal;
