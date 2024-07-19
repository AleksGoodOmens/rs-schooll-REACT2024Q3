/// <reference types="vitest" />

import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	server: { open: true },
	plugins: [react()],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './src/test/setupTests.ts',
		coverage: {
			exclude: [
				'src/main.tsx',
				'src/components/error/errorBoundary/ErrorBoundary.tsx',
				'src/components/socialLinks/SocialLinks.tsx',
				'src/pages/main/MainPage.tsx',
				'src/pages/notFound/NotFoundPage.tsx',
				'src/router/AppRouter.tsx',
				'src/store/hooks/hooks.ts',
				'src/test/',
				'src/utils/categoryAndIdFromUrl.ts',
				'src/utils/getId.ts',
				'src/utils/tabs.converter.ts',
				'src/utils/hooks/',
				'.eslintrc.cjs',
				'vite.config.ts',
				'**/*.test.tsx',
				'dist/**/*',
				'src/store/**/*',
				'src/utils/**/*',
			],
		},
	},
});
