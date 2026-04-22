import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="bg-slate-900 min-h-screen text-white h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <Navbar />

      <main>
        <section className="snap-start min-h-[calc(100vh-4rem)]">
          <Hero />
        </section>

        <section className="snap-start min-h-[calc(100vh-4rem)]">
          <About />
        </section>
        <section className="snap-start min-h-[calc(100vh-4rem)]">
          <Projects />
        </section>
        <section className="snap-start min-h-[calc(100vh-4rem)]">
          <Contact />
        </section>
      </main>

      <Footer />

    </div>
  )
}

export default App
