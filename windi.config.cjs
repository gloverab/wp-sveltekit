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
				'phish-bg': 'url(\'https://phish.wpenginepowered.com/wp-content/themes/phish/assets/img/background-texture.jpg?ver=1.0\')'
			})
		},
		fontFamily: {
      'display': ['BD_Plakatbau']
    }
	},
	variants: {},
	plugins: [
		require('windicss/plugin/line-clamp')
	],
};
