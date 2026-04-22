const projects = [
	{
		title: 'Landing page',
		description: 'Una landing responsive con foco en conversión y contenido claro.',
	},
	{
		title: 'Dashboard',
		description: 'Panel con componentes reutilizables y una estructura limpia.',
	},
	{
		title: 'Portfolio',
		description: 'Sitio personal con secciones simples para presentar trabajo y contacto.',
	},
]

const Projects = () => {
	return (
		<section id="projects" className="mx-auto max-w-6xl px-6 py-24">
			<div className="mb-10 max-w-2xl">
				<p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">Projects</p>
				<h2 className="text-3xl font-bold text-white md:text-4xl">Algunos trabajos recientes</h2>
			</div>
			<div className="grid gap-6 md:grid-cols-3">
				{projects.map((project) => (
					<article key={project.title} className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg shadow-black/20">
						<h3 className="mb-3 text-xl font-semibold text-white">{project.title}</h3>
						<p className="leading-7 text-slate-400">{project.description}</p>
					</article>
				))}
			</div>
		</section>
	)
}

export default Projects
