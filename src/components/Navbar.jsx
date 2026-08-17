import { useState, useEffect, useRef, useCallback } from "react";

const LINKS = [
  { id: "home", label: "Inicio" },
  { id: "experience", label: "Experiencia" },
  { id: "projects", label: "Proyectos" },
  { id: "contact", label: "Contacto" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const linkRefs = useRef({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });

  // Mide la posición del link activo para mover el indicador
  const moveIndicator = useCallback((id) => {
    const el = linkRefs.current[id];
    if (el) {
      setIndicator({ left: el.offsetLeft, width: el.offsetWidth, opacity: 1 });
    }
  }, []);

  useEffect(() => {
    moveIndicator(active);
  }, [active, moveIndicator]);

  // Detecta qué sección está en pantalla
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
  }, []);

  const handleClick = (id) => {
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4">
      {/* Píldora centrada — desktop */}
      <nav
        className="hidden md:flex relative items-center gap-1 rounded-full border border-white/10 bg-linear-to-r from-slate-950 to-slate-900 px-2 py-2 shadow-[0_8px_30px_rgb(0,0,0,0.5)] backdrop-blur-xl"
      >
        {/* Indicador deslizante */}
        <span
          className="absolute top-2 h-[calc(100%-1rem)] rounded-full bg-blue-400/15 border border-blue-400/30 transition-all duration-300 ease-out"
          style={{ left: indicator.left, width: indicator.width, opacity: indicator.opacity }}
        />

        {LINKS.map((link) => (
          <a
            key={link.id}
            ref={(el) => (linkRefs.current[link.id] = el)}
            href={`#${link.id}`}
            onClick={() => handleClick(link.id)}
            className={`relative z-10 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${active === link.id
                ? "text-blue-300"
                : "text-slate-400 hover:text-white"
              }`}
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Versión móvil */}
      <div className="md:hidden w-full max-w-sm">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-slate-950/80 px-4 py-2.5 shadow-[0_8px_30px_rgb(0,0,0,0.5)] backdrop-blur-xl">
          <span className="text-sm font-semibold text-blue-300">
            {LINKS.find((l) => l.id === active)?.label}
          </span>
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

        {menuOpen && (
          <div className="mt-2 flex flex-col gap-1 rounded-2xl border border-white/10 bg-slate-950/90 p-2 shadow-[0_8px_30px_rgb(0,0,0,0.5)] backdrop-blur-xl">
            {LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => handleClick(link.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${active === link.id
                    ? "bg-blue-400/15 text-blue-300"
                    : "text-slate-400 hover:text-white"
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