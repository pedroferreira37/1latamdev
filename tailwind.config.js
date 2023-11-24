/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			spacing: {
				0: '0',
				1: '.25rem',
				2: '0.5rem',
				3: '0.75rem',
				4: '1rem',
				5: '1.25rem',
				6: '1.5rem',
				8: '2rem',
				10: '2.5rem',
				12: '3rem',
				16: '4rem',
				20: '5rem'
			},
			colors: {
				'gray-950': '#111111',
				'gray-900': '#1D1D1D',
				'gray-800': '#2C2C2C',
				'gray-700': '#505050',
				'gray-600': '#6D6D6D',
				'gray-500': '#939393',
				'gray-400': '#AEAEAE',
				'gray-300': '#C6C6C6',
				'gray-200': '#E1E1E1',
				'gray-100': '#EBEBEB',
				'gray-50': '#F7F7F7'
			},
			fontSize: {
				'heading-1': '4rem',
				'heading-2': '3rem',
				'heading-3': '2rem',
				'subtitle-1': '1.5rem',
				body: '.875rem'
			}
		}
	},
	plugins: []
};
