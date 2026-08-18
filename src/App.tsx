import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import About from "./components/About"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import { LanguageProvider } from "./context/LanguageContext"

function App() {
  return (
    <div className="relative bg-slate-950 text-slate-200 min-h-screen selection:bg-blue-500 selection:text-white overflow-x-hidden">

      {/* 🌌 FONDO DINÁMICO RESPONSIVO */}
      <div className="absolute inset-0 min-h-full w-full z-0 pointer-events-none overflow-hidden">

        {/* 1. Header & Home: Luz superior */}
        <div
          className="absolute -top-25 sm:-top-37.5 left-1/2 -translate-x-1/2 w-125 sm:w-300 h-100 sm:h-150 rounded-full blur-[100px] sm:blur-[130px]"
          style={{
            background: "radial-gradient(circle at center, rgba(168, 85, 247, 0.4) 0%, rgba(59, 130, 246, 0.25) 50%, transparent 80%)"
          }}
        />

        {/* 2. About & Experience: Luz derecha */}
        <div
          className="absolute top-[20%] -right-25 sm:-right-37.5 w-112.5 sm:w-200 h-125 sm:h-175 rounded-full blur-[110px] sm:blur-[150px]"
          style={{
            background: "radial-gradient(circle at center, rgba(236, 72, 153, 0.3) 0%, transparent 70%)"
          }}
        />

        {/* 3. Projects: Luz izquierda */}
        <div
          className="absolute top-[45%] -left-25 sm:-left-37.5 w-112.5 sm:w-200 h-125 sm:h-175 rounded-full blur-[110px] sm:blur-[150px]"
          style={{
            background: "radial-gradient(circle at center, rgba(6, 182, 212, 0.28) 0%, transparent 70%)"
          }}
        />

        {/* 4. Projects/Skills: Luz derecha */}
        <div
          className="absolute top-[70%] -right-25 sm:-right-37.5 w-112.5 sm:w-200 h-125 sm:h-175 rounded-full blur-[110px] sm:blur-[160px]"
          style={{
            background: "radial-gradient(circle at center, rgba(99, 102, 241, 0.3) 0%, transparent 70%)"
          }}
        />

        {/* 5. Footer: Luz inferior */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-125 sm:w-300 h-100 sm:h-150 rounded-full blur-[100px] sm:blur-[140px]"
          style={{
            background: "radial-gradient(circle at center, rgba(147, 51, 234, 0.25) 0%, rgba(59, 130, 246, 0.15) 60%, transparent 85%)"
          }}
        />

      </div>

      {/* 📦 CONTENIDO PRINCIPAL */}
      <div className="relative z-10">
        <LanguageProvider>
          <Navbar />
          <main>
            <Home />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Footer />
          </main>
        </LanguageProvider>
      </div>
    </div>
  );
}

export default App;