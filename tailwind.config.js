/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			screens: {
				'3xl': '1920px',
			},
			colors: {
				primary: {
					DEFAULT: '#202327',
					light: '#686B6E',
					dark: '#363A3D',
				},
				nobel: {
					DEFAULT: '#9B9C9E',
					light: '#CDCECF',
					dark: '#1A1D21',
					blue: '#0C1132',
					'black-100': '#E8E9E9',
					'black-600': '#1A1D21',
					'black-700': '#131619',
					'black-800': '#0D0F10',
				},
				secondary: {
					DEFAULT: '#B6F09C',
					light: '#D9F5C5',
					dark: '#74AD62',
				},

				nobelblue: '#0C1132',
				glass: {
					stroke: '#FFFFFF14',
				},
				stem: {
					'green-500': '#B6F09C',
					'green-600': '#9AD37F',
				},
			},

			backgroundImage: {
				'gradient-tech':
					'linear-gradient(10deg, #4D62E5 0%, #4D62E5 5%, #87DDEE 67%, #B6F09C 100%)',
				'gradient-links': 'linear-gradient(45deg, #82DBF7 0%, #B6F09C 100%)',
				tabActive:
					'linear-gradient(225deg, #4D62E5 0%, #87DDEE 45.31%, #B6F09C 100%)',
				tab: 'linear-gradient(145deg, rgba(215, 237, 237, 0.16) 0%, rgba(204, 235, 235, 0.00) 100%)',
				boxOveral: 'linear-gradient(145deg,#d7eded29 0%, #ccebeb00 100%)',
				'glass-fill':
					'linear-gradient(145deg, rgba(215, 237, 237, 0.16) 0%, rgba(204, 235, 235, 0.00) 100%)',
				'green-blue-day':
					'linear-gradient(225deg, #3045C9 0%, #65BEDA 45.31%, #9AD37F 100%)',
				'circle-icon':
					'linear-gradient(142deg, rgba(14, 14, 15, 0.80) 57.81%, rgba(19, 22, 25, 0.80) 100%)',
			},

			borderRadius: {
				3: '12px',
			},

			boxShadow: {
				'extra-large':
					'0px 8px 10px -6px rgba(6, 7, 8, 0.06), 0px 25px 50px -12px rgba(6, 7, 8, 0.16)',
				'glass-modal':
					'0px 8px 12px 0px rgba(255, 255, 255, 0.04) inset, 0px 24px 64px -16px rgba(0, 0, 0, 0.24), 16px 24px 64px -24px rgba(255, 255, 255, 0.04) inset',
			},
		},
	},
	plugins: [],
};
