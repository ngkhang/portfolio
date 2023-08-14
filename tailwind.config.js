/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
				rubik: ["Rubik", "sans-serif"],
			},
			backgroundImage: {
				"blob-animation": "url('/assets/images/BlobAnimation.svg')",
				"dot-pattern": "url('/assets/images/')",
				"contact-texture": "url('/assets/images/BlobBackground.svg')",
			},
			boxShadow: {
				insetBox:
					"inset 2rem 2rem 4rem #e8e8e8, inset -2rem -2rem 4rem #ffffff",
			},
		},
	},
	plugins: [],
};
