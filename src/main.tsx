import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { AppRoutes } from './router/AppRoutes'

import './styles.css'
import { LoginProvider } from './auth';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <LoginProvider>
        <AppRoutes />
      </LoginProvider>
    </HashRouter>
  </React.StrictMode>,
)
