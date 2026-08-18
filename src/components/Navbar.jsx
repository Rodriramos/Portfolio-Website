import { useState, useEffect, useRef, useCallback } from "react";
import { useLanguage } from "../context/LanguageContext";

const LINKS_ES = [
  { id: "home", label: "Inicio" },
  { id: "about", label: "Sobre mí" },
  { id: "experience", label: "Experiencia" },
  { id: "projects", label: "Proyectos" },
  { id: "tech-stack", label: "Stack Tecnológico" }
];

const LINKS_EN = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "tech-stack", label: "Tech Stack" }
];

const LANGUAGES = [
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "en", label: "English", flag: "🇬🇧" }
];

// Subcomponente independiente para el selector de idioma
const LanguageSelector = ({ currentLang, languages, onSelect, language, isMobile = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative z-20" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 rounded-full text-xs md:text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 ${
          isMobile ? "px-2 py-1" : "px-3 py-1.5 hover:bg-white/5"
        }`}
        aria-label="Seleccionar idioma"
        aria-expanded={isOpen}
      >
        <span className="text-sm md:text-base leading-none">{currentLang.flag}</span>
        {/* Muestra el nombre completo ("Español" / "English") */}
        <span className="font-semibold">{currentLang.label}</span>
        
        {/* Icono de flecha corregido con viewBox y shrink-0 */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {isOpen && (
        <div
          className={`absolute top-full mt-2 w-40 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/95 p-1 shadow-[0_8px_30px_rgb(0,0,0,0.5)] backdrop-blur-xl ${
            isMobile ? "right-0" : "left-1/2 -translate-x-1/2"
          }`}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                onSelect(lang.code);
                setIsOpen(false);
              }}
              className={`flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-xs md:text-sm font-medium transition-colors ${
                language === lang.code
                  ? "bg-blue-400/15 text-blue-300"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              <span className="text-base leading-none">{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const { language, setLanguage } = useLanguage();
  const LINKS = language === "es" ? LINKS_ES : LINKS_EN;

  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const linkRefs = useRef({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });

  const currentLang = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  const moveIndicator = useCallback((id) => {
    const el = linkRefs.current[id];
    if (el) {
      setIndicator({ left: el.offsetLeft, width: el.offsetWidth, opacity: 1 });
    }
  }, []);

  useEffect(() => {
    moveIndicator(active);
  }, [active, moveIndicator, language]);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [LINKS]);

  const handleClick = (id) => {
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4 mt-2 md:mt-4">
      {/* Desktop Navigation Container */}
      <div className="hidden md:flex items-center">
        <nav className="relative flex items-center gap-1 rounded-full border border-white/10 bg-linear-to-r from-slate-950 to-slate-900 px-3 py-2 shadow-[0_8px_30px_rgb(0,0,0,0.5)] backdrop-blur-xl">
          {/* Indicador animado deslizante */}
          <span
            className="absolute top-2 h-[calc(100%-1rem)] rounded-full bg-blue-400/15 border border-blue-400/30 transition-all duration-300 ease-out pointer-events-none"
            style={{ left: indicator.left, width: indicator.width, opacity: indicator.opacity }}
          />

          {/* Enlaces de navegación */}
          {LINKS.map((link) => (
            <a
              key={link.id}
              ref={(el) => (linkRefs.current[link.id] = el)}
              href={`#${link.id}`}
              onClick={() => handleClick(link.id)}
              className={`relative z-10 rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200 ${
                active === link.id ? "text-blue-300" : "text-slate-300 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}

          {/* Divisor vertical */}
          <div className="mx-1 h-5 w-px bg-white/10" />

          {/* Selector de idioma integrado dentro del Navbar */}
          <LanguageSelector
            currentLang={currentLang}
            languages={LANGUAGES}
            onSelect={setLanguage}
            language={language}
          />
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden w-full max-w-sm">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-slate-950/80 px-4 py-2.5 shadow-[0_8px_30px_rgb(0,0,0,0.5)] backdrop-blur-xl">
          <span className="text-sm font-semibold text-blue-300">
            {LINKS.find((l) => l.id === active)?.label}
          </span>

          <div className="flex items-center gap-3">
            {/* Selector de idioma integrado en barra móvil */}
            <LanguageSelector
              currentLang={currentLang}
              languages={LANGUAGES}
              onSelect={setLanguage}
              language={language}
              isMobile={true}
            />

            {/* Botón desplegable menú móvil */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="text-slate-300 hover:text-white transition-colors"
            >
              {menuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Desplegable de enlaces móvil */}
        {menuOpen && (
          <div className="mt-2 flex flex-col gap-1 rounded-2xl border border-white/10 bg-slate-950/90 p-2 shadow-[0_8px_30px_rgb(0,0,0,0.5)] backdrop-blur-xl">
            {LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => handleClick(link.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active === link.id ? "bg-blue-400/15 text-blue-300" : "text-slate-400 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;