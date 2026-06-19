import { useCounter } from '../hooks/useScrollReveal'

const WA_LINK = `https://wa.me/5573982297576?text=Olá!%20Gostaria%20de%20conhecer%20os%20planos%20Vip's%20Fibra.`

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useCounter(value)
  return (
    <div className="text-center">
      <div className="font-display font-bold text-3xl sm:text-4xl text-white">
        <span ref={ref}>0</span>
        <span className="text-brand-green">{suffix}</span>
      </div>
      <p className="text-white/60 text-sm mt-1">{label}</p>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="gradient-hero min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Background decoration — abstract fiber wave */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute right-0 top-1/4 w-[60vw] max-w-2xl opacity-10"
          viewBox="0 0 600 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 200 Q150 50 300 200 T600 200" stroke="#00D437" strokeWidth="2" fill="none" />
          <path d="M0 220 Q150 70 300 220 T600 220" stroke="#00D437" strokeWidth="1.5" fill="none" />
          <path d="M0 240 Q150 90 300 240 T600 240" stroke="#00D437" strokeWidth="1" fill="none" />
          <path d="M0 180 Q150 30 300 180 T600 180" stroke="#2A4E9A" strokeWidth="2" fill="none" />
          <path d="M0 160 Q150 10 300 160 T600 160" stroke="#2A4E9A" strokeWidth="1.5" fill="none" />
          <circle cx="300" cy="200" r="80" stroke="#00D437" strokeWidth="0.5" fill="none" opacity="0.5" />
          <circle cx="300" cy="200" r="140" stroke="#00D437" strokeWidth="0.5" fill="none" opacity="0.3" />
          <circle cx="300" cy="200" r="200" stroke="#00D437" strokeWidth="0.5" fill="none" opacity="0.2" />
        </svg>

        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle, #00D437 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-16 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
            <span className="text-brand-green text-sm font-medium">Fibra Óptica 100% Dedicada</span>
          </div>

          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
            A internet que o{' '}
            <span className="text-gradient-green">litoral baiano</span>{' '}
            merecia
          </h1>

          <p className="text-white/70 text-lg sm:text-xl mb-8 max-w-xl leading-relaxed">
            Velocidade real, estabilidade de verdade. De Itabela à Caraíva, levamos fibra óptica onde você está.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#planos"
              className="gradient-green text-white font-semibold px-8 py-4 rounded-full text-center text-lg shadow-xl shadow-brand-green/30 hover:opacity-90 transition-opacity"
            >
              Ver Planos
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 text-white font-semibold px-8 py-4 rounded-full text-center text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              Falar no WhatsApp
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
          <StatCounter value={5} suffix="★" label="Avaliação dos clientes" />
          <StatCounter value={3} suffix="+" label="Cidades atendidas" />
          <StatCounter value={99} suffix="%" label="Uptime garantido" />
          <StatCounter value={5} suffix="+" label="Anos de mercado" />
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 80L1440 80L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 80Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
