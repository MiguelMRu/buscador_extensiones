import { useState } from 'react'
import { Extensions  } from './components/Extensions'
import logo from './assets/images/logo.svg'
import sunIcon from './assets/images/icon-sun.svg'
import { FilterButtoms } from './components/FilterButtoms'
import {extensions as initialExtensions}  from './mocks/data.json'
import './App.css'

function App() {
  const [extensions] = useState(initialExtensions)
  // Estado para manejar el filtro de extensiones
  const [filter, setFilter] = useState('All')


  // Función para filtrar las extensiones según el estado
  const filteredExtensions = (extensions) => {
    if (filter === 'All')  return extensions
    return extensions.filter(extension => {
      if (filter === 'Active') {
        return extension.isActive
      } else if (filter === 'Inactive') {
        return !extension.isActive
      }
    })
  }
  // Obtener las extensiones filtradas
  const displayedExtensions = filteredExtensions(extensions)

  return (
    <>
      <header className='header'>
        <img src={logo} alt="Logo of the aplication" />
        <button><img src={sunIcon} alt="Change light mode"/></button>
        
      </header>

      <main>
          <header className='main-header'> 
            <h1>Extension List</h1>
            <FilterButtoms changeFilter={setFilter} />
          </header>
            <Extensions extensions={displayedExtensions}  />
      </main>
        
    </>
  )
}

export default App
