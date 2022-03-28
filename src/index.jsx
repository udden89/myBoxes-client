import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom"
import { BoxContextProvider } from './context/box.context'

import './index.css'
import App from './App'


ReactDOM.render(
  <React.StrictMode>
    <BoxContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </BoxContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

