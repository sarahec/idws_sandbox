export default {
	extends: ['@commitlint/config-conventional'],
	rules: {
		// Subject line must be <= 72 characters.
		'subject-max-length': [2, 'always', 72],
		// Type must be lower-case.
		'type-case': [2, 'always', 'lower-case'],
	},
};
