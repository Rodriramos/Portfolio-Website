import React from 'react';

const Home = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden flex items-center px-4 sm:px-6 pt-28 pb-10 bg-slate-950 text-white selection:bg-blue-500 selection:text-white"
    >
      {/* ---------- Fondo Dinámico y Neón ---------- */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />

        {/* Spotlights interactivos / Luces ambientales intensas */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-blue-600/20 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />
        <div className="absolute top-1/3 -right-20 w-112.5 h-112.5 bg-indigo-500/20 rounded-full blur-[130px] pointer-events-none animate-blob-a" />
        <div className="absolute -bottom-20 -left-20 w-125 h-125 bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none animate-blob-b" />

        {/* Grid de ingenieria con degradado viñeta (Fade out en los bordes) */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-size-4rem_4rem mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"
        />

        {/* Partículas / Estrellas brillantes */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(1.5px 1.5px at 20px 30px, #60a5fa 100%, transparent), radial-gradient(2px 2px at 150px 120px, #818cf8 100%, transparent), radial-gradient(1.5px 1.5px at 280px 70px, #38bdf8 100%, transparent), radial-gradient(2px 2px at 400px 200px, #818cf8 100%, transparent)",
            backgroundSize: "450px 260px",
            backgroundRepeat: "repeat",
          }}
        />

        <style>{`
          @keyframes blobA {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(-40px, 50px) scale(1.15); }
          }
          @keyframes blobB {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(50px, -40px) scale(1.1); }
          }
          @keyframes pulseSlow {
            0%, 100% { opacity: 0.15; transform: translate(-50%, -50%) scale(1); }
            50% { opacity: 0.35; transform: translate(-50%, -50%) scale(1.08); }
          }
          @keyframes floatChip {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-blob-a { animation: blobA 12s ease-in-out infinite; }
          .animate-blob-b { animation: blobB 15s ease-in-out infinite; }
          .animate-pulse-slow { animation: pulseSlow 8s ease-in-out infinite; }
          .animate-float-chip { animation: floatChip 4s ease-in-out infinite; }
          .animate-spin-slow { animation: spin 16s linear infinite; }
          @media (prefers-reduced-motion: reduce) {
            .animate-blob-a, .animate-blob-b, .animate-pulse-slow, .animate-float-chip, .animate-spin-slow {
              animation: none;
            }
          }
        `}</style>
      </div>

      {/* ---------- Contenido principal ---------- */}
      {/* ---------- Contenido principal (Más agrupado) ---------- */}
      <div className="w-full max-w-6xl mx-auto grid md:grid-cols-12 items-center gap-8 md:gap-12 z-10">

        {/* Columna izquierda: texto y CTA (Ocupa 7 columnas) */}
        <div className="md:col-span-7 text-center md:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3.5 py-1 text-xs font-medium text-emerald-300 mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(52,211,153,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            Disponible para trabajar
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            <span className="block text-white mb-2">
              Hola, soy Rodrigo Ramos
            </span>
            <span className="bg-linear-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
              Desarrollador Full-Stack &amp; Software Engineer
            </span>
          </h1>

          <p className="mt-5 text-lg sm:text-2xl text-slate-300 font-medium leading-snug">
            Transformando ideas en software mientras crezco como ingeniero.
          </p>

          <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-xl mx-auto md:mx-0">
            Ingeniero informático apasionado por el desarrollo de software,
            el análisis de datos y la automatización de procesos. Siempre buscando aprender
            nuevas tecnologías y crear soluciones a problemas reales.
          </p>

          {/* Ubicación actual */}
          <div className="mt-6 flex items-center justify-center md:justify-start gap-2 text-sm text-slate-400">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800/80 text-slate-300 backdrop-blur-sm shadow-sm">
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
              Santa Cruz de Tenerife, España <span className="text-base leading-none">🇪🇸</span>
            </span>
          </div>
        </div>

        {/* Columna derecha: foto (Ocupa 5 columnas y se centra) */}
        <div className="md:col-span-5 flex justify-center">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">

            {/* Anillo giratorio neón */}
            <div
              className="absolute -inset-3 rounded-full animate-spin-slow opacity-80"
              style={{
                background:
                  "conic-gradient(from 0deg, #60a5fa, #818cf8, transparent, #38bdf8, #60a5fa)",
                maskImage: "radial-gradient(farthest-side, transparent calc(100% - 3px), black calc(100% - 3px))",
                WebkitMaskImage: "radial-gradient(farthest-side, transparent calc(100% - 3px), black calc(100% - 3px))",
              }}
            />

            {/* Resplandor trasero */}
            <div className="absolute -inset-4 rounded-full bg-linear-to-r from-blue-600 to-indigo-600 opacity-30 blur-xl" />

            {/* Foto de perfil */}
            <img
              src="./profile.png"
              alt="Rodrigo Ramos Hernández"
              className="relative w-full h-full rounded-full object-cover border-4 border-slate-900 shadow-2xl"
            />

            {/* Floating Chip 1: Code */}
            <div className="hidden sm:flex absolute -left-5 top-8 items-center justify-center w-11 h-11 rounded-2xl border border-slate-700/80 bg-slate-900/90 backdrop-blur-md shadow-xl animate-float-chip">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="text-blue-400">
                <polyline points="4 17 10 11 4 5" />
                <line x1="12" y1="19" x2="20" y2="19" />
              </svg>
            </div>

            {/* Floating Chip 2: Analytics */}
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

            {/* Floating Badge: TFG */}
            <div className="absolute -bottom-3 -right-2 sm:-right-4 flex items-center gap-3 rounded-2xl border border-slate-700/80 bg-slate-900/90 backdrop-blur-md px-3.5 py-2.5 shadow-2xl">
              <div className="w-8 h-8 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 text-xs font-bold shrink-0">
                🚀
              </div>
              <div className="text-left">
                <p className="text-xs font-semibold text-slate-200">Estado actual</p>
                <p className="text-[10px] text-slate-400">Listo para nuevos retos</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;