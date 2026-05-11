/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: "#0052cc",   // Professional Tech Blue
        brandDark: "#091E42",   // Enterprise Slate
      },
      keyframes: {
        // ဘားတန်းလေးတွေ တစ်ဆင့်ချင်း ပြည့်သွားဖို့
        progress: {
          '0%': { width: '0%' },
          '20%': { width: '100%' },
          '100%': { width: '100%' },
        },
        // လမ်းကြောင်းမြှားလေးတွေ အောက်ကို စီးဆင်းဖို့
        pathFlow: {
          '0%, 20%': { height: '0%', opacity: '0' },
          '30%': { opacity: '1' },
          '40%, 100%': { height: '100%', opacity: '1' },
        }
      },
      animation: {
        'progress-step': 'progress 6s infinite',
        'path-step': 'pathFlow 6s infinite',
      }
    },
  },
  plugins: [],
}
