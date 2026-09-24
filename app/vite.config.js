import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Served from https://leofelixlaw.github.io/mypage/
export default defineConfig({
  base: '/mypage/',
  plugins: [react()],
});
