import React from 'react';

const Hero = () => {
	return (
		<section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 bg-slate-950 text-white">
			<div className="max-w-3xl">
				<div className="flex flex-col md:flex-row items-center gap-8 mb-12 border border-slate-700 p-8 rounded-2xl bg-slate-900/50 backdrop-blur-sm">

					{/* Contenedor de la Imagen - Recortada en círculo */}
					<div className="shrink-0">
						<img src="./profile.png" alt="Rodrigo Ramos Hernández" className="w-50 h-50 rounded-full object-cover border-4 border-blue-500/50 shadow-xl"
						/>
					</div>

					{/* Contenedor del Texto */}
					<div className="text-center md:text-left">
						{/* Pequeño saludo opcional */}
						<span className="text-blue-400 font-medium tracking-wider uppercase text-md mb-2 block">
							Hola, soy
						</span>

						{/* Tu Nombre */}
						<h1 className="text-5xl font-bold tracking-tight text-white">
							Rodrigo Ramos Hernández.
						</h1>

						{/* Tu Rol/Subtítulo */}
						<h2 className="text-2xl font-semibold text-slate-400 mt-2">
							Ingeniero informático recién graduado.
						</h2>
					</div>
				</div>


				{/* Tu frase impactante */}
				<h2 className="text-3xl md:text-5xl font-semibold text-slate-400 mb-8">
					Transformando ideas en software mientras crezco como ingeniero.
				</h2>

				{/* Descripción corta */}
				<p className="text-lg text-slate-500 mb-10 max-w-xl mx-auto">
					Desarrollador junior apasionado por el desarrollo de software,
					las aplicaciones web y la ciencia de datos. Siempre buscando aprender
					nuevas tecnologías y crear soluciones con impacto.
				</p>

				{/* Botones de acción */}
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<a
						href="#projects"
						className="px-8 py-3 bg-blue-600 hover:bg-blue-700 transition-colors rounded-lg font-medium text-white"
					>
						Ver mis proyectos
					</a>
					<a
						href="/Cv.pdf"
						download="English CV Rodrigo Ramos Hernandez.pdf"
						className="px-8 py-3 border border-slate-700 hover:border-slate-500 transition-colors rounded-lg font-medium text-slate-300"
					>
						Descargar CV
					</a>
				</div>
			</div>
		</section>
	);
};

export default Hero;