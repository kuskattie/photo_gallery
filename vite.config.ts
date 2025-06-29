import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/photo_gallery/',  // <- добавь эту строку (соблюдай слеши)
  plugins: [react()],
})