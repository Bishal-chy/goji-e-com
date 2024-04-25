import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './Context.jsx'
import { FilterContextProvider } from './components/Filter_context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
  <FilterContextProvider>
    <App />
  </FilterContextProvider>
  </AppProvider>
)
