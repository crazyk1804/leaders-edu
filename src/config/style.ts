import {createTheme} from "@mui/material/styles";

export const app_theme = createTheme({
	palette: {
		background: {
			paper: '#FFF',
		},
		text: {
			primary: '#173A5E',
			secondary: '#46505A',
		},
		action: {
			active: '#001E3C',
			// },
			// success: {
			//   dark: '#009688',
		},

	},
	typography: {
		fontFamily: '',
	}
});