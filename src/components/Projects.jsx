import React from 'react';
import { FolderKanban } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language].projects;

  const projects = [
    {
      title: t.project1.name,
      description: t.project1.description,
      github: 'https://github.com/Rodriramos/Rent-a-car.git',
      image: '/rent-a-car.png',
      tech: ['.NET', 'React', 'Angular', 'Tailwindcss', 'MongoDB', 'PostgreSQL', 'MySQL', 'Docker', 'Swagger', 'Postman']
    },
    {
      title: t.project2.name,
      description: t.project2.description,
      github: 'https://github.com/Rodriramos/Disease-Models-Ontology-Based.git',
      image: '/ontology-app.png',
      tech: ['Python', 'FastAPI', 'owlready2', 'React', 'Tailwindcss', 'React Flow']
    },
    {
      title: t.project3.name,
      description: t.project3.description,
      github: 'https://github.com/Rodriramos/RealtimeChatAPI.git',
      image: '/realtime-chat.png',
      tech: ['Java', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'WebSockets', 'JWT', 'MySQL/PostgreSQL', 'React', 'Tailwindcss']
    }
  ];

  return (
    <section id="projects" className="relative overflow-hidden px-4 sm:px-6 pt-10 sm:pt-16 pb-10 sm:pb-18 text-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-4 mb-3">
            <FolderKanban
              className="relative w-8 h-8 text-blue-400"
              strokeWidth={1.8}
            />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{t.title}</h2>
          </div>
        </div>

        {/* Lista de proyectos */}
        <div className="flex flex-col gap-8 sm:gap-10">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col md:flex-row gap-6 sm:gap-8 rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-md p-5 sm:p-7 transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/70 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1"
            >
              {/* Contenedor de la Imagen */}
              <div className="w-full md:w-5/12 lg:w-1/2 shrink-0 flex items-center justify-center">
                <div className="w-full h-auto max-h-70 rounded-xl overflow-hidden border-2 border-blue-500/40 bg-slate-900 shadow-md transition-all duration-300 group-hover:scale-102 group-hover:border-blue-400">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain block"
                  />
                </div>
              </div>

              {/* Información del Proyecto */}
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-bold text-white leading-snug">
                    {project.title}{' '}
                    <span className="text-xs sm:text-sm font-normal text-slate-400 inline-block">[GitHub]</span>
                  </h3>
                  <p className="mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed text-slate-400">
                    {project.description}
                  </p>
                </div>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                  {project.tech.map((techItem) => (
                    <span key={techItem} className="text-xs font-mono px-3 py-1 rounded-lg bg-blue-400/20 border border-blue-400/30 text-blue-300">
                      {techItem}
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