import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { AppProviders } from './providers/App'
import { AppRoutes } from './routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppProviders>
      <AppRoutes />
    </AppProviders>
  </React.StrictMode>
)
