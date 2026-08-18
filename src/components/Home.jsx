import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

const Home = () => {
  const { language } = useLanguage();
  const t = translations[language].home;

  return (
    <section
      id="home"
      className="relative flex items-center px-4 sm:px-6 pt-28 pb-10 mt-4 md:mt-20 text-white selection:bg-blue-500 selection:text-white"
    >
      <style>{`
        @keyframes floatChip {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-chip { animation: floatChip 4s ease-in-out infinite; }
        .animate-spin-slow { animation: spin 16s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .animate-float-chip, .animate-spin-slow { animation: none; }
        }
      `}</style>

      <div className="w-full max-w-6xl mx-auto grid md:grid-cols-12 items-center gap-8 md:gap-12 z-10">

        <div className="md:col-span-7 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            <span className="block text-white mb-2">{t.greeting}</span>
            <span className="bg-linear-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
              {t.role}
            </span>
          </h1>

          <p className="mt-5 text-lg sm:text-2xl text-slate-300 font-medium leading-snug">
            {t.subtitle}
          </p>

          <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-xl mx-auto md:mx-0">
            {t.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-3 text-sm text-slate-400">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800/80 text-slate-300 backdrop-blur-sm shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-400"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {t.location} <span className="text-base leading-none">🇪🇸</span>
            </span>

            <a
              href="https://www.linkedin.com/in/rodrigoramosh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800/80 text-slate-300 hover:text-white hover:border-slate-700 hover:bg-slate-800/80 transition-all backdrop-blur-sm shadow-sm group"
            >
              <svg className="w-4 h-4 fill-current text-slate-400 group-hover:text-blue-400 transition-colors" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.239-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/Rodriramos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800/80 text-slate-300 hover:text-white hover:border-slate-700 hover:bg-slate-800/80 transition-all backdrop-blur-sm shadow-sm group"
            >
              <svg className="w-4 h-4 fill-current text-slate-400 group-hover:text-white transition-colors" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </a>
          </div>
        </div>

        <div className="md:col-span-5 flex justify-center">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
            <div
              className="absolute -inset-3 rounded-full animate-spin-slow opacity-80"
              style={{
                background:
                  "conic-gradient(from 0deg, #60a5fa, #818cf8, transparent, #38bdf8, #60a5fa)",
                maskImage: "radial-gradient(farthest-side, transparent calc(100% - 3px), black calc(100% - 3px))",
                WebkitMaskImage: "radial-gradient(farthest-side, transparent calc(100% - 3px), black calc(100% - 3px))",
              }}
            />
            <div className="absolute -inset-4 rounded-full bg-linear-to-r from-blue-600 to-indigo-600 opacity-30 blur-xl" />

            <img
              src="/Foto perfil.png"
              alt="Rodrigo Ramos Hernández"
              className="relative w-full h-full rounded-full object-cover border-4 border-slate-900 shadow-2xl"
            />

            <div className="hidden sm:flex absolute -left-5 top-8 items-center justify-center w-11 h-11 rounded-2xl border border-slate-700/80 bg-slate-900/90 backdrop-blur-md shadow-xl animate-float-chip">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="text-blue-400">
                <polyline points="4 17 10 11 4 5" />
                <line x1="12" y1="19" x2="20" y2="19" />
              </svg>
            </div>

            <div
              className="hidden sm:flex absolute -right-5 top-16 items-center justify-center w-11 h-11 rounded-2xl border border-slate-700/80 bg-slate-900/90 backdrop-blur-md shadow-xl animate-float-chip"
              style={{ animationDelay: "1.5s" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="text-indigo-400">
                <path d="M3 3v18h18" />
                <path d="M7.5 17v-4.5" />
                <path d="M12.5 17V8" />
                <path d="M17.5 17v-8.5" />
              </svg>
            </div>

            <div className="absolute -bottom-3 -right-2 sm:-right-4 flex items-center gap-3 rounded-2xl border border-slate-700/80 bg-slate-900/90 backdrop-blur-md px-3.5 py-2.5 shadow-2xl">
              <div className="w-8 h-8 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 text-xs font-bold shrink-0">
                🟢
              </div>
              <div className="text-left">
                <p className="text-xs font-semibold text-slate-200">{t.statusTitle}</p>
                <p className="text-[10px] text-slate-400">{t.statusSubtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;