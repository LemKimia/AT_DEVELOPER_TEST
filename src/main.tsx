import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages'
import { Toaster } from './components/ui/toaster';
import './styles/index.css'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <Toaster />
  </React.StrictMode>
);