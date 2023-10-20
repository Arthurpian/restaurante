import { useState } from 'react';
import Logo from '../assets/Logo1.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import '../estilos/Nav.css';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function menuShow() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <header>
        <nav className="nav-bar">
          <div className="logo">
            <img src={Logo} alt="Logo"></img>
            <h1>La Morte</h1>
          </div>

          <div className="nav-list">
            <ul>
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/produtos" className="nav-link">Produtos</Link>
              </li>
              <li className="nav-item">
                <Link to="/sobre" className="nav-link">Sobre</Link>
              </li> 
            </ul>
          </div>

          <div className="login-button">
            <button>
              <Link to="/login">Login</Link>
            </button>
          </div>

          <div className="mobile-menu-icon">
            <button onClick={menuShow}>
              <div className="icon">
                {isMenuOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
              </div>
            </button>
          </div>
        </nav>

        <div className={`mobile-menu${isMenuOpen ? ' open' : ''}`}>
          <ul>
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/produtos" className="nav-link">Produtos</Link>
            </li>
            <li className="nav-item">
              <Link to="/sobre" className="nav-link">Sobre</Link>
            </li>
          </ul>

          <div className="login-button">
            <button>
              <Link to="/login">Login</Link>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Nav;
