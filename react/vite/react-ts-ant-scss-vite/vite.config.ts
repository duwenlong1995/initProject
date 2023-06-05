import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {                // ← ← ← ← ← ←
    host: '0.0.0.0'    // ← 新增内容 ←
  },                        // ← ← ← ← ← ←
  // 配置scss
  css:{
    preprocessorOptions: {
      scss: {
        additionalData: "@import './src/styles/sassConfig.scss';",
      },
    }
  }
})
