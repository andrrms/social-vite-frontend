import {
	slate,
	gray,
	blue,
	red,
	green,
	yellow,
	slateDark,
	grayDark,
	blueDark,
	redDark,
	greenDark,
	yellowDark,
	blackA,
	whiteA,
} from '@radix-ui/colors';

export const colorScheme = {
	colors: {
		...slate,
		...gray,
		...blue,
		...red,
		...green,
		...yellow,
		black: blackA,
		white: whiteA,
	},
};

export const darkColorScheme = {
	colors: {
		...slateDark,
		...grayDark,
		...blueDark,
		...redDark,
		...greenDark,
		...yellowDark,
		black: blackA,
		white: whiteA,
	},
};
