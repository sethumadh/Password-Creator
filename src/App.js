import { CssBaseline, Stack } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Password, PasswordOptions } from './components';
import { PasswordContextProvider } from './contexts/PasswordContextProvider';

const theme = createTheme({
	breakpoints: {
		values: {
			mobile: 0,
			tablet: 768,
			desktop: 1440
		}
	},
	palette: {
		primary: {
			main: '#A4FFAF'
		},
		red: {
			main: '#F64A4A'
		},
		orange: {
			main: '#FB7C58'
		},
		yellow: {
			main: '#F8CD65'
		},
		grey: {
			main: '#817D92',
			dark: '#24232C',
			veryDark: '#18171F'
		},
		white: {
			main: '#E6E5EA'
		}
	},
	typography: {
		fontFamily: 'JetBrains Mono',
		h1: {
			fontSize: 32,
			lineHeight: '43px',
			fontWeight: 700
		},
		h2: {
			fontSize: 24,
			lineHeight: '31px',
			fontWeight: 700
		},
		body1: {
			fontSize: 18,
			lineHeight: '23px',
			fontWeight: 700
		},
		body2: {
			fontSize: 16,
			lineHeight: '21px',
			fontWeight: 700
		}
	}
});

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<PasswordContextProvider>
				<CssBaseline />
				<Stack
					sx={{
						background: 'linear-gradient(180deg, #14131B 0%, #08070B 100%)',
						minHeight: '100vh',
						p: { mobile: 2, tablet: 4 }
					}}
				>
					<Stack
						component='main'
						spacing={{ mobile: 2, tablet: 3 }}
						m='auto'
						width={1}
						maxWidth={540}
					>
						<Password />
						<PasswordOptions />
					</Stack>
				</Stack>
			</PasswordContextProvider>
		</ThemeProvider>
	);
};

export default App;
