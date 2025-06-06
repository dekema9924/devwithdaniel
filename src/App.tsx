import Header from "./components/Header"
import Hero from './pages/home/Hero'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className=" md:w-8/12 w-11/12 m-auto mt-14 ">
        <Header />
        <Hero />
        <Footer />
      </div>
    </>
  )
}

export default App
