import React from 'react';
import { FolderKanban } from "lucide-react";

const projects = [
  {
    title: 'Desarrollo full-stack de una aplicación web para la gestión de alquileres de vehículos',
    description: 'Sistema completo de gestión de alquileres de vehículos. Incluye un frontend para buscar y reservar vehículos, una interfaz de administración, y un backend que maneja la lógica de negocio, autenticación y gestión de datos. Además, se desarrolló una ETL que permite cargar todos los vehículos matriculados en España entre 2014 y 2024.',
    github: 'https://github.com/Rodriramos/Rent-a-car.git',
    image: '/projects/rent-a-car.jpg', // Ruta a tu imagen
    tech: ['.NET', 'React', 'Angular', 'Tailwindcss', 'MongoDB', 'PostgreSQL', 'MySQL', 'Docker', 'Swagger', 'Postman']
  },
  {
    title: 'Herramienta interactiva basada en ontologías para la creación de modelos de tecnologías sanitarias',
    description: 'Permite crear modelos de enfermedades para su evaluación económica basados en ontologías. Backend encargado de cargar, modificar y exportar ontologías. Frontend destinado a usuarios sin conocimientos técnicos para crear modelos y exportarlos en formato OWL.',
    github: 'https://github.com/Rodriramos/Disease-Models-Ontology-Based.git',
    image: '/projects/disease-models.jpg', // Ruta a tu imagen
    tech: ['Python', 'FastAPI', 'owlready2', 'React', 'Tailwindcss', 'React Flow']
  },
  {
    title: 'Real-Time Chat',
    description: 'Aplicación de chat en tiempo real desarrollada con React. Permite a los usuarios registrarse, iniciar sesión, comunicarse mediante mensajes instantáneos y participar en salas de chat públicas o privadas. La interfaz está diseñada para ofrecer una experiencia fluida de comunicación y gestión de diferentes conversaciones.',
    github: 'https://github.com/Rodriramos/RealtimeChatAPI.git',
    image: '/projects/realtime-chat.jpg', // Ruta a tu imagen
    tech: ['Java', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'WebSockets', 'JWT', 'MySQL/PostgreSQL', 'React', 'Tailwindcss']
  }
];

const Projects = () => {
  return (
    <section id="projects" className="relative overflow-hidden px-4 sm:px-6 pt-10 sm:pt-16 pb-10 sm:pb-28 bg-slate-950 text-slate-200">
      
      {/* Fondo Neón / Ambiental */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(99,102,241,0.08),rgba(255,255,255,0))]" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 -left-32 w-96 h-96 bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-4 mb-3">
            <FolderKanban
              className="relative w-8 h-8 text-blue-400"
              strokeWidth={1.8}
            />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Mis proyectos</h2>
          </div>
        </div>

        {/* Lista de proyectos apilados uno debajo de otro */}
        <div className="flex flex-col gap-8 sm:gap-10">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col md:flex-row gap-6 sm:gap-8 rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-md p-5 sm:p-7 transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/70 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1"
            >
              
              {/* Contenedor de la Imagen (Izquierda en desktop) */}
              <div className="w-full md:w-5/12 lg:w-1/2 aspect-video rounded-xl overflow-hidden border border-slate-800/80 bg-slate-950/60 shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Información del Proyecto (Derecha en desktop) */}
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
                    {project.title}{' '}
                    <span className="text-xs sm:text-sm font-normal text-slate-400 inline-block">[GitHub]</span>
                  </h3>
                  <p className="mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed text-slate-400">
                    {project.description}
                  </p>
                </div>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-800/40 border border-slate-800 text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;