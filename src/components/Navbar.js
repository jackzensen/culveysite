import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
import { Button } from './Button';


function Navbar() {
  const [click, setClick] = useState(false);
  const [Button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () =>{
    if(window.innerWidth <=512){
      setButton(false);
    }else{
      setButton(true);
    }
  }
window.addEventListener('resize', showButton)

  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                <i class="fa-solid fa-ice-cream">  Flavor Map</i>

                
                </Link>
                <div className='menu-icon' onClick={handleClick}> 
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                      Home
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/Map' className='nav-links' onClick={closeMobileMenu}>
                      Map
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/Data' className='nav-links' onClick={closeMobileMenu}>
                      Data
                    </Link>
                  </li>
                </ul>
                {/* {button && <Button buttonStyle='btn--outline'>log in</Button>} */}
            </div>
        </nav>

    </>
  )
}

export default Navbar