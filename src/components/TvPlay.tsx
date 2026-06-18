import { useScrollReveal } from '../hooks/useScrollReveal'

const downloads = [
  {
    label: 'Android (Celular)',
    sublabel: 'APK direto — v5.9.0',
    href: 'https://play.vipsfibra.com.br/apks/app-mobile-v6-v5.9.0.apk',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.523 15.341l-.002.002L12 18.848l-5.521-3.505-.002-.002L1.004 12l5.473-3.341.002-.002L12 5.152l5.521 3.505.002.002L23 12l-5.477 3.341zM12 1L1 7.5v9L12 23l11-6.5v-9L12 1z"/>
      </svg>
    ),
    color: 'bg-green-600 hover:bg-green-700',
  },
  {
    label: 'Android TV / STB',
    sublabel: 'Para smart TVs e set-top boxes',
    href: 'https://play.vipsfibra.com.br/apks/app-stb-native-v6.apk',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: 'bg-brand-navy hover:bg-brand-navy-mid',
  },
  {
    label: 'iPhone / iPad',
    sublabel: 'App Store',
    href: 'https://apps.apple.com/br/app/vips-tv-play/id1633139451',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
      </svg>
    ),
    color: 'bg-gray-800 hover:bg-gray-900',
  },
  {
    label: 'Acessar no Navegador',
    sublabel: 'play.vipsfibra.com.br',
    href: 'https://play.vipsfibra.com.br/',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    color: 'bg-brand-green-dark hover:bg-brand-green-deeper',
  },
]

export default function TvPlay() {
  const titleRef = useScrollReveal()
  const contentRef = useScrollReveal()

  return (
    <section id="tvplay" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={titleRef as React.RefObject<HTMLDivElement>} className="section-reveal text-center mb-14">
          <span className="text-brand-green font-semibold text-sm uppercase tracking-widest">Entretenimento</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy mt-2 mb-4">
            Vip's TV Play
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Mais de 90 canais de TV ao vivo no celular, tablet, smart TV ou navegador. Incluso nos planos combo.
          </p>
        </div>

        <div ref={contentRef as React.RefObject<HTMLDivElement>} className="section-reveal">
          <div className="bg-gradient-to-br from-brand-navy to-brand-navy-mid rounded-3xl p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Left — info */}
              <div>
                <div className="inline-flex items-center gap-2 bg-brand-green/20 rounded-full px-4 py-1.5 mb-6">
                  <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                  <span className="text-brand-green text-sm font-medium">90+ canais ao vivo</span>
                </div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-4">
                  TV em qualquer tela,<br />em qualquer lugar
                </h3>
                <ul className="space-y-3 mb-8">
                  {['Canais ao vivo em alta definição', 'Disponível no celular, tablet e smart TV', 'Acesso via app ou navegador', 'Incluso nos planos combo Vip\'s'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/70 text-sm">
                      <svg className="w-4 h-4 text-brand-green shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right — download buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {downloads.map((d) => (
                  <a
                    key={d.label}
                    href={d.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${d.color} text-white rounded-xl p-4 flex items-center gap-3 transition-colors`}
                  >
                    <div className="shrink-0">{d.icon}</div>
                    <div>
                      <p className="font-semibold text-sm">{d.label}</p>
                      <p className="text-white/60 text-xs">{d.sublabel}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
