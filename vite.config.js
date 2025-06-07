import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb', '**/*.gltf', '**/*.bin'],
  server: {
    port: 3000,
    strictPort: true,
    force: true
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})