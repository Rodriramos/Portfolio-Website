import React from 'react';

const About = () => {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24 text-slate-200">
      <div className="max-w-3xl">

        {/* Etiqueta */}
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400 mb-4 sm:mb-6">
          Sobre mí
        </p>

        {/* Título */}
        <h2 className="mb-6 sm:mb-8 text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug">
          Ingeniero Informático en constante evolución.
        </h2>

        {/* Contenido */}
        <div className="space-y-5 text-base sm:text-lg leading-7 sm:leading-8 text-slate-400">
          <p>
            Recién graduado en Ingeniería Informática, mi objetivo es transformar problemas complejos en soluciones tecnológicas elegantes.
            Creo firmemente que la mejor ingeniería es aquella que es invisible para el usuario pero impecable en su arquitectura.
          </p>
          <p>
            Actualmente, mi foco está en expandir mis capacidades hacia el ecosistema{' '}
            <strong className="text-white">Full Stack</strong>, buscando conectar la eficiencia del frontend con la potencia del backend.
            Paralelamente, me apasiona la <strong className="text-white">Ciencia de Datos</strong>,
            un área donde disfruto analizando patrones para tomar decisiones basadas en información real.
          </p>
          <p>
            Más allá del código, soy una persona curiosa que disfruta de los retos técnicos. Estoy en esa etapa de mi carrera donde
            cada línea de código es una oportunidad para aprender algo nuevo y mejorar mi metodología de trabajo.
          </p>
        </div>

        {/* Stack tecnológico */}
        <div className="mt-8 sm:mt-10">
          <h4 className="text-xs sm:text-sm font-semibold text-slate-200 mb-3 sm:mb-4 uppercase tracking-wider">
            Stack tecnológico actual:
          </h4>
          <div className="flex flex-wrap gap-x-3 gap-y-2 sm:gap-x-5 sm:gap-y-3">
            {['C++', 'Python', 'JavaScript', 'React', 'Tailwindcss', 'MySQL', 'PostgreSQL', 'MongoDB', 'Docker', 'Power BI', 'Git', 'GitHub'].map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 sm:px-3 bg-slate-800 border border-slate-700 rounded-md text-xs sm:text-sm text-blue-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;