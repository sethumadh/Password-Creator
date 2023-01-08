import { useState, useEffect } from 'react';
import { Stack, ButtonBase, SvgIcon } from '@mui/material';
import { MdArrowForward } from 'react-icons/md';

import { CharacterOptions, StrengthIndicator } from './';
import {
	characters,
	generateRandomNumber,
	strengths,
	getPasswordStrength,
	convertString
} from '../constants';
import { usePasswordContext } from '../contexts/PasswordContextProvider';

const PasswordOptions = () => {
	const { setPassword } = usePasswordContext();
	const [value, setValue] = useState(0);
	const [options, setOptions] = useState([]);
	const [strengthLevel, setStrengthLevel] = useState(0);

	const getStrengthLevel = () => {
		if (!options.length || value === 0) {
			setStrengthLevel(0);
			return;
		}

		setStrengthLevel(getPasswordStrength(options, value));
	};

	useEffect(getStrengthLevel, [value, options]);

	const toggleOption = (option, checked) => {
		if (checked) {
			setOptions(prevOptions => [...prevOptions, option]);
		} else {
			setOptions(options.filter(o => o !== option));
		}
	};

	const handleGeneratePassword = () => {
		if (!options.length || value === 0) {
			setPassword('');
			return;
		}

		let newPassword = '';
		for (let i = 0; i < value; i++) {
			let randomIdx = generateRandomNumber(options.length);
			const key = convertString(options[randomIdx]);
			randomIdx = generateRandomNumber(characters[key].length);
			newPassword += characters[key][randomIdx];
		}

		setPassword(newPassword);
	};

	return (
		<Stack
			bgcolor={theme => theme.palette.grey.dark}
			sx={{
				px: { mobile: 2, tablet: 4 },
				pb: { mobile: 2, tablet: 4 },
				pt: { mobile: 2, tablet: 3 }
			}}
		>
			<CharacterOptions
				value={value}
				handleValueChange={setValue}
				toggleOption={toggleOption}
			/>
			{strengths.map((strength, i) => (
				<StrengthIndicator
					key={i}
					strength={strength}
					i={i}
					strengthLevel={strengthLevel}
					value={value}
				/>
			))}
			<ButtonBase
				sx={theme => ({
					...theme.typography.body1,
					py: 2.5,
					bgcolor: 'primary.main',
					border: `2px solid ${theme.palette.primary.main}`,
					'&:hover': {
						bgcolor: theme.palette.grey.dark,
						color: 'primary.main'
					},
					[theme.breakpoints.down('tablet')]: {
						...theme.typography.body2,
						py: 2
					}
				})}
				onClick={handleGeneratePassword}
			>
				Generate
				<SvgIcon
					component={MdArrowForward}
					sx={{
						fontSize: 16,
						ml: 3
					}}
				/>
			</ButtonBase>
		</Stack>
	);
};

export default PasswordOptions;
