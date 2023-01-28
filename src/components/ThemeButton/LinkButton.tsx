import { type FC, type PropsWithChildren } from 'react';
import { type LinkProps } from 'react-router-dom';

import { LinkBtn } from './styles';
import { ThemeButtonProps } from './types';

const ThemeLinkButton: FC<PropsWithChildren<ThemeButtonProps & LinkProps>> = ({
	children,
	...args
}) => {
	return <LinkBtn {...args}>{children}</LinkBtn>;
};

export default ThemeLinkButton;
