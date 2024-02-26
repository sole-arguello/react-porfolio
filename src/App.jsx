
import './App.scss'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Aboutme from './components/Aboutme'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import EmailForm from './components/EmailForm'
import {BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>

        <div className="app">
          <Navbar />
          <Hero/>
          <Aboutme/>
          <Experience/>
          <Projects/>
          <Contact/>

          <Routes>
            {/* <Route path="/" element={<Hero/>} />
            <Route path="/about" element={<Aboutme/>} />
            <Route path="/experience" element={<Experience/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/contact" element={<Contact/>} /> */}
            <Route path="/emailForm" element={<EmailForm/>} />
          </Routes>
        
        </div>
    </BrowserRouter>
  )
}

export default App
