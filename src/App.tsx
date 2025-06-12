import Header from "./components/Header"
import Hero from './pages/home/Hero'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import AboutPage from "./pages/About/AboutPage"
import ProjectPage from "./pages/Projects/ProjectPage"
import ScrollToTop from "./components/ScrollToTop"
import { useEffect } from "react"

function App() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className=" md:w-8/12 w-11/12 m-auto mt-14 ">
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          {/* <Route path="/education" element={<Hero />} />
          <Route path="/blogs" element={<Hero />} /> */}
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
