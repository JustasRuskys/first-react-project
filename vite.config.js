import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/first-react-project/",
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://JustasRuskys.github.io/first-react-project',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    },
  },
});