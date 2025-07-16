import { useState } from 'react'
import { Extensions  } from './components/Extensions'
import logo from './assets/images/logo.svg'
import sunIcon from './assets/images/icon-sun.svg'
import moonIcon from './assets/images/icon-moon.svg'
import { FilterButtoms } from './components/FilterButtoms'
import {extensions as initialExtensions}  from './mocks/data.json'
import './App.css'

function App() {
  const [extensions, setExtensions] = useState(initialExtensions)
  // Estado para manejar el filtro de extensiones
  const [filter, setFilter] = useState('All')

  const [darkMode, setDarkMode] = useState(true)

  const icon = darkMode ? sunIcon : moonIcon

  

  const handleDarkMode = (event) =>{
    event.preventDefault()
    setDarkMode(!darkMode)
    console.log(darkMode)
  }


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
  // funcion para activar o desactivar las extensiones 
  const toggleActivo = (name) => {
    setExtensions(preExtenxions => 
      preExtenxions.map(extension => 
        extension.name === name ? {...extension, isActive: !extension.isActive} : extension)
      )
  }

  const removeExtension = (name) =>{

    setExtensions(preExtenxions => 
      preExtenxions.filter(extension =>
        name !== extension.name 
      )
    )
  } 

  // Obtener las extensiones filtradas
  const displayedExtensions = filteredExtensions(extensions)

  return (
    <>
      <header className='header'>
        <img src={logo} alt="Logo of the aplication" />
        <button onClick={handleDarkMode}><img src={icon} alt="Change light mode"/></button>
        
      </header>

      <main>
          <header className='main-header'> 
            <h1>Extension List</h1>
            <FilterButtoms changeFilter={setFilter} />
          </header>
            <Extensions extensions={displayedExtensions}  ontoggleActivo={toggleActivo} onRemove={removeExtension}/>
      </main>
        
    </>
  )
}

export default App
