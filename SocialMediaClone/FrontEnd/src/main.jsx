import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/Comman.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <App />
    </BrowserRouter>
)
