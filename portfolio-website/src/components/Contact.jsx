const Contact = () => {
	return (
		<section id="contact" className="mx-auto max-w-6xl px-6 py-24 text-slate-200">
			<div className="rounded-3xl border border-slate-800 bg-slate-900 px-8 py-10 md:px-12">
				<p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">Contact</p>
				<h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Hablemos de tu próximo proyecto.</h2>
				<p className="max-w-2xl text-lg leading-8 text-slate-400">
					Si quieres trabajar conmigo, escríbeme y cuéntame qué necesitas. Respondo por correo o por LinkedIn.
				</p>
				<a href="mailto:hello@example.com" className="mt-8 inline-flex rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700">
					Enviar correo
				</a>
			</div>
		</section>
	)
}

export default Contact
