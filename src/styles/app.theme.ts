import {
	slate,
	gray,
	blue,
	red,
	green,
	yellow,
	brown,
	slateDark,
	grayDark,
	blueDark,
	redDark,
	greenDark,
	yellowDark,
	brownDark,
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
		...brown,
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
		...brownDark,
		black: blackA,
		white: whiteA,
	},
};

