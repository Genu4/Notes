import React from 'react'
import './main.scss'
import ReactDOM from 'react-dom/client'
import App from './App/App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
