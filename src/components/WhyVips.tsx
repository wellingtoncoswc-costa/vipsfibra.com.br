import { useScrollReveal } from '../hooks/useScrollReveal'

type Feature = { icon: React.ReactNode; title: string; desc: string }

function FeatureCard({ feature: f, delay }: { feature: Feature; delay: number }) {
  const ref = useScrollReveal()
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`section-reveal section-reveal-delay-${Math.min(delay, 4)} text-center group`}
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-navy text-brand-green mb-5 group-hover:scale-110 transition-transform shadow-lg shadow-brand-navy/20">
        {f.icon}
      </div>
      <h3 className="font-display font-bold text-lg text-brand-navy mb-2">{f.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
    </div>
  )
}

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Velocidade Real',
    desc: 'Fibra óptica 100% dedicada. A velocidade que você contrata chega na sua casa — sem compartilhamento excessivo.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Estabilidade 99%',
    desc: 'Infraestrutura robusta com uptime de 99%. Jogos, reuniões, streaming — sem quedas no momento que mais importa.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Suporte Local',
    desc: 'Time técnico presente na região. Atendimento humano, rápido e que conhece a sua cidade.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Planos Acessíveis',
    desc: 'Do plano SMART ao GIGA, temos opções para cada bolso. Sem taxas de instalação escondidas.',
  },
]

export default function WhyVips() {
  const titleRef = useScrollReveal()

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={titleRef as React.RefObject<HTMLDivElement>} className="section-reveal text-center mb-14">
          <span className="text-brand-green font-semibold text-sm uppercase tracking-widest">Por que Vip's Fibra</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy mt-2 mb-4">
            Internet de confiança, de verdade
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Somos o provedor que mais cresce no litoral sul da Bahia porque entregamos o que prometemos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
