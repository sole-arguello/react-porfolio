
import './App.scss'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Aboutme from './components/Aboutme'
import Experience from './components/Experience'
import Projects from './components/Projects'

function App() {

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Aboutme />
      <Experience />
      <Projects/>
    </div>
  )
}

export default App
