import { FC } from 'react';
import { FiMessageSquare, FiRepeat, FiHeart } from 'react-icons/fi';

import AppLogo from '../AppLogo';

import { LandingMessageBubbleContainer, MessageBubble } from './styles';

const LandingMessageBubble: FC = () => {
	return (
		<LandingMessageBubbleContainer>
			<p>
				<AppLogo />
			</p>
			<MessageBubble>
				<p>
					O que está acontecendo,
					<br />
					está aqui!
				</p>
				<ul className="reactions">
					<li className="comment">
						<FiMessageSquare /> 236k
					</li>
					<li className="share">
						<FiRepeat /> 600k
					</li>
					<li className="like">
						<FiHeart /> 7.1m
					</li>
				</ul>
			</MessageBubble>
		</LandingMessageBubbleContainer>
	);
};

export default LandingMessageBubble;
