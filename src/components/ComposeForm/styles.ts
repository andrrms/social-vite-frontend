/* eslint-disable indent */
import styled from 'styled-components';

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

export const ComposeTextArea = styled.textarea<{
	lines?: number;
	textLength?: number;
}>`
	width: 100%;

	margin-block: 0.5rem;
	padding-bottom: 0;
	${({ textLength }) => !!textLength && 'margin-bottom: calc(-1rem + 4px);'}

	border: none;
	background-color: ${({ theme }) => theme.colors.slate1};
	color: ${({ theme }) => theme.colors.gray12};
	outline: none;

	resize: none;
	font-size: 1.2rem;
	font-weight: 400;
	line-height: 1.4rem;

	${ComposeFormContainer}:focus-within &,
	${ComposeFormContainer}.hasText & {
		border-bottom: 1px solid ${({ theme }) => theme.colors.slate4};
	}
`;

export const ComposeFormFooter = styled.footer`
	display: flex;
	align-items: center;
	justify-content: space-between;
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
export const LengthMeter = styled.div<{ length: number }>`
	display: inline-block;
	height: 4px;
	width: 100%;
	// Rule of thirds to calculate the width of the meter in percentage
	max-width: ${({ length }) => (length / 180) * 100}%;

	background-color: ${({ theme, length }) =>
		length < 150
			? theme.colors.blue8
			: length < 170
			? theme.colors.yellow8
			: theme.colors.red8};
`;
