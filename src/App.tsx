import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="bg-slate-900 min-h-screen text-white h-screen">
      <Navbar />

      <main>
        <Hero />

        <About />
        <Projects />
        <div className="grow bg-slate-900">
          <Contact />
        </div>
        <Footer />
      </main>


    </div>
  )
}

export default App
