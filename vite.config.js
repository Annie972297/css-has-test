import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    base: './',
    plugins: [
      vue()
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    build: {
      modulePreload: false,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: [
              'vue',
              'vue-router'
            ]
          }
        }
      }
    }
  }
})
