import {
	type FC,
	type PropsWithChildren,
	type ButtonHTMLAttributes,
	forwardRef,
	Ref,
} from 'react';

import { Button } from './styles';
import { ThemeButtonProps } from './types';

const ThemeButton: FC<
	PropsWithChildren<ThemeButtonProps & ButtonHTMLAttributes<HTMLButtonElement>>
> = forwardRef(({ children, ...args }, ref: Ref<HTMLButtonElement>) => {
	return (
		<Button ref={ref} {...args}>
			{children}
		</Button>
	);
});

export default ThemeButton;

