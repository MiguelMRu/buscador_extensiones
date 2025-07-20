import { Extensions  } from './components/Extensions'
import logo from './assets/images/logo.svg'
import { FilterButtoms } from './components/FilterButtoms'
import './App.css'
import { useDarkMode } from './hooks/useDarkMode'
import { useExtensions } from './hooks/useExtensions'


function App() {

  const {handleDarkMode, icon} = useDarkMode()
  
  const { extensions, setFilter, toggleActive, removeExtension } = useExtensions()

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
            <Extensions extensions={extensions}  ontoggleActivo={toggleActive} onRemove={removeExtension}/>
      </main>
        
    </>
  )
}

export default App
