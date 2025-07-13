import { useState } from 'react'
import './Extensions.css'

export function Extensions({ extensions }) {

  const [newExtensions, setExtensions] = useState(extensions)
  //Lo que hay que hacer es que cuando el chechbox este activo, cambiar el valor de isActive a true, y cuando no este activo, cambiarlo a false
  const handleActive = (event) => {
    const extensionName = event.target.id
    const isActive = event.target.checked

    // Aquí se debe actualizar el estado de la extensión correspondiente
    setExtensions(prevExtensions =>
      prevExtensions.map(extension =>
        extension.name === extensionName ? { ...extension, isActive } : extension
        
      )
    )
    console.log(`Extension ${extensionName} is now ${isActive ? 'active' : 'inactive'}`)

  }

 return(
          <ul className='extension-container'>
            {
              newExtensions.map(extension => (
                <li key={extension.name} className='extension-item'>
                    <div className='extension-info'>
                      <img src={extension.logo} alt={extension.name} />
                      <div className='extension-text'>
                        <h3>{extension.name}</h3>
                        <p>{extension.description}</p>
                      </div>
                    </div>
               

                    <form className='extension-form'>
                        <button className='extension-button'>Remove</button>
                        <div className="container">
                            <input type="checkbox" className="checkbox" id={extension.name} defaultChecked={extension.isActive} onChange={handleActive} />
                            <label className="switch" htmlFor={extension.name}>
                                <span className="slider"></span>
                            </label>
                        </div>
                  </form>
                </li>
              ))
            }

          </ul>
 )
}