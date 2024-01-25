import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  server: {
    proxy: {
    },
    fs: {
      allow: ['..'],
    },
    // @ts-ignore
    hmr: {
      overlay: false,
    },
    // @ts-ignore
    historyApiFallback: true,
  },
});

