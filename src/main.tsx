import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css' // CSS မရှိရင် error တက်မှာစိုးလို့ အောက်မှာ CSS ပေးထားပါတယ်

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
