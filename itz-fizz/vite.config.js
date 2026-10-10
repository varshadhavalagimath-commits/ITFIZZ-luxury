import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ITFIZZ-luxury/', // <-- Must have capitals 'ITFIZZ' and lowercase 'luxury' with matching slashes
})