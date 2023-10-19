import {} from 'react'
import { BiLogoFacebookCircle } from 'react-icons/bi';
import { AiFillInstagram } from 'react-icons/ai';
import { BsWhatsapp , BsEnvelope} from 'react-icons/bs';
import '../estilos/Rodape.css'


function Ropade() {
  return (
    <footer>
      <div className="footer_content">
        <div className="footer_contacts">
          <h1>La Morte</h1>

          <div className="footer_social_media">
            <a href='#' className='footer-link' id='instagram'>
              <AiFillInstagram />
            </a>
            <a href='#' className='footer-link' id='facebook'>
              <BiLogoFacebookCircle />
            </a>
            <a href='#' className='footer-link' id='whatsapp'>
              <BsWhatsapp />
            </a>
          </div>
        </div>

        <ul className='footer-list'>
          <li>
            <h3>Blog</h3>
          </li>
          <li>
            <a href='#' className='footer-link'>Tech</a>
          </li>
          <li>
            <a href='#' className='footer-link'>Adventure</a>
          </li>
          <li>
            <a href='#' className='footer-link'>Music</a>
          </li>
        </ul>

        <ul className='footer-list'>
          <li>
            <h3>Product</h3>
          </li>
          <li>
            <a href='#' className='footer-link'>App</a>
          </li>
          <li>
            <a href='#' className='footer-link'>Desktop</a>
          </li>
          <li>
            <a href='#' className='footer-link'>Cloud</a>
          </li>
        </ul>

        <div className="footer_subscribe">
          <h3>Subscribe</h3>

          <p>
            Enter your e-mail to get notified about our new solutions
          </p>

          <div className="input_group">
            <input type='email' className='email' />
            <button>
              <BsEnvelope />
            </button>
          </div>
        </div>
      </div>

      <div className="footer_copyright">
        &copy; 2023 all rights reserved
      </div>
    </footer>
  )
}


export default Ropade