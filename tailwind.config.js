/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			display: ['drop-hover'],
			colors: {
				primaryBlue: '#3786FB',
				lightBlue: '#E5F1FF',
				greyFontColor: '#525567',
				darkFontColor: '#101828',
				darkTheme1: '#041C32',
				darkTheme2: '#04293A',
				darkTheme3: '#064663',
				darkTheme4: '#011f38',
				darkThemeTextLight: '#6a82ad',
			},
			boxShadow: {
				custom: '1px 1px 10px rgba(0,0,0,0.07)'
			}
		},
		screens: {
			'sm': '640px',
			// => @media (min-width: 640px) { ... }

			'md': '768px',
			// => @media (min-width: 768px) { ... }

			'lg': '1024px',
			// => @media (min-width: 1024px) { ... }

			'xl': '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		}
	},
	plugins: [
		require('flowbite/plugin')
	]
};
