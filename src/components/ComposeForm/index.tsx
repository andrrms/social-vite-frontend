import { FC, useEffect, useMemo, useState } from 'react';
import { FiSmile, FiMapPin } from 'react-icons/fi';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import UserIcon from '../UserIcon';

import { useUserSession } from '../../contexts/UserSessionProvider';
import {
	ActionButton,
	ComposeFormActions,
	ComposeFormContainer,
	ComposeFormFooter,
	ComposeTextArea,
	Form,
	LengthMeter,
} from './styles';
import ThemeButton from '../ThemeButton';
import { ComposeFormSchema } from './types';
import { useFeed } from '../../contexts/FeedProvider';

const composeSchema: yup.SchemaOf<ComposeFormSchema> = yup.object().shape({
	text: yup.string(),
});

const ComposeForm: FC = () => {
	const { user } = useUserSession();
	const { composePost } = useFeed();
	const { register, handleSubmit, watch, setValue } =
		useForm<ComposeFormSchema>({
			resolver: yupResolver(composeSchema),
			reValidateMode: 'onBlur',
		});

	const [isPosting, setIsPosting] = useState(false);

	function handleComposeSubmit({ text }: ComposeFormSchema) {
		if (!text || !text.trim()) return setValue('text', '');
		setIsPosting(true);

		composePost(text)
			.then(() => {
				setValue('text', '');
			})
			.finally(() => {
				setIsPosting(false);
			});
	}

	return (
		<ComposeFormContainer
			className={[!!watch('text') && 'hasText'].filter(Boolean).join(' ')}
		>
			<UserIcon
				src={user?.avatarUrl as string}
				alt={user?.name as string}
				size={50}
			/>
			<Form onSubmit={handleSubmit(handleComposeSubmit)}>
				<ComposeTextArea
					{...register('text')}
					textLength={watch('text')?.length || 0}
					placeholder="O que está acontecendo?"
					rows={
						(watch('text')?.split('\n').length as number) > 2
							? watch('text')?.split('\n').length
							: 2
					}
				/>
				<LengthMeter length={watch('text')?.length || 0} />
				{(watch('text')?.length as number) > 0 && (
					<p
						className={[
							'lengthCounter',
							(watch('text')?.length as number) > 149 && 'nearLimit',
							(watch('text')?.length as number) > 169 && 'atLimit',
							(watch('text')?.length as number) > 180 && 'limitExceeded',
						]
							.filter(Boolean)
							.join(' ')}
					>
						{watch('text')?.length}/180
					</p>
				)}
				<ComposeFormFooter>
					<ComposeFormActions>
						<li>
							<ActionButton title="Adicionar emoji" type="button">
								<FiSmile />
							</ActionButton>
						</li>
						<li>
							<ActionButton title="Adicionar localização" type="button">
								<FiMapPin />
							</ActionButton>
						</li>
					</ComposeFormActions>
					<ThemeButton
						primary
						disabled={isPosting || !watch('text')}
						type="submit"
					>
						Enviar
					</ThemeButton>
				</ComposeFormFooter>
			</Form>
		</ComposeFormContainer>
	);
};

export default ComposeForm;
