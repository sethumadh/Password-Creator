const upperCase = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z'
];

const lowerCase = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z'
];

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const symbols = ['!', '@', '#', '$', '%', '^', '&', '*'];

export const characters = {
	upperCase,
	lowerCase,
	numbers,
	symbols
};

export const labels = [
	'Uppercase letters',
	'Lowercase letters',
	'Numbers',
	'Symbols'
];

export const strengths = ['', 'TOO WEAK!', 'WEAK', 'MEDIUM', 'STRONG'];

export const generateRandomNumber = size => {
	return Math.floor(Math.random() * size);
};

export const getPasswordStrength = (categories, characters) => {
	const choices = categories.length;
	const isLowerCase = categories.includes('Lowercase');
	const isUpperCase = categories.includes('Uppercase');

	if (choices === 4 || choices === 3) {
		return calculateLevel(characters, [6, 9, 11]);
	}
	if (choices === 2) {
		if (isUpperCase && isLowerCase) {
			return calculateLevel(characters, [7, 10, 12]);
		}
		if (isUpperCase || isLowerCase) {
			return calculateLevel(characters, [8, 11, 14]);
		}
	}

	return calculateLevel(characters, [11, 16]);
};

const calculateLevel = (characters, vals) => {
	if (characters < vals[0]) return 1;
	if (characters < vals[1]) return 2;
	if (vals[2] === undefined || characters < vals[2]) return 3;

	return 4;
};

export const convertString = str => {
	if (str === 'Uppercase') return 'upperCase';
	if (str === 'Lowercase') return 'lowerCase';

	return str.toLowerCase();
};