import { useState } from 'react';
import { FormControlLabel, Checkbox } from '@mui/material';

const CheckboxLabel = ({ label, toggleOption }) => {
	const [checked, setChecked] = useState(false);

	const handleCheckboxChange = e => {
		setChecked(e.target.checked);
		toggleOption(label.split(' ')[0], e.target.checked);
	};

	return (
		<FormControlLabel
			control={<Checkbox checked={checked} onChange={handleCheckboxChange} />}
			label={`Include ${label}`}
			sx={theme => ({
				'& .MuiTypography-root': {
					color: theme.palette.white.main,
					...theme.typography.body1,
					[theme.breakpoints.down('tablet')]: {
						...theme.typography.body2
					}
				},
				'& .MuiCheckbox-root': {
					color: theme => (checked ? 'primary.main' : theme.palette.white.main)
				}
			})}
		/>
	);
};

export default CheckboxLabel;
