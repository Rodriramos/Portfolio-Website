const projects = [
	{
		title: 'Desarrollo full-stack de una aplicación web para la gestión de alquileres de vehículos',
		description: 'Sistema completo de gestión de alquileres de vehículos. Incluye un frontend para buscar y reservar vehículos, una interfaz de administración, y un backend que maneja la lógica de negocio, autenticación y gestión de datos. Además, se desarrolló una ETL que permite cargar todos los vehículos matriculados en España entre 2014 y 2024.',
		github: 'https://github.com/Rodriramos/Rent-a-car.git',
		tech: ['.NET', 'React', 'Angular', 'Tailwindcss', 'MongoDB', 'PostgreSQL', 'MySQL', 'Docker', 'Swagger', 'Postman']
	},
	{
		title: 'Herramienta interactiva basada en ontologías para la creación de modelos de tecnologías sanitarias',
		description: 'Permite crear modelos de enfermedades para su evaluación económica basados en ontologías. Backend encargado de cargar, modificar y exportar ontologías. Frontend destinado a usuarios sin conocimientos técnicos para crear modelos y exportarlos en formato OWL.',
		github: 'https://github.com/Rodriramos/Disease-Models-Ontology-Based.git',
		tech: ['Python', 'FastAPI', 'owlready2', 'React', 'Tailwindcss', 'React Flow']
	},
];

const Projects = () => {
	return (
		<section id="projects" className="mx-auto px-4 sm:px-6 py-10 sm:py-16 bg-slate-900">
			<div className="max-w-6xl mx-auto">
				<div className="mb-8 sm:mb-12">
					<p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">Mis proyectos</p>
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Proyectos de desarrollo</h2>
				</div>

				<div className="grid gap-5 sm:gap-8 grid-cols-1 md:grid-cols-2">
					{projects.map((project) => (
						<a
							key={project.title}
							href={project.github}
							target="_blank"
							rel="noopener noreferrer"
							className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-8 transition-all duration-300 hover:border-blue-500/50 hover:bg-slate-800/50 hover:-translate-y-1 sm:hover:-translate-y-2"
						>
							<h3 className="mb-3 sm:mb-4 text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
								{project.title}{' '}
								<span className="text-xs sm:text-sm font-normal text-slate-400">[GitHub]</span>
							</h3>
							<p className="mb-5 sm:mb-6 text-sm sm:text-base leading-7 text-slate-400 grow">
								{project.description}
							</p>
							<div className="flex flex-wrap gap-1.5 sm:gap-2">
								{project.tech.map((t) => (
									<span key={t} className="text-xs font-medium text-blue-300 bg-blue-950/30 px-2.5 py-1 rounded-full">
										{t}
									</span>
								))}
							</div>
						</a>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;