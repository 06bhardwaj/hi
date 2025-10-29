/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#14b8a6',
					light: '#5eead4',
					deep: '#0f766e',
				},
			},
			backgroundImage: {
				'gradient-hero': 'linear-gradient(135deg, #0ea5e9, #14b8a6, #7c3aed)',
			},
		},
	},
	plugins: [],
}
