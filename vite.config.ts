import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
/**
Install Path
  npm i path
  npm i -D @types/node
 */

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		host: true,
	},
	plugins: [react()],
	resolve: {
		alias: {
			"~": path.resolve(__dirname, "./src/"),
			components: path.resolve(__dirname, "./src/components/"),
			constants: path.resolve(__dirname, "./src/constants/"),
			helpers: path.resolve(__dirname, "./src/helpers/"),
			types: path.resolve(__dirname, "./src/types/"),
			utils: path.resolve(__dirname, "./src/utils/"),
			// layouts: path.resolve(__dirname, "./src/layouts/"),
			// routes: path.resolve(__dirname, "./src/routes/"),
			// pages: path.resolve(__dirname, "./src/pages/"),
		},
	},
});
