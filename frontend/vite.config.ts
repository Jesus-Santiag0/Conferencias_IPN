import react from '@vitejs/plugin-react';
import tailwind from 'tailwindcss';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
	server: {
		host: '0.0.0.0',
		port: 5173,
	},
	plugins: [react()],
	base: './',
	css: {
		postcss: {
			plugins: [tailwind()],
		},
	},
});
