import Header from "./components/Header"
import Hero from './pages/home/Hero'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import AboutPage from "./pages/About/AboutPage"
import ProjectPage from "./pages/Projects/ProjectPage"

function App() {
  return (
    <>
      <div className=" md:w-8/12 w-11/12 m-auto mt-14 ">
        <Header />
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
