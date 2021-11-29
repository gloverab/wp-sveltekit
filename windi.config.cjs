import colors from 'windicss/colors'

module.exports = {
	theme: {
		colors: {
			...colors,
			'phish-purple': '#413648',
			'phish-green': '#68947c',
			'phish-orange': '#e36740',
			'phish-grey-dark': '#403547',
			'phish-grey-light': '#535046'
		},
		extend: {
			backgroundImage: theme => ({
				'wp-tile': 'url(\'/src/assets/wp-tile-trans-sm.png\')',
				'phish-bg': 'url(\'https://5ojtv13o4by138ocv258q4xu7h-wpengine.netdna-ssl.com/wp-content/themes/phish/assets/img/background-texture.jpg?ver=1.0\')'
			})
		}
	},
	variants: {},
	plugins: [],
};
