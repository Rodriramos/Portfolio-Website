import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
	const formRef = useRef();
	const [status, setStatus] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		setStatus('sending');

		emailjs.sendForm('service_9a0v8mj', 'template_9ii9bqj', formRef.current, 'BkHr3GVbshUi_zkCg')
			.then(() => {
				setStatus('success');
				formRef.current.reset();
			})
			.catch(() => setStatus('error'));
	};

	return (
		<section id="contact" className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24 text-slate-200">
			<div className="rounded-2xl sm:rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8 md:p-12">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">

					{/* Lado izquierdo */}
					<div>
						<p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">Contacto</p>
						<h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug">
							¿Quieres hablar?
						</h2>
						<p className="text-base sm:text-lg leading-7 sm:leading-8 text-slate-400 mb-6 sm:mb-8">
							Estoy abierto a nuevos retos y oportunidades. Puedes escribirme por aquí o conectar conmigo en mis perfiles profesionales.
						</p>

						<div className="flex flex-col gap-3 sm:gap-4">
							<a
								href="https://www.linkedin.com/in/rodrigoramosh"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
							>
								<img src="/linkedin_logo.png" alt="LinkedIn" className="w-5 h-5 sm:w-6 sm:h-6" />
								LinkedIn
							</a>
							<a
								href="https://github.com/Rodriramos"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
							>
								<img src="/github_logo.png" alt="GitHub" className="w-5 h-5 sm:w-6 sm:h-6" />
								GitHub
							</a>
						</div>
					</div>

					{/* Formulario */}
					<form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4">
						<input
							name="from_name"
							type="text"
							placeholder="Tu nombre"
							required
							className="rounded-lg bg-slate-800/50 border border-slate-700 px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:border-blue-500 focus:outline-none transition-all"
						/>
						<input
							name="from_email"
							type="email"
							placeholder="Tu correo"
							required
							className="rounded-lg bg-slate-800/50 border border-slate-700 px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:border-blue-500 focus:outline-none transition-all"
						/>
						<textarea
							name="message"
							placeholder="Tu mensaje"
							rows={4}
							required
							className="rounded-lg bg-slate-800/50 border border-slate-700 px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:border-blue-500 focus:outline-none resize-none transition-all"
						/>
						<button
							type="submit"
							disabled={status === 'sending'}
							className="rounded-lg bg-blue-600 px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-white hover:bg-blue-700 transition-all disabled:opacity-50"
						>
							{status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
						</button>

						{status === 'success' && (
							<p className="text-green-400 text-sm animate-pulse">¡Mensaje enviado con éxito!</p>
						)}
						{status === 'error' && (
							<p className="text-red-400 text-sm">Hubo un error. Intenta de nuevo.</p>
						)}
					</form>

				</div>
			</div>
		</section>
	);
};

export default Contact;