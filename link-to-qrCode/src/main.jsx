import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <img class="logo" src="https://www.observatorio.ind.br/wp-content/themes/fiec/images/logo.svg" alt="logo observatorio da industria"></img>
    <App />
  </StrictMode>,
)
