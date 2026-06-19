import { useScrollReveal } from '../hooks/useScrollReveal'

const WA_BASE = 'https://wa.me/5573982297576?text='

const plans = [
  {
    name: 'SMART',
    speed: 150,
    price: 69.9,
    features: ['150 Mbps de velocidade', 'Wi-Fi incluso', '90 canais de TV', 'Atendimento humanizado'],
    popular: false,
    color: 'from-slate-600 to-slate-700',
  },
  {
    name: 'LIGHT',
    speed: 400,
    price: 89.9,
    features: ['400 Mbps de velocidade', 'Wi-Fi 5 incluso', '90 canais de TV', 'Atendimento humanizado'],
    popular: false,
    color: 'from-blue-700 to-brand-navy-mid',
  },
  {
    name: 'PLUS',
    speed: 500,
    price: 99.9,
    promo: 'R$59,90 por 3 meses',
    features: ['500 Mbps de velocidade', 'Wi-Fi 5 incluso', '90 canais de TV', 'Atendimento humanizado'],
    popular: true,
    color: 'from-brand-navy to-brand-navy-mid',
  },
  {
    name: 'FLASH',
    speed: 600,
    price: 109.9,
    features: ['600 Mbps de velocidade', 'Wi-Fi 6 incluso', '90 canais de TV', 'Suporte prioritário'],
    popular: false,
    color: 'from-brand-navy to-brand-navy-light',
  },
  {
    name: 'TURBO',
    speed: 800,
    price: 119.9,
    features: ['800 Mbps de velocidade', 'Wi-Fi 6 incluso', '90 canais de TV', 'Suporte prioritário'],
    popular: false,
    color: 'from-green-900 to-brand-green-deeper',
  },
  {
    name: 'GIGA',
    speed: 1000,
    price: 169.9,
    features: ['Velocidade Giga', 'Wi-Fi 6 Pro incluso', '90 canais de TV', 'Suporte VIP'],
    popular: false,
    color: 'from-brand-green-deeper to-brand-green-dark',
  },
]

function PlanCard({ plan, index }: { plan: typeof plans[0]; index: number }) {
  const waMsg = encodeURIComponent(
    `Olá! Quero assinar o plano ${plan.name} de ${plan.speed >= 1000 ? '1 Giga' : plan.speed + ' Mbps'} por R$${plan.price.toFixed(2).replace('.', ',')}/mês.`
  )
  const ref = useScrollReveal()

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`section-reveal section-reveal-delay-${Math.min(index + 1, 4)} relative`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <span className="gradient-green text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-brand-green/40 whitespace-nowrap">
            ⚡ Mais Popular
          </span>
        </div>
      )}

      <div
        className={`rounded-2xl overflow-hidden card-hover h-full flex flex-col ${
          plan.popular ? 'ring-2 ring-brand-green shadow-xl shadow-brand-green/20' : 'shadow-lg'
        }`}
      >
        {/* Card header */}
        <div className={`bg-gradient-to-br ${plan.color} p-6 text-white`}>
          <div className="flex items-center justify-between mb-3">
            <span className="font-display font-bold text-lg tracking-wide">{plan.name}</span>
            {plan.promo && (
              <span className="bg-brand-green/20 border border-brand-green/40 text-brand-green text-xs px-2 py-1 rounded-full">
                Promoção
              </span>
            )}
          </div>
          <div className="flex items-end gap-1 mb-1">
            <span className="text-white/60 text-sm">até</span>
            <span className="font-display font-bold text-5xl leading-none">
              {plan.speed >= 1000 ? '1G' : plan.speed}
            </span>
            <span className="text-white/70 text-sm mb-1">{plan.speed >= 1000 ? '' : 'Mbps'}</span>
          </div>
          {plan.promo && (
            <p className="text-brand-green text-xs font-medium mt-1">{plan.promo}</p>
          )}
        </div>

        {/* Card body */}
        <div className="bg-white flex-1 p-6 flex flex-col">
          <div className="mb-1">
            <span className="text-brand-navy/50 text-sm">a partir de</span>
            <div className="flex items-baseline gap-1">
              <span className="text-brand-navy font-display text-sm font-semibold">R$</span>
              <span className="font-display font-bold text-3xl text-brand-navy">
                {plan.price.toFixed(2).replace('.', ',')}
              </span>
              <span className="text-brand-navy/50 text-sm">/mês</span>
            </div>
          </div>

          <p className="text-xs text-gray-400 mb-3">
            Preço promocional. Normal:{' '}
            <span className="font-medium text-gray-500">
              R${(plan.price + 5).toFixed(2).replace('.', ',')}/mês
            </span>
          </p>

          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
            <span className="text-gray-400 text-xs">Inclui:</span>
            <img src="/logoDigiLivro.png" alt="DigiLivro" className="h-6 w-auto" />
          </div>

          <ul className="space-y-2.5 mb-6 flex-1">
            {plan.features.map((f) => (
              <li key={f} className="flex items-center gap-2.5 text-sm text-gray-600">
                <svg className="w-4 h-4 text-brand-green shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {f}
              </li>
            ))}
          </ul>

          <a
            href={`${WA_BASE}${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full py-3 rounded-xl font-semibold text-sm text-center transition-all flex items-center justify-center gap-2 ${
              plan.popular
                ? 'gradient-green text-white shadow-lg shadow-brand-green/30 hover:opacity-90'
                : 'bg-brand-navy text-white hover:bg-brand-navy-mid'
            }`}
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>
            Assine Já
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Plans() {
  const titleRef = useScrollReveal()

  return (
    <section id="planos" className="py-20 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={titleRef as React.RefObject<HTMLDivElement>} className="section-reveal text-center mb-14">
          <span className="text-brand-green font-semibold text-sm uppercase tracking-widest">Planos</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy mt-2 mb-4">
            Planos para todos os gostos
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Escolha o plano ideal para sua casa ou empresa. Todos incluem Wi-Fi, canais de TV e suporte técnico.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan, i) => (
            <PlanCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-8">
          * Preços sujeitos a alteração. Consulte disponibilidade na sua área.
        </p>
      </div>
    </section>
  )
}
