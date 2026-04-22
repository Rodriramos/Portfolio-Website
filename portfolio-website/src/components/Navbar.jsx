const Navbar = () => {
	return (
		<header className="h-16 sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/90 backdrop-blur">
			<nav className="h-full mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

				{/* Contenedor agrupado a la izquierda */}
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
						className="lucide lucide-book-open-text"
					>
						<path d="M12 7v14" /><path d="M16 12h2" /><path d="M16 8h2" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /><path d="M6 12h2" /><path d="M6 8h2" />
					</svg>
					<span className="text-lg font-semibold tracking-tight">Portfolio</span>
				</a>
				<div className="flex items-center gap-6 text-sm text-slate-300">
					<a href="#about" className="hover:text-white">Sobre mí</a>
					<a href="#projects" className="hover:text-white">Proyectos</a>
					<a href="#contact" className="hover:text-white">Contacto</a>
				</div>
			</nav>
		</header>
	)
}

export default Navbar
