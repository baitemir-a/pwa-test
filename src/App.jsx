import { useState } from 'react'
import logo from '../public/pwa-192x192.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={logo} className="logo" alt="Vite logo" />
        </a>
      </div>
      
    </>
  )
}

export default App
