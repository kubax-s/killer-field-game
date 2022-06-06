import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Main from './Main'
import Home from './views/Home/Home'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  // <React.StrictMode>
    <Main>
      <Home />
    </Main>
  // </React.StrictMode>
)