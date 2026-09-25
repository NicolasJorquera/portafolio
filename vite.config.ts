import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: { port: 3000 },
  build: {
    // Se mantiene la carpeta build/ que usa el flujo de deploy a cPanel
    outDir: 'build',
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Bootstrap 5 todavía usa @import y funciones de color antiguas de Sass
        quietDeps: true,
        silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'if-function'],
      },
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    css: false,
  },
});
