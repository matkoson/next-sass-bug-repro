const withSass = require('@zeit/next-sass');

exports.default = withSass({
	env: {
		DEV: true
	}
});
