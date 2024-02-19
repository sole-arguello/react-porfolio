
import './App.scss'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Aboutme from './components/Aboutme'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Aboutme />
      <Experience />
      <Projects/>
      <Contact />
    </div>
  )
}

export default App
