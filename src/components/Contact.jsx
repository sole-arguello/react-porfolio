import { FaGithub, FaInvision, FaRegEnvelope  } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Contact() {

  return (
    <footer className='contact__container' id='contact'>

        <div className='contact__content'>
            <h2 className='contact__content-title'>Contactame</h2>
            <p className='contact__content-text'>No lo dudes!</p>
        </div>

        <ul className='contact__content-links'>
            <li className='contact__content-links_item'>
                <FaRegEnvelope className="contact__content-icon"/>
                <Link className="contact__content-links_item-link" to={'/emailForm'} >soledad.arguello.trabajo@gmail.com</Link>
            </li>
            <li className='contact__content-links_item'>
                <FaInvision className="contact__content-icon"/>
                <Link className='contact__content-links_item-link' target="_blank" to='https://www.linkedin.com/in/soledad-arguello/'>Linkedin.com</Link>
            </li>
            <li className='contact__content-links_item'>
                <FaGithub className="contact__content-icon"/>
                <Link className='contact__content-links_item-link' target="_blank" to="https://github.com/sole-arguello">Github.com</Link>
            </li>
            
        </ul>
    </footer>
  )
}
