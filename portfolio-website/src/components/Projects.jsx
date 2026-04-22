const projects = [
	{
		title: 'Desarrollo full-stack de una aplicación web para la gestión de alquileres de vehículos',
		description: 'Este proyecto es un sistema completo de gestión de alquileres de vehículos. Incluye un frontend para que los usuarios puedan buscar y reservar vehículos, otra interfaz para la administración, y un backend que maneja la lógica de negocio, la autenticación y la gestión de datos. Además, se desarrolló una ETL que permite cargar todos los vehículos matriculados en España entre 2014 y 2024, lo que añade un valor significativo al proyecto al proporcionar una base de datos realista y actualizada.',
		github: 'https://github.com/Rodriramos/Rent-a-car.git',
		tech: ['.NET', 'React', 'Angular', 'Tailwindcss', 'MongoDB', 'PostgreSQL', 'MySQL', 'Docker', 'Swagger', 'Postman']
	},
	{
		title: 'Herramienta interactiva basada en ontologías, para la creación de modelos de tecnologías sanitarias',
		description: 'Este proyecto permite crear modelos de enfermedades para su evaluación económica basados en ontologías. Para ello se dispuso de un backend que es el encargado de cargar, modificar y exportar las ontologías que se van creando. Por otra parte, se desarrolló un frontend destinado a que cualquier usuario sin conocimientos sobre la manipulación de ontologías pueda crear sus propios modelos de enfermedades, y exportarlos en formato OWL para su posterior uso en herramientas de evaluación económica.',
		github: 'https://github.com/Rodriramos/Disease-Models-Ontology-Based.git',
		tech: ['Python', 'FastAPI', 'owlready2', 'React', 'Tailwindcss', 'React Flow']
	},
]

const Projects = () => {
	return (
		<section id="projects" className="mx-auto max-w-6xl px-6 py-24">
			<div className="mb-12 max-w-2xl">
				<p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">Mis proyectos</p>
				<h2 className="text-3xl font-bold text-white md:text-4xl">Proyectos de desarrollo</h2>
			</div>

			{/* Grid de 2 columnas para proyectos grandes */}
			<div className="grid gap-8 md:grid-cols-2">
				{projects.map((project) => (
					<a
						key={project.title}
						href={project.github}
						target="_blank"
						rel="noopener noreferrer"
						className="group block rounded-2xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:border-blue-500/50 hover:bg-slate-800/50 hover:-translate-y-2"
					>
						<h3 className="mb-4 text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
							{project.title} <span className="text-sm font-normal text-slate-400">[GitHub]</span>
						</h3>
						<p className="mb-6 leading-8 text-slate-400">{project.description}</p>

						{/* Tags de tecnologías */}
						<div className="flex flex-wrap gap-2">
							{project.tech.map((t) => (
								<span key={t} className="text-xs font-medium text-blue-300 bg-blue-950/30 px-3 py-1 rounded-full">
									{t}
								</span>
							))}
						</div>
					</a>
				))}
			</div>
		</section>
	)
}

export default Projects