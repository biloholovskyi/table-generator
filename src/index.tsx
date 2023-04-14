import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { StoreProvider } from './app/providers/storeProvider'
import { App } from './app/app'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>
)
