import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	server: { open: true },
	plugins: [react()],
	test: {
		environment: 'jsdom',
		setupFiles: './src/tests-setup/SetupTests.ts',
	},
});
