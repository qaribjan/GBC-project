import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'  // ✅ NEW plugin

export default defineConfig({
  plugins: [react(), tailwindcss()],
})

