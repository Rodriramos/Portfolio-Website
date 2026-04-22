const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-4 sm:px-6 py-8 sm:py-12">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-center md:text-left">

        <p className="text-slate-500 text-xs sm:text-sm">
          © {currentYear} Rodrigo Ramos Hernández. Todos los derechos reservados.
        </p>

        <div className="flex items-center gap-2 text-slate-500 text-xs sm:text-sm">
          <span>Construido con</span>
          <span className="text-blue-400 font-medium">React</span>
          <span>+</span>
          <span className="text-blue-400 font-medium">Tailwind</span>
          <span>+</span>
          <span className="text-blue-400 font-medium">Vite</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;