import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from "vite-plugin-mock";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteMockServe({
      supportTs: false
  })],
  server: {
    host: '0.0.0.0',
    port: 9000,
    proxy: {
        '/api': {
            target: 'http://localhost:3000',   //实际请求地址
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\api/, '')
        },
    }
}
})
