import Navbar from "./Navbar";
import Hero from "./Hero";
import Aboutme from "./Aboutme";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Aboutme />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
