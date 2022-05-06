import React from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/home.jsx'


const App = () => {
  return (
    <h1>hello</h1>,
      <Home />
  )
}

// Render
const getRoot = () => { return document.getElementById('root') }
createRoot(getRoot()).render(<App />)
