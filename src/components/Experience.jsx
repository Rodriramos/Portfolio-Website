import React from 'react';
import { BriefcaseBusiness } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: 'Profesor Particular de Informática',
      company: 'Autónomo · Remoto',
      period: 'Junio 2023 - Presente',
      current: true,
      description: [
        'Imparto clases individuales a estudiantes universitarios de **Ingeniería Informática**.',
        'Refuerzo fundamentos de **programación, algoritmos y estructuras de datos**.',
        'Traduzco conceptos teóricos complejos en ejercicios prácticos y proyectos reales.'
      ]
    },
    {
      role: 'Prácticas como Desarrollador de Software',
      company: 'TecAlliance',
      period: 'Octubre 2025 - Diciembre 2025',
      current: false,
      description: [
        'Desarrollé una **aplicación Full-Stack para la gestión y alquiler de vehículos**, creando soluciones diferenciadas para usuarios y administradores.',
        'Diseñé y desarrollé una **ETL** para extraer, transformar y almacenar datos de vehículos matriculados en España entre 2014 y 2024.',
        'Desarrollé una **API REST** para centralizar el acceso a los datos y conectar los servicios backend con las aplicaciones frontend.',
        'Implementé interfaces con React para la gestión administrativa y Angular para la aplicación orientada al usuario.'
      ]
    }
  ];

  return (
    <section id="experience" className="relative overflow-hidden px-4 sm:px-6 pt-10 sm:pt-16 pb-20 sm:pb-10 text-slate-200">

      <div className="max-w-6xl mx-auto">
        <div className="max-w-4xl">

          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-3">
              <BriefcaseBusiness
                className="relative w-8 h-8 text-blue-400 shrink-0"
                strokeWidth={1.8}
              />
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                Experiencia Profesional
              </h2>
            </div>
          </div>

          {/* Timeline Container */}
          <div className="relative pl-6 sm:pl-8 border-l border-slate-800/80 space-y-12">

            {experiences.map((exp, idx) => (
              <div key={idx} className="relative group">

                {/* Timeline Indicator Dot */}
                <div className="absolute -left-7.75 sm:-left-9.75 top-1.5 flex items-center justify-center">
                  {exp.current ? (
                    <span className="relative flex h-4 w-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                      <span className="relative inline-flex h-4 w-4 rounded-full bg-blue-500 border-2 border-slate-950 shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
                    </span>
                  ) : (
                    <span className="h-3.5 w-3.5 rounded-full bg-slate-700 border-2 border-slate-950 group-hover:bg-blue-400 transition-colors" />
                  )}
                </div>

                {/* Contenido Libre (Sin Tarjeta/Caja) */}
                <div className="transition-all duration-300">

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-sm sm:text-base font-semibold text-blue-400 mt-2">
                        {exp.company}
                      </p>
                    </div>
                    <span className="inline-block text-xs font-mono text-slate-400 bg-slate-900/80 border border-slate-800 px-3 py-1 rounded-full w-fit">
                      {exp.period}
                    </span>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-2.5 text-sm sm:text-base text-slate-300/90 leading-relaxed">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="text-blue-400 mt-1.5 text-xs">▹</span>
                        <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-medium">$1</strong>') }} />
                      </li>
                    ))}
                  </ul>

                </div>

              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;