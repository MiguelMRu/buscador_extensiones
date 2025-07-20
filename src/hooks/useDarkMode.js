import sunIcon from '../assets/images/icon-sun.svg'
import moonIcon from '../assets/images/icon-moon.svg'
import { useState, useEffect } from 'react'

export function useDarkMode(){
    const [darkMode, setDarkMode] = useState(true)

    useEffect(() =>{
      if(!darkMode){
        document.body.classList.add('light-theme')
      } else {
        document.body.classList.remove('light-theme')
      }

      return () =>{
        document.body.classList.remove('light-theme')
      }

    },[darkMode])

    const handleDarkMode = (event) =>{
    event.preventDefault()
    setDarkMode(!darkMode)
  }

  const icon = darkMode ? sunIcon : moonIcon  
    
    return {handleDarkMode, icon}
  }
