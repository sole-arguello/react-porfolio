import { FaGithub, FaInvision, FaRegEnvelope  } from "react-icons/fa6";

export default function Contact() {
  return (
    <footer className='contact__container' id='contact'>

        <div className='contact__content'>
            <h2 className='contact__content-title'>Contacto</h2>
            <p className='contact__content-text'>Feel free to react out!</p>
        </div>

        <ul className='contact__content-links'>
            <li className='contact__content-links_item'>
                <FaRegEnvelope className="contact__content-icon"/>
                <a className='contact__content-links_item-link' href="mailito:soledad.arguello.trabajo@gmailcom">soledad.arguello.trabajo@gmailcom</a>
            </li>
            <li className='contact__content-links_item'>
                <FaInvision className="contact__content-icon"/>
                <a className='contact__content-links_item-link' href="https://www.linkedin.com/in/soledad-arguello/">Linkedin.com</a>
            </li>
            <li className='contact__content-links_item'>
                <FaGithub className="contact__content-icon"/>
                <a className='contact__content-links_item-link' href="https://github.com/sole-arguello">Github.com</a>
            </li>
            
        </ul>
    </footer>
  )
}