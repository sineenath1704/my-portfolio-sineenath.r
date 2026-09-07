import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Landing from './components/Landing'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ResumeSwitcher from './components/Resume_Switcher'
import ProjectDetailTemplate from './components/ProjectForJSX/ProjectDetailTemplate'
import ProjectDetailONEPUT from './components/ProjectForJSX/Intern/ProjectDetailONEPUT'
import ProjectDetailFocusRoom from './components/ProjectForJSX/University/ProjectDetailFocusRoom'
import ProjectDetailCPAxtraMile from './components/ProjectForJSX/Hack/ProjectDetailCPAxtraMile'
import ProjectDetailHerEvidence from './components/ProjectForJSX/Hack/ProjectDetailHerEvidence'
import ProjectDetailSITHelloWorldHippo from './components/ProjectForJSX/Hack/ProjectDetailSITHelloWorldHippo'

function ScrollToHash() {
  const { pathname, hash, search } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const scrollToSection = () => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
          return true
        }
        return false
      }

      if (!scrollToSection()) {
        const t1 = setTimeout(scrollToSection, 100)
        const t2 = setTimeout(scrollToSection, 300)
        const t3 = setTimeout(scrollToSection, 600)
        return () => {
          clearTimeout(t1)
          clearTimeout(t2)
          clearTimeout(t3)
        }
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [pathname, hash, search])

  return null
}

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
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<MainLayout />} />
        <Route path="/projects" element={<Navigate to="/home#projects" replace />} />
        <Route path="/Projects" element={<Navigate to="/home#projects" replace />} />
        <Route path="/Projects.jsx" element={<Navigate to="/home#projects" replace />} />
        <Route path="/Project.jsx" element={<Navigate to="/home#projects" replace />} />
        <Route path="/resume" element={<ResumeSwitcher />} />
        <Route path="/Resume_Switcher" element={<ResumeSwitcher />} />
        <Route path="/Resume_Switcher.jsx" element={<ResumeSwitcher />} />

        {/* Project Detail Routes */}
        <Route path="/project-detail" element={<ProjectDetailTemplate />} />
        <Route path="/project-detail/oneput" element={<ProjectDetailONEPUT />} />
        <Route path="/ProjectDetailONEPUT" element={<ProjectDetailONEPUT />} />
        <Route path="/project-detail/focus-room" element={<ProjectDetailFocusRoom />} />
        <Route path="/ProjectDetailFocusRoom" element={<ProjectDetailFocusRoom />} />
        <Route path="/project-detail/cp-axtra-mile" element={<ProjectDetailCPAxtraMile />} />
        <Route path="/ProjectDetailCPAxtraMile" element={<ProjectDetailCPAxtraMile />} />
        <Route path="/project-detail/herevidence" element={<ProjectDetailHerEvidence />} />
        <Route path="/ProjectDetailHerEvidence" element={<ProjectDetailHerEvidence />} />
        <Route path="/project-detail/sit-hello-world-hippo" element={<ProjectDetailSITHelloWorldHippo />} />
        <Route path="/ProjectDetailSITHelloWorldHippo" element={<ProjectDetailSITHelloWorldHippo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App