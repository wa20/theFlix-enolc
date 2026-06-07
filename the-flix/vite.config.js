import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Force a single copy of React so pre-bundled CJS deps (e.g. react-router-dom)
  // don't get their own inlined React instance -> "Invalid hook call".
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
})
