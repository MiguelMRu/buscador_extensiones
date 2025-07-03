import { useState } from 'react'
import extension from './mocks/data.json'
import logo from './assets/images/logo.svg'
import sunIcon from './assets/images/icon-sun.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='header'>
        <img src={logo} alt="Logo of the aplication" />
        <button><img src={sunIcon} alt=""/></button>
      </header>

      <main>
          <header className='main-header'> 
            <h1>Extension List</h1>
            <div className='filter-buttoms'>
              <button>All</button>
              <button>Active</button>
              <button>Inactive</button>
            </div>
          </header>

      </main>
        
    </>
  )
}

export default App
