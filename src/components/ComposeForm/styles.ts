/* eslint-disable indent */
import styled, { css } from 'styled-components';
import { ComposeFormProps } from './types';

export const ComposeFormContainer = styled.section`
	display: flex;
	gap: 1rem;

	padding: 0.5rem 1rem;

	border-bottom: 1px solid ${({ theme }) => theme.colors.slate4};
`;

export const Form = styled.form`
	flex: 1;

	p.lengthCounter {
		font-size: 0.8rem;
		font-weight: 400;
		color: ${({ theme }) => theme.colors.gray11};
		text-align: right;
		margin-block: 4px;

		&.nearLimit {
			color: ${({ theme }) => theme.colors.yellow11};
		}

		&.atLimit {
			color: ${({ theme }) => theme.colors.red10};
		}

		&.limitExceeded {
			font-weight: 800;
		}
	}
`;

export const ComposeTextArea = styled.textarea<
	ComposeFormProps & {
		lines?: number;
		textLength?: number;
	}
>`
	width: 100%;
	height: 2rem;

	margin-block: 0.5rem;
	padding-bottom: 0;
	${({ textLength }) => !!textLength && 'margin-bottom: calc(-1rem + 4px);'}

	border: none;
	background-color: transparent;
	color: ${({ theme }) => theme.colors.gray12};
	outline: none;

	resize: none;
	font-size: 1.2rem;
	font-weight: 400;
	line-height: 1.4rem;

	${ComposeFormContainer}:focus-within &,
	${ComposeFormContainer}.hasText & {
		border-bottom: 1px solid ${({ theme }) => theme.colors.slate4};
		height: unset;
		${({ hiddenActions }) => hiddenActions && css``}
	}
`;

export const ComposeFormFooter = styled.footer<ComposeFormProps>`
	display: flex;
	align-items: center;
	justify-content: space-between;

	${({ hiddenActions }) =>
		hiddenActions &&
		css`
			display: none;

			${ComposeFormContainer}:focus-within &,
			${ComposeFormContainer}.hasText & {
				display: flex;
			}
		`}
`;

export const ComposeFormActions = styled.ul`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;

export const ActionButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;

	background-color: transparent;
	color: ${({ theme }) => theme.colors.blue10};
	border-radius: 3rem;
	border: none;
	outline: none;

	padding: 0.5rem;

	font-size: 1.3rem;

	&:hover {
		background-color: ${({ theme }) => theme.colors.blue3};
	}
`;

// Max length is 180 characters
export const LengthMeter = styled.div<{ length: number; maxLength?: number }>`
	display: inline-block;
	height: 4px;
	width: 100%;
	// Rule of thirds to calculate the width of the meter in percentage
	max-width: ${({ length, maxLength = 180 }) => (length / maxLength) * 100}%;

	background-color: ${({ theme, length, maxLength = 180 }) =>
		length < maxLength - 40 + 1
			? theme.colors.blue8
			: length < maxLength
			? theme.colors.yellow8
			: theme.colors.red8};
`;

