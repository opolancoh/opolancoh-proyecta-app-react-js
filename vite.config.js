import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@contexts': '/src/contexts',
      '@helpers': '/src/helpers',
      '@modules': '/src/modules',
      '@pages': '/src/pages',
      '@services': '/src/services',
    },
  },
});
