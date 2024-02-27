import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <section className="container__hero">
      <div className="content__hero--container">
        <div className="content__hero">
          <h1 className="content__hero--title">Hola, soy Soledad</h1>
          <div className="content__hero--description">
            <p>Soy desarrolladora FullStack con 2 años de experiencia trabajando con React.js y Node.Js - Express.</p>
            <p>¡Comunícate con migo, si quieres saber más de mi! </p>
          </div>
          <Link className="content__hero--btnContact" to={"/emailForm"}>
            Contactame
          </Link>
        </div>
        <img className="image__hero" src="/assets/about/hero.jpeg" alt="imagen personal" />
        {/* <img className="image__hero" src={getImageUrl('/assets/about/yo.jpeg')} alt="mi imagen" /> */}
        <div className="topBlur__hero" />
        <div className="bottomBlur__hero" />
      </div>
    </section>
  );
}
