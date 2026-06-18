import { useScrollReveal } from '../hooks/useScrollReveal'

type Testimonial = { name: string; city: string; text: string; stars: number; avatar: string }

function TestimonialCard({ t, delay }: { t: Testimonial; delay: number }) {
  const ref = useScrollReveal()
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`section-reveal section-reveal-delay-${Math.min(delay, 4)} bg-brand-cream rounded-2xl p-7 flex flex-col`}
    >
      <div className="flex gap-1 mb-4">
        {Array.from({ length: t.stars }).map((_, j) => (
          <svg key={j} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5">"{t.text}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-brand-navy flex items-center justify-center shrink-0">
          <span className="text-brand-green font-bold text-xs">{t.avatar}</span>
        </div>
        <div>
          <p className="font-semibold text-brand-navy text-sm">{t.name}</p>
          <p className="text-gray-400 text-xs">{t.city}</p>
        </div>
      </div>
    </div>
  )
}

const testimonials = [
  {
    name: 'Carlos Mendes',
    city: 'Itabela, BA',
    text: 'Mudei para a Vip\'s Fibra há 8 meses e não tive nem uma queda. Trabalho de casa com videoconferências o dia todo e nunca travou.',
    stars: 5,
    avatar: 'CM',
  },
  {
    name: 'Ana Paula Rocha',
    city: 'Caraíva, BA',
    text: 'Aqui em Caraíva era difícil ter internet boa. A Vip\'s resolveu isso. Agora faço live, assisto séries e tudo funciona direitinho.',
    stars: 5,
    avatar: 'AP',
  },
  {
    name: 'Rafael Souza',
    city: 'Barra Velha, BA',
    text: 'Atendimento excelente e velocidade real. Contratei 500 Mbps e é isso que recebo. Recomendo para todo mundo da região.',
    stars: 5,
    avatar: 'RS',
  },
]

export default function Testimonials() {
  const titleRef = useScrollReveal()

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={titleRef as React.RefObject<HTMLDivElement>} className="section-reveal text-center mb-14">
          <span className="text-brand-green font-semibold text-sm uppercase tracking-widest">Depoimentos</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy mt-2 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Mais de 800 famílias e empresas no litoral sul da Bahia confiam na Vip's Fibra.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
