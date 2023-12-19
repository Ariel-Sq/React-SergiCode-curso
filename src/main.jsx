import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import {ContadorApp} from './contadorApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContadorApp value={0}/>
  </React.StrictMode>,
)
