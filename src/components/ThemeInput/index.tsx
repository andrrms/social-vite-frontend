import { forwardRef, InputHTMLAttributes } from 'react';

import { Input, ThemeInputContainer } from './styles';
import { InputProps } from './types';

const ThemeInput = forwardRef<
	HTMLInputElement,
	InputHTMLAttributes<HTMLInputElement> & InputProps
>(({ label, hint, id, ...props }, ref) => {
	return (
		<ThemeInputContainer>
			{label && <label htmlFor={id}>{label}</label>}
			<Input ref={ref} id={id} {...props} />
			{hint && <p className="hint">{hint}</p>}
		</ThemeInputContainer>
	);
});

export default ThemeInput;
