import { forwardRef, Ref, type FC, type PropsWithChildren } from 'react';
import { type LinkProps } from 'react-router-dom';

import { LinkBtn } from './styles';
import { ThemeButtonProps } from './types';

const ThemeLinkButton: FC<PropsWithChildren<ThemeButtonProps & LinkProps>> =
	forwardRef(({ children, ...args }, ref: Ref<HTMLAnchorElement>) => {
		return (
			<LinkBtn ref={ref} {...args}>
				{children}
			</LinkBtn>
		);
	});

export default ThemeLinkButton;

