import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 py-20 bg-slate-950 text-white">
      <div className="w-full max-w-3xl">

        {/* Tarjeta de perfil */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mb-10 md:mb-12 border border-slate-700 p-6 sm:p-8 rounded-2xl bg-slate-900/50 backdrop-blur-sm">

          {/* Imagen */}
          <div className="shrink-0">
            <img
              src="./profile.png"
              alt="Rodrigo Ramos Hernández"
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-blue-500/50 shadow-xl"
            />
          </div>

          {/* Texto */}
          <div className="text-center md:text-left">
            <span className="text-blue-400 font-medium tracking-wider uppercase text-sm mb-2 block">
              Hola, soy
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Rodrigo Ramos Hernández.
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-400 mt-2">
              Ingeniero informático recién graduado.
            </h2>
          </div>
        </div>

        {/* Frase impactante */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-slate-400 mb-6 md:mb-8 leading-snug">
          Transformando ideas en software mientras crezco como ingeniero.
        </h2>

        {/* Descripción */}
        <p className="text-base sm:text-lg text-slate-500 mb-8 md:mb-10 max-w-xl mx-auto">
          Desarrollador junior apasionado por el desarrollo de software,
          las aplicaciones web y la ciencia de datos. Siempre buscando aprender
          nuevas tecnologías y crear soluciones con impacto.
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <a href="#projects" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 transition-colors rounded-lg font-medium text-white">
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