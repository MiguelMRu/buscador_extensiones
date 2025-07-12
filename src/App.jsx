import { useState } from 'react'
import { Extensions } from './components/Extensions'
import logo from './assets/images/logo.svg'
import sunIcon from './assets/images/icon-sun.svg'
import { FilterButtoms } from './components/FilterButtoms'
import './App.css'

function App() {

  return (
    <>
      <header className='header'>
        <img src={logo} alt="Logo of the aplication" />
        <button><img src={sunIcon} alt="Change light mode"/></button>
        
      </header>

      <main>
          <header className='main-header'> 
            <h1>Extension List</h1>
            <FilterButtoms/>
          </header>

          
            <Extensions/>
          

      </main>
        
    </>
  )
}

export default App
