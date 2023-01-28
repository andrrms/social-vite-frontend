/* eslint-disable no-mixed-spaces-and-tabs */
import { Dispatch, SetStateAction } from 'react';

export interface SignInFormDataStepOne<T extends Date | string> {
	name: string;
	email: string;
	birthDate: T;
}

export interface SignInFormDataStepTwo {
	username: string;
	password: string;
}

export type SignInUser = Partial<
	Omit<SignInFormDataStepOne<Date>, 'birthDate'> & {
		birthDate: string;
	} & SignInFormDataStepTwo
>;

export interface StepFormProps {
	setStep: Dispatch<SetStateAction<number>>;
	setUserData: Dispatch<SetStateAction<SignInUser | undefined>>;
	userData: SignInUser | undefined;
	handleSignIn?: (data: SignInFormDataStepTwo) => void;
}
