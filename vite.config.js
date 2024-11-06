import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 10000,  // Choose a port that Render supports, like 10000
    host: '0.0.0.0',  // Bind to all interfaces to make it accessible externally
  },
})
