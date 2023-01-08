import { Box, useTheme } from '@mui/material';

const Bar = ({ strengthLevel, i }) => {
	const theme = useTheme();
	const colors = [
		'transparent',
		theme.palette.red.main,
		theme.palette.orange.main,
		theme.palette.yellow.main,
		theme.palette.primary.main
	];

	return (
		<Box
			sx={{
				width: 10,
				height: 28,
				border: `1px solid ${theme.palette.white.main}`,
				bgcolor: i < strengthLevel ? colors[strengthLevel] : 'transparent'
			}}
		/>
	);
};

export default Bar;
