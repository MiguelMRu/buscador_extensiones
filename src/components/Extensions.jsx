import './Extensions.css'

export function Extensions({ extensions, ontoggleActivo, onRemove }) {

  // No funciona hay que cambiar el estado de las extensiones


 return(
          <ul className='extension-container'>
            {
              extensions.map(extension => (
                <li key={extension.name} className='extension-item'>
                    <div className='extension-info'>
                      <img src={extension.logo} alt={extension.name} />
                      <div className='extension-text'>
                        <h3>{extension.name}</h3>
                        <p>{extension.description}</p>
                      </div>
                    </div>
               

                    <form className='extension-form'>
                        <button className='extension-button' onClick={() => onRemove(extension.name)}>Remove</button>
                        <div className="container">
                            <input type="checkbox" className="checkbox" id={extension.name} defaultChecked={extension.isActive} onClick={() => ontoggleActivo(extension.name)}/>
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