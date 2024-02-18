import { FaArrowPointer, FaDesktop, FaMobileScreenButton } from "react-icons/fa6";
import { FaServer } from "react-icons/fa";
export default function Aboutme() {
  return (
    <section className="aboutme__container" id='about'>
      
      <div className="aboutme__content--titleImg">
        <h2 className="aboutme__content--title"> Sobre mi </h2>
        <img className="aboutme__content--img" src="/assets/about/aboutme.png" alt="" />
      </div>

      <div className="aboutme__content--info">
        <img className="aboutme__content--info-img" src="/assets/about/about.png" alt="imagen se mi" />
        
        <ul className="aboutme__content--info-list">

          <li className="aboutme__content--info-list_item" >

            <div className="aboutme__content--info-icons iconsFront">
              <FaDesktop />
              <FaMobileScreenButton />
            </div>

            <div className="aboutme__content--info-text">
              <h3 className="aboutme__content--info-text_title">FrontEnd Developer</h3>
              <p className="aboutme__content--info-text_description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Tenetur, exercitationem minima.</p>
            </div>

          </li>

          <li className="aboutme__content--info-list_item" >
           
              <FaServer className="iconsBack"/>           

            <div className="aboutme__content--info-text">
              <h3 className="aboutme__content--info-text_title">FrontEnd Developer</h3>
              <p className="aboutme__content--info-text_description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Tenetur, exercitationem minima.</p>
            </div>
          </li>

        </ul>
        
      </div>

    </section>
    
  )
}
