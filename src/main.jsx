import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { UsuariosApp } from './UsuariosApp.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UsuariosApp />
    </BrowserRouter>
  </React.StrictMode>,
)
