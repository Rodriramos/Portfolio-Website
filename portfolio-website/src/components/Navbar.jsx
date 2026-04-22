import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="h-16 sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/90 backdrop-blur">
      <nav className="h-full mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 7v14" /><path d="M16 12h2" /><path d="M16 8h2" />
            <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
            <path d="M6 12h2" /><path d="M6 8h2" />
          </svg>
          <span className="text-lg font-semibold tracking-tight">Portfolio</span>
        </a>

        {/* Links — solo visibles en md+ */}
        <div className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          <a href="#about" className="hover:text-white transition-colors">Sobre mí</a>
          <a href="#projects" className="hover:text-white transition-colors">Proyectos</a>
          <a href="#contact" className="hover:text-white transition-colors">Contacto</a>
        </div>

        {/* Botón hamburguesa — solo visible en móvil */}
        <button
          className="md:hidden text-slate-300 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            // Icono X
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            // Icono hamburguesa
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <div className="md:hidden border-t border-slate-800/70 bg-slate-950/95 backdrop-blur px-6 py-4 flex flex-col gap-4 text-sm text-slate-300">
          <a href="#about" className="hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>Sobre mí</a>
          <a href="#projects" className="hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>Proyectos</a>
          <a href="#contact" className="hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>Contacto</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;