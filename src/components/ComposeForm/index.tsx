import { createRef, FC, useEffect, useState } from 'react';
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
import { ComposeFormProps, ComposeFormSchema } from './types';
import { useFeed } from '../../contexts/FeedProvider';
import EmojiPicker from '../EmojiPicker';
import MiniPost from '../MiniPost';
import { Post } from '../../interfaces/post.interfaces';
import api from '../../services/api';

const composeSchema: yup.SchemaOf<ComposeFormSchema> = yup.object().shape({
	text: yup.string().max(240),
});

const ComposeForm: FC<ComposeFormProps> = ({
	hiddenActions,
	disableClickToFocus,
	emojiPanelZIndex,
	quotingPostId,
	snapFocus,
	onCompose,
}) => {
	const { user } = useUserSession();
	const { composePost } = useFeed();
	const { register, handleSubmit, watch, setValue, getValues, setFocus } =
		useForm<ComposeFormSchema>({
			resolver: yupResolver(composeSchema),
			reValidateMode: 'onBlur',
		});

	const [isPickerOpen, setIsPickerOpen] = useState(false);
	const [isPosting, setIsPosting] = useState(false);
	const [quotingPost, setQuotingPost] = useState<Post>();
	const containerRef = createRef<HTMLElement>();

	function handleComposeSubmit({ text }: ComposeFormSchema) {
		if (!text || !text.trim()) return setValue('text', '');
		setIsPosting(true);

		composePost(text, {
			quotingToId: quotingPost?.id,
		})
			.then(() => {
				setValue('text', '');
			})
			.finally(() => {
				setIsPosting(false);
				onCompose?.();
			});
	}

	function handleAddEmoji(emoji: string) {
		setValue('text', getValues('text') + emoji);
	}

	useEffect(() => {
		if (snapFocus || !disableClickToFocus) {
			containerRef.current?.addEventListener('click', () => {
				setFocus('text');
			});
		}

		if (quotingPostId) {
			console.log('procurando post ', quotingPostId);
			api
				.get(`/article/${quotingPostId}`, {
					headers: {
						Authorization: `Bearer ${localStorage.getItem('@app:token')}`,
					},
				})
				.then((res) => {
					console.log(quotingPostId, res.data);
					setQuotingPost(res.data);
				});
		}

		return () => {
			setQuotingPost(undefined);
		};
	}, [quotingPostId]);

	return (
		<ComposeFormContainer
			className={[!!watch('text') && 'hasText'].filter(Boolean).join(' ')}
			ref={containerRef}
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
					placeholder={
						quotingPost ? 'Adicionar um comentário' : 'O que está acontecendo?'
					}
					rows={
						(watch('text')?.split('\n').length as number) > 2
							? watch('text')?.split('\n').length
							: 2
					}
					hiddenActions={hiddenActions}
				/>
				<LengthMeter length={watch('text')?.length || 0} maxLength={240} />
				{(watch('text')?.length as number) > 0 && (
					<p
						className={[
							'lengthCounter',
							(watch('text')?.length as number) > 200 && 'nearLimit',
							(watch('text')?.length as number) > 239 && 'atLimit',
							(watch('text')?.length as number) > 240 && 'limitExceeded',
						]
							.filter(Boolean)
							.join(' ')}
					>
						{watch('text')?.length}/240
					</p>
				)}
				{quotingPost && (
					<>
						<MiniPost post={quotingPost} />
						<br />
					</>
				)}
				<ComposeFormFooter hiddenActions={hiddenActions}>
					<ComposeFormActions>
						<li>
							<EmojiPicker
								onEmojiClick={handleAddEmoji}
								zIndex={emojiPanelZIndex}
							>
								<ActionButton
									title="Adicionar emoji"
									type="button"
									onClick={() => setIsPickerOpen(true)}
								>
									<FiSmile />
								</ActionButton>
							</EmojiPicker>
						</li>
						<li>
							<ActionButton title="Adicionar localização" type="button">
								<FiMapPin />
							</ActionButton>
						</li>
					</ComposeFormActions>
					<ThemeButton
						primary
						disabled={
							isPosting ||
							!watch('text') ||
							(watch('text')?.length as number) > 240
						}
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

