import React from 'react';
import {
  Code2,
  Terminal,
  Cpu,
  Layers,
  Database,
  Binary,
  BarChart3,
  Workflow,
  Globe,
  Server,
  GitBranch,
  Container,
  Box,
  Radio,
  CheckCircle2,
  Sparkles
} from "lucide-react";

const TECH_GROUPS = [
  {
    title: "Lenguajes de Programación",
    subtitle: "Bases sólidas de lógica y desarrollo",
    accent: "from-blue-500 to-cyan-400",
    glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]",
    borderHover: "group-hover:border-blue-500/50",
    badgeHover: "hover:border-blue-400 hover:shadow-[0_0_12px_rgba(96,165,250,0.3)] hover:text-blue-200",
    icon: Code2,
    iconColor: "text-blue-400",
    skills: [
      { name: "Java", icon: Terminal },
      { name: "TypeScript", icon: Code2 },
      { name: "JavaScript", icon: Code2 },
      { name: "Python", icon: Binary },
      { name: "C++", icon: Cpu },
      { name: "C", icon: Cpu },
    ]
  },
  {
    title: "Desarrollo Web & APIs",
    subtitle: "Ecosistema Full-Stack y servicios REST",
    accent: "from-cyan-400 to-emerald-400",
    glow: "group-hover:shadow-[0_0_30px_rgba(45,212,191,0.2)]",
    borderHover: "group-hover:border-cyan-500/50",
    badgeHover: "hover:border-cyan-400 hover:shadow-[0_0_12px_rgba(45,212,191,0.3)] hover:text-cyan-200",
    icon: Globe,
    iconColor: "text-cyan-400",
    skills: [
      { name: "React", icon: Layers },
      { name: "Angular", icon: Layers },
      { name: "FastAPI", icon: Server },
      { name: ".NET", icon: Server },
      { name: "Spring Boot", icon: Server },
      { name: "HTML", icon: Server },
      { name: "CSS", icon: Server },
      { name: "Tailwindcss", icon: Server },
    ]
  },
  {
    title: "Datos, Analytics & ETL",
    subtitle: "Bases de datos SQL/NoSQL y procesado",
    accent: "from-indigo-500 to-purple-500",
    glow: "group-hover:shadow-[0_0_30px_rgba(129,140,248,0.2)]",
    borderHover: "group-hover:border-indigo-500/50",
    badgeHover: "hover:border-indigo-400 hover:shadow-[0_0_12px_rgba(129,140,248,0.3)] hover:text-indigo-200",
    icon: Database,
    iconColor: "text-indigo-400",
    skills: [
      { name: "PostgreSQL", icon: Database },
      { name: "MySQL", icon: Database },
      { name: "MongoDB", icon: Database },
      { name: "Pandas", icon: BarChart3 },
      { name: "NumPy", icon: Binary },
      { name: "Power BI", icon: BarChart3 },
      { name: "Procesos ETL", icon: Workflow },
    ]
  },
  {
    title: "DevOps & Herramientas",
    subtitle: "Entorno de trabajo, contenedores y testing",
    accent: "from-emerald-400 to-teal-400",
    glow: "group-hover:shadow-[0_0_30px_rgba(52,211,153,0.2)]",
    borderHover: "group-hover:border-emerald-500/50",
    badgeHover: "hover:border-emerald-400 hover:shadow-[0_0_12px_rgba(52,211,153,0.3)] hover:text-emerald-200",
    icon: Container,
    iconColor: "text-emerald-400",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "Docker", icon: Container },
      { name: "Linux", icon: Terminal },
      { name: "Postman", icon: Box },
      { name: "Swagger", icon: CheckCircle2 },
      { name: "Visual Studio Code", icon: Code2 },
    ]
  }
];

const Skills = () => {
  return (
    <section id="tech-stack" className="relative overflow-hidden py-16 text-slate-200">

      {/* Luz Ambiental de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-87.5 bg-blue-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">

        {/* Encabezado */}
        <div className="flex flex-col items-start gap-2">
          <div className="flex items-center gap-3">
          <Sparkles className="relative w-8 h-8 text-blue-400 shrink-0" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Habilidades Técnicas</h2>
        </div>
        </div>

        {/* Grid Principal de 2 Columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {TECH_GROUPS.map((group, idx) => {
            const GroupIcon = group.icon;
            return (
              <div
                key={idx}
                className={`group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-md p-6 sm:p-8 transition-all duration-500 ${group.borderHover} ${group.glow}`}
              >
                {/* Borde superior en degradado */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r ${group.accent} opacity-40 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Cabecera del bloque */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 ${group.iconColor} shadow-inner group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                    <GroupIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {group.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                      {group.subtitle}
                    </p>
                  </div>
                </div>

                {/* Badges de Skills */}
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill, sIdx) => {
                    const SkillIcon = skill.icon;
                    return (
                      <span
                        key={sIdx}
                        className={`inline-flex items-center gap-2 text-xs font-medium px-3.5 py-2 rounded-xl bg-slate-800/60 text-slate-300 border border-slate-700/60 backdrop-blur-sm transition-all duration-300 cursor-default ${group.badgeHover}`}
                      >
                        <SkillIcon className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
                        {skill.name}
                      </span>
                    );
                  })}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;