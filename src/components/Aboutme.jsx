import { FaArrowPointer, FaDesktop, FaMobileScreenButton } from "react-icons/fa6";
import { FaServer } from "react-icons/fa";
export default function Aboutme() {
  return (
    <section className="aboutme__container" id='about'>
      
      <div className="aboutme__content--titleImg">
        <h2 className="aboutme__content--title"> Sobre mi </h2>
        <img className="aboutme__content--img" src="/assets/about/aboutme.png" alt="imagen sobre mi" />
      </div>

      <div className="aboutme__content--info">
        <img className="aboutme__content--info-img" src="/assets/about/about.png" alt="imagen perfil" />
        
        <ul className="aboutme__content--info-list">

          <li className="aboutme__content--info-list_item" >

            <div className="aboutme__content--info-icons icons__descktop">
              <FaDesktop  className="iconsFront"/>
              <FaMobileScreenButton  className="iconsFront"/>
            </div>

            <div className="aboutme__content--info-text">
              <div className="aboutme__content--info-text_title">
                <h3 className="aboutme__title">FrontEnd Developer</h3>
                <div className="aboutme__content--info-icons incons__mobile ">
                  <FaDesktop  className="iconsFront"/>
                  <FaMobileScreenButton  className="iconsFront"/>
                </div>
              </div>
              <p className="aboutme__content--info-text_description">
              Me destaco por crear experiencias de usuario atractivas y funcionales, 
              utilizando tecnologías como React, HTML5, CSS3, Bootstrap y JavaScript. 
              Mi enfoque se centra en el diseño intuitivo y la interactividad para 
              garantizar una experiencia del usuario excepcional.</p>
            </div>

          </li>
          
          <li className="aboutme__content--info-list_item" >

            <div className="aboutme__content--info-icons icons__descktop">
              <FaServer className="iconsBack"/> 
            </div>

            <div className="aboutme__content--info-text">
              <div className="aboutme__content--info-text_title">
                <h3 className="aboutme__title">BackEnd Developer</h3>
                <div className="aboutme__content--info-icons incons__mobile ">
                  <FaServer className="iconsBack"/> 
                </div>
              </div>
              <p className="aboutme__content--info-text_description">
              Tengo experiencia sólida trabajando con tecnologías como Node.js, Express y 
              MongoDB para desarrollar aplicaciones web dinámicas y eficientes. 
              Mi enfoque pragmático se traduce en la implementación de soluciones 
              robustas y escalables.</p>
            </div>

          </li>

        </ul>
        
      </div>

    </section>
    
  )
}
