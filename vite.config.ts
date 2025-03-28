import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from '@nabla/vite-plugin-eslint';
import type { UserConfig as ViteUserConfig } from 'vite';
import type { ViteUserConfig as VitestUserConfig } from 'vitest/config';

type CombinedConfig = ViteUserConfig & VitestUserConfig;

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
  },
} as CombinedConfig);
