import { Stack, Typography } from '@mui/material';

import { Bar } from './';

const StrengthIndicator = ({ strength, strengthLevel, i }) => {
	return (
		<Stack
			direction='row'
			justifyContent='space-between'
			alignItems='center'
			my={4}
			sx={theme => ({
				bgcolor: theme.palette.grey.veryDark,
				px: { mobile: 2, tablet: 4 },
				py: { mobile: 2, tablet: 3 },
				display: strengthLevel === i ? 'flex' : 'none'
			})}
		>
			<Typography
				variant='body1'
				sx={theme => ({
					color: theme.palette.grey.main,
					textTransform: 'uppercase',
					[theme.breakpoints.down('tablet')]: {
						...theme.typography.body2
					}
				})}
			>
				Strength
			</Typography>
			<Stack direction='row'>
				<Typography
					variant='h2'
					mr={1}
					sx={theme => ({
						color: theme.palette.white.main,
						[theme.breakpoints.down('tablet')]: {
							...theme.typography.body1
						}
					})}
				>
					{strength}
				</Typography>
				<Stack direction='row' spacing={1}>
					{Array.from({ length: 4 }).map((e, i) => (
						<Bar key={i} strengthLevel={strengthLevel} i={i} />
					))}
				</Stack>
			</Stack>
		</Stack>
	);
};

export default StrengthIndicator;
