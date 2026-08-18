import React from 'react';
import { BriefcaseBusiness } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

const Experience = () => {
  const { language } = useLanguage();
  const t = translations[language].experience;

  const experiences = [
    {
      role: t.jobTitle1.name,
      company: t.jobTitle1.subtitle,
      period: t.jobTitle1.date,
      current: true,
      description: [
        t.jobTitle1.description1,
        t.jobTitle1.description2,
        t.jobTitle1.description3,
      ]
    },
    {
      role: t.jobTitle2.name,
      company: t.jobTitle2.subtitle,
      period: t.jobTitle2.date,
      current: false,
      description: [
        t.jobTitle2.description1,
        t.jobTitle2.description2,
        t.jobTitle2.description3,
        t.jobTitle2.description4,
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
                {t.title}
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

                {/* Contenido */}
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
                        <span className="text-blue-400 mt-1.5 text-xs shrink-0">▹</span>
                        <span>{item}</span>
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