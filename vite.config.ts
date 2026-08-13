import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/roblox-users': {
        target: 'https://users.roblox.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/roblox-users/, '')
      },
      '/api/roblox-thumbnails': {
        target: 'https://thumbnails.roblox.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/roblox-thumbnails/, '')
      }
    }
  }
})
