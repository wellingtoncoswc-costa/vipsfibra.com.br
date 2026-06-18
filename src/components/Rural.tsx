import { useScrollReveal } from '../hooks/useScrollReveal'

const WA_RURAL = `https://wa.me/5573982297576?text=${encodeURIComponent('Olá! Tenho interesse na internet rural da Vip\'s Fibra. Pode me dar mais informações?')}`

export default function Rural() {
  const ref = useScrollReveal()

  return (
    <section className="py-20 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="section-reveal bg-white rounded-3xl overflow-hidden shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image side */}
            <div className="relative h-64 lg:h-auto min-h-64 bg-brand-navy-mid overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&auto=format&fit=crop"
                alt="Zona rural da Bahia"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/80 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center lg:justify-start lg:pl-10">
                <div>
                  <div className="inline-flex items-center gap-2 bg-brand-green/20 border border-brand-green/40 rounded-full px-4 py-1.5 mb-4">
                    <span className="text-brand-green text-sm font-medium">🌿 Zona Rural</span>
                  </div>
                  <p className="text-white font-display font-bold text-2xl">Internet onde<br />a fibra não chega</p>
                </div>
              </div>
            </div>

            {/* Content side */}
            <div className="p-8 sm:p-10 flex flex-col justify-center">
              <span className="text-brand-green font-semibold text-sm uppercase tracking-widest mb-2">Internet Rural</span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-navy mb-4">
                Conectividade para quem vive no campo
              </h2>
              <p className="text-gray-500 mb-6 leading-relaxed">
                Com tecnologia de rádio de alta performance, levamos internet de qualidade para regiões onde a fibra ainda não chegou. Fazendas, sítios, comunidades rurais — a Vip's Fibra conecta o campo.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  'Tecnologia wireless ponto-a-ponto',
                  'Velocidades de 30 a 200 Mbps',
                  'Instalação técnica especializada',
                  'Suporte remoto e presencial',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-brand-green shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={WA_RURAL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-navy text-white font-semibold px-7 py-3.5 rounded-full hover:bg-brand-navy-mid transition-colors self-start"
              >
                Consultar disponibilidade
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
