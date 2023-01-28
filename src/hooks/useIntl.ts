import { useMemo } from 'react';

export default function useIntl(locale = 'pt-BR') {
	const date = useMemo(() => {
		return new Intl.DateTimeFormat(locale, {
			year: 'numeric',
			month: 'numeric',
			day: 'numeric',
		});
	}, [locale]);

	const time = useMemo(() => {
		return new Intl.DateTimeFormat(locale, {
			hour: 'numeric',
			minute: 'numeric',
		});
	}, [locale]);

	const number = useMemo(() => {
		return new Intl.NumberFormat(locale);
	}, [locale]);

	return {
		date,
		time,
		number,
	};
}
