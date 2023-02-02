import styled, { css } from 'styled-components';
import { FC, useEffect, useState } from 'react';

import ProfileHoverCard from './ProfileHoverCard';

import api from '../../services/api';
import { User } from '../../interfaces/user.interfaces';
import { useUserSession } from '../../contexts/UserSessionProvider';
import { MentionProps } from './types';

const MentionContainerStyle = css`
	color: ${({ theme }) => theme.colors.blue10};
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`;
const MentionContainerLink = styled.a`
	${MentionContainerStyle}
`;
const MentionContainer = styled.span`
	${MentionContainerStyle}
`;

const Mention: FC<MentionProps> = ({ username }) => {
	const { revalidateAuthentication } = useUserSession();
	const [author, setAuthor] = useState<User>();

	useEffect(() => {
		async function getAuthor() {
			await api
				.get('/users/' + username, {
					headers: {
						Authorization: `Bearer ${localStorage.getItem('@app:token')}`,
					},
				})

				.then(({ data }) => {
					setAuthor(data);
				})
				.catch(async (err) => {
					if (err.response.status === 401) {
						await revalidateAuthentication();
						await getAuthor();
					}
				});
		}

		getAuthor();
	}, [username]);

	return author ? (
		<ProfileHoverCard author={author}>
			<MentionContainerLink
				href={`http://andrrms.myddns.me/${author.username}`}
			>
				@{author.username}
			</MentionContainerLink>
		</ProfileHoverCard>
	) : (
		<MentionContainerLink href={`http://andrrms.myddns.me/${username}`}>
			@{username}
		</MentionContainerLink>
	);
};

export default Mention;

