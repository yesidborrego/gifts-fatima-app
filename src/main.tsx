import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './router/AppRoutes'

import './styles.css'
import { LoginProvider } from './auth';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginProvider>
        <AppRoutes />
      </LoginProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
