import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import About from "./components/About"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Experience from "./components/Experience"

function App() {

  return (
    <div className="bg-slate-900 min-h-screen text-white h-screen">
      <Navbar />

      <main>
        <Home />

        <Experience />
        <Projects />
        <About />
        <Footer />
      </main>


    </div>
  )
}

export default App
