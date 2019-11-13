const withCSS = require('@zeit/next-css');

exports.default = withCSS({
	env: {
		VERSION: 'dev',
		APP_NAME: 'Test App',
		CLIENT_URL: 'http://localhost:3000',
		API_URL: 'http://localhost:3001/api/v2',
		INSPECTLET_ID: '',
		AMPLITUDE_KEY: '',
		INTERCOM_ID: '',
		ANALYTICS_ID: '',
		SENTRY_DSN: '',
		DEV: true,
		PAYPAL_ENV: 'sandbox'
	}
});
