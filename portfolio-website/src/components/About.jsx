import React from 'react';

const About = () => {
	return (
		<section id="about" className="mx-auto max-w-6xl px-6 py-24 text-slate-200">
			<div className="max-w-3xl">
				{/* Etiqueta */}
				<p className="text-md font-semibold uppercase tracking-[0.2em] text-blue-400 mb-6">Sobre mí</p>

				{/* Título de impacto */}
				<h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">
					Ingeniero Informático en constante evolución.
				</h2>

				{/* Contenido */}
				<div className="space-y-6 text-lg leading-8 text-slate-400">
					<p>
						Recién graduado en Ingeniería Informática, mi objetivo es transformar problemas complejos en soluciones tecnológicas elegantes.
						Creo firmemente que la mejor ingeniería es aquella que es invisible para el usuario pero impecable en su arquitectura.
					</p>

					<p>
						Actualmente, mi foco está en expandir mis capacidades hacia el ecosistema <strong className="text-white">Full Stack</strong>,
						buscando conectar la eficiencia del frontend con la potencia del backend. Paralelamente, me apasiona la <strong className="text-white">Ciencia de Datos</strong>,
						un área donde disfruto analizando patrones para tomar decisiones basadas en información real.
					</p>

					<p>
						Más allá del código, soy una persona curiosa que disfruta de los retos técnicos. Estoy en esa etapa de mi carrera donde
						cada línea de código es una oportunidad para aprender algo nuevo y mejorar mi metodología de trabajo.
					</p>
				</div>

				{/* Sección de Tecnologías (Añade este toque técnico) */}
				<div className="mt-10">
					<h4 className="text-sm font-semibold text-slate-200 mb-4 uppercase tracking-wider">Stack tecnológico actual:</h4>
					<div className="flex flex-wrap gap-x-5 gap-y-3">
						{['C++', 'Python', 'JavaScript', 'React', 'Tailwindcss', 'MySQL', 'PostgreSQL', 'MongoDB', 'Docker', 'Power BI', 'Git', 'GitHub'].map((tech) => (
							<span key={tech} className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-md text-sm text-blue-300">
								{tech}
							</span>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default About