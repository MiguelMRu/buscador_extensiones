import extensions from '../mocks/data.json'
import './Extensions.css'

export function Extensions() {



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
                        <button className='extension-button'>Remove</button>
                        <div className="container">
                            <input type="checkbox" className="checkbox" id={extension.name} checked={extension.isActive} />
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