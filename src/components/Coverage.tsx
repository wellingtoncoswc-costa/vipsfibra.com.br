import { useScrollReveal } from '../hooks/useScrollReveal'

const cities = [
  { name: 'Itabela', status: 'Disponível', type: 'Fibra Óptica' },
  { name: 'Barra Velha', status: 'Disponível', type: 'Fibra Óptica' },
  { name: 'Caraíva', status: 'Disponível', type: 'Fibra Óptica' },
  { name: 'Corumbau', status: 'Disponível', type: 'Fibra Óptica' },
  { name: 'Xandó', status: 'Disponível', type: 'Fibra Óptica' },
  { name: 'São João do Monte', status: 'Disponível', type: 'Fibra Óptica' },
  { name: 'São Geraldo', status: 'Disponível', type: 'Fibra Óptica' },
  { name: 'Zona Rural', status: 'Disponível', type: 'Internet Rural' },
]

const WA_COVERAGE = `https://wa.me/5573982297576?text=${encodeURIComponent('Olá! Quero verificar se minha rua/bairro tem cobertura da Vip\'s Fibra.')}`

export default function Coverage() {
  const titleRef = useScrollReveal()
  const listRef = useScrollReveal()

  return (
    <section id="cobertura" className="py-20 gradient-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #00D437 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div ref={titleRef as React.RefObject<HTMLDivElement>} className="section-reveal text-center mb-14">
          <span className="text-brand-green font-semibold text-sm uppercase tracking-widest">Cobertura</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-2 mb-4">
            Onde a Vip's Fibra chega
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Atendemos as principais cidades e comunidades do litoral sul da Bahia com fibra óptica de alta velocidade.
          </p>
        </div>

        <div ref={listRef as React.RefObject<HTMLDivElement>} className="section-reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {cities.map((city) => (
            <div
              key={city.name}
              className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-display font-semibold text-white">{city.name}</span>
                <span className="w-2.5 h-2.5 rounded-full bg-brand-green animate-pulse" />
              </div>
              <span className="text-brand-green text-xs font-medium">{city.status}</span>
              <p className="text-white/40 text-xs mt-0.5">{city.type}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-white/60 mb-4 text-sm">Não encontrou sua cidade? Consulte disponibilidade:</p>
          <a
            href={WA_COVERAGE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-brand-navy font-semibold px-7 py-3.5 rounded-full hover:bg-brand-cream transition-colors shadow-lg"
          >
            <svg className="w-5 h-5 fill-brand-green" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>
            Verificar minha área
          </a>
        </div>
      </div>
    </section>
  )
}
