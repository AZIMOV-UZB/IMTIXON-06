import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import { inittialState, reducer } from './components/context/Reduc.js'
import { ContextProvider } from './components/context/Index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
<ContextProvider initialState={inittialState} reducer={reducer}>
      <App />
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
