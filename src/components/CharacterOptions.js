import { Stack, Typography, Slider, FormGroup } from '@mui/material';

import { labels } from '../constants';
import { CheckboxLabel } from './';

const CharacterOptions = ({ value, handleValueChange, toggleOption }) => {
	return (
		<Stack spacing={2}>
			<Stack direction='row' justifyContent='space-between' alignItems='center'>
				<Typography
					variant='body1'
					sx={theme => ({
						color: theme.palette.white.main,
						textTransform: 'capitalize',
						[theme.breakpoints.down('tablet')]: {
							...theme.typography.body2
						}
					})}
				>
					Character length
				</Typography>
				<Typography
					variant='h1'
					sx={theme => ({
						color: 'primary.main',
						[theme.breakpoints.down('tablet')]: {
							...theme.typography.h2
						}
					})}
				>
					{value}
				</Typography>
			</Stack>
			<Slider
				value={value}
				min={0}
				max={18}
				onChange={(e, newValue) => handleValueChange(newValue)}
				sx={theme => ({
					'& .MuiSlider-thumb': {
						color: theme.palette.white.main,
						'&:hover': {
							color: theme.palette.grey.veryDark
						}
					},
					'& .MuiSlider-rail': {
						bgcolor: theme.palette.grey.veryDark,
						height: 8,
						opacity: 1
					}
				})}
			/>
			<FormGroup>
				{labels.map((label, i) => (
					<CheckboxLabel key={i} label={label} toggleOption={toggleOption} />
				))}
			</FormGroup>
		</Stack>
	);
};

export default CharacterOptions;
