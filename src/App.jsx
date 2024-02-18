
import './App.scss'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Aboutme from './components/Aboutme'
import Experience from './components/Experience'

function App() {

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Aboutme />
      <Experience />
    </div>
  )
}

export default App
