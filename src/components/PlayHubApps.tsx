import { useScrollReveal } from '../hooks/useScrollReveal'

const WA_LINK = `https://wa.me/5573982297576?text=${encodeURIComponent("Olá! Quero saber mais sobre os apps e serviços disponíveis no meu plano Vip's Fibra.")}`

const FEATURED_APPS = [
  { name: 'Disney+',   icon: '/apps/disney.png',    rounded: true },
  { name: 'Max',       icon: '/apps/max.png',        rounded: true },
  { name: 'Globoplay', icon: '/apps/globoplay.png',  rounded: true },
  { name: 'Apple TV+', icon: '/apps/appletv.png',    rounded: false },
  { name: 'Kaspersky', icon: '/apps/kaspersky.png',  rounded: true },
  { name: 'PlayKids',  icon: '/apps/playkids.png',   rounded: false },
]

const CATEGORIES = [
  '🎬 Streaming',
  '🎵 Música',
  '👶 Infantil',
  '📚 Leitura',
  '❤️ Saúde',
  '🎮 Games',
  '🛡️ Segurança',
  '🌐 Lifestyle',
]

export default function PlayHubApps() {
  const titleRef = useScrollReveal()
  const gridRef = useScrollReveal()
  const ctaRef = useScrollReveal()

  return (
    <section id="apps" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className="section-reveal text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <img src="/apps/playhub-logo.png" alt="PlayHub" className="h-5 w-auto" />
            <span className="text-brand-green font-semibold text-sm uppercase tracking-widest">
              Plataforma PlayHub
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy mb-4">
            +40 apps e serviços inclusos
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Assinantes Vip's Fibra têm acesso exclusivo à plataforma PlayHub — streaming, música, saúde, segurança e muito mais num só lugar.
          </p>
        </div>

        {/* App icons */}
        <div
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className="section-reveal flex flex-wrap justify-center gap-6 sm:gap-8 mb-10"
        >
          {FEATURED_APPS.map((app) => (
            <div key={app.name} className="flex flex-col items-center gap-2">
              <div
                className={`w-16 h-16 sm:w-20 sm:h-20 overflow-hidden shadow-lg border border-black/5 ${
                  app.rounded ? 'rounded-2xl' : 'rounded-xl bg-white'
                }`}
              >
                <img
                  src={app.icon}
                  alt={app.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xs text-gray-500 font-medium">{app.name}</span>
            </div>
          ))}

          {/* More tile */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl gradient-navy flex items-center justify-center shadow-lg">
              <span className="text-brand-green font-display font-bold text-lg leading-none text-center">
                +35<br />
                <span className="text-white/60 text-xs font-normal">apps</span>
              </span>
            </div>
            <span className="text-xs text-gray-500 font-medium">e muito mais</span>
          </div>
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {CATEGORIES.map((cat) => (
            <span
              key={cat}
              className="bg-brand-cream text-brand-navy text-xs font-medium px-3 py-1.5 rounded-full border border-brand-navy/10"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* CTA banner */}
        <div
          ref={ctaRef as React.RefObject<HTMLDivElement>}
          className="section-reveal bg-gradient-to-r from-brand-navy to-brand-navy-mid rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5"
        >
          <div>
            <p className="font-display font-bold text-white text-xl mb-1">
              Quer saber quais apps estão no seu plano?
            </p>
            <p className="text-white/60 text-sm">
              Consulte disponibilidade e condições com nosso time via WhatsApp.
            </p>
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 gradient-green text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-brand-green/30 whitespace-nowrap flex items-center gap-2"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>
            Consultar agora
          </a>
        </div>

        <p className="text-center text-xs text-gray-400 mt-4">
          * Apps disponíveis mediante contratação. Condições e disponibilidade sujeitas ao plano contratado. Preços sob consulta.
        </p>
      </div>
    </section>
  )
}
