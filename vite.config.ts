import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // အောက်က preview section ကို ထည့်ပေးထားပါတယ်
  preview: {
    allowedHosts: true
  },
  // Development မှာလည်း error မတက်အောင် server host ပါ တစ်ခါတည်း ဖွင့်ပေးထားပါတယ်
  server: {
    allowedHosts: true
  }
})
