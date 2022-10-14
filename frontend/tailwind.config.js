/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#54BAB9",
				secondary: "#18978F",
				offWhiteOne: "#E9DAC1",
				offWhiteTwo: "#F7ECDE",
			},
			keyframes: {
				"0%": { transform: "scaleY(0)" },
				"80%": { transform: "scaleY(1.2)" },
				"100%": { transform: "scaleY(1)" },
			},
		},
		animation: {
			"open-menu": "open-menu 0.5s ease-in-out forwards",
		},
	},
	plugins: [],
};
