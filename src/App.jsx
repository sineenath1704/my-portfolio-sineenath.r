import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './components/Landing'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ResumeSwitcher from './components/Resume_Switcher'

function MainLayout() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<MainLayout />} />
        <Route path="/resume" element={<ResumeSwitcher />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App