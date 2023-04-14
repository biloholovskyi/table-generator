import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { MainPage } from './page/mainPage/mainPage'
import { StoreProvider } from './app/providers/storeProvider'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <StoreProvider>
      <MainPage />
    </StoreProvider>
  </React.StrictMode>
)
