import React from 'react';
import { User, GraduationCap, Code2, Sparkles, CalendarDays } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

const About = () => {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section id="about" className="relative overflow-hidden px-4 sm:px-6 pt-10 sm:pt-16 pb-15 sm:pb-20 text-slate-200">

      <div className="max-w-6xl mx-auto space-y-10">
        {/* Encabezado de Sección */}
        <div className="flex items-center gap-3">
          <User className="relative w-8 h-8 text-blue-400 shrink-0" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white">{t.title}</h2>
        </div>

        {/* Disposición en 2 Columnas Simétricas (50% / 50% de ancho) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch w-full">

          {/* Columna Izquierda: Perfil Profesional */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-md p-8 sm:p-10 shadow-xl flex flex-col justify-between h-full">
            <div>
              <div className="space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  {t.description1}
                </p>

                <p>
                  {t.description2}
                </p>

                <p>
                  {t.description3}
                </p>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Formación Académica (2 Tarjetas Independientes) */}
          <div className="flex flex-col gap-6 h-full justify-between">

            {/* Tarjeta 1: Máster (Actual) */}
            <div className="flex-1 group relative rounded-2xl border border-blue-500/30 bg-slate-900/60 backdrop-blur-md p-6 flex flex-col justify-between shadow-lg shadow-blue-500/5 transition-all duration-300 hover:border-blue-500/50">

              {/* Badge "En Curso" Neón */}
              <span className="absolute -top-2.5 -right-2.5 inline-flex items-center gap-1.5 rounded-full border border-blue-400/30 bg-blue-950 px-3 py-1 text-xs font-medium text-blue-300 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400" />
                </span>
                {t.currentStudies}
              </span>

              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">{t.masterTitle}</span>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
                  {t.masterName}
                </h4>
                <p className="text-sm text-blue-400 font-medium mt-1">
                  {t.masterLocation}
                </p>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {t.masterDescription}
                </p>
              </div>

              {/* Pie de tarjeta */}
              <div className="mt-4 pt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs text-slate-400 font-medium">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t.masterDetail}</span>
              </div>
            </div>

            {/* Tarjeta 2: Grado (Finalizado) */}
            <div className="flex-1 group rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-md p-6 flex flex-col justify-between shadow-xl transition-all duration-300 hover:border-slate-700">
              <div>
                <div className="flex items-center justify-between gap-4 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-slate-500/10 border border-slate-500/20 flex items-center justify-center text-slate-400 shrink-0">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">{t.degreeTitle}</span>
                  </div>

                  <span className="flex items-center gap-1.5 text-xs text-slate-500 font-mono bg-slate-800/50 px-2.5 py-1 rounded-full border border-slate-700/50 shrink-0">
                    <CalendarDays className="w-3.5 h-3.5 text-slate-600" />
                    2021 - 2026
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-white transition-colors leading-snug">
                  {t.degreeName}
                </h4>
                <p className="text-sm text-slate-300 font-medium mt-1">
                  {t.degreeLocation}
                </p>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {t.degreeDescription}
                </p>
              </div>

              {/* Pie de tarjeta */}
              <div className="mt-4 pt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs text-slate-500">
                <Code2 className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{t.degreeDetail}</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;