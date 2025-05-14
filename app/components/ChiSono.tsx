import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function ChiSono() {
  const benefits = [
    "Programmi di allenamento personalizzati",
    "Attenzione individuale e supporto costante",
    "Tecniche avanzate di allenamento",
    "Monitoraggio dei progressi",
    "Approccio olistico al benessere",
    "Ambiente motivante e professionale",
  ]

  return (
    <section id="chi-sono" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image src="/manubrio.jpg" alt="Personal Trainer" fill className="object-cover" />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-first mb-6">Chi Sono</h2>
            <p className="text-lg text-gray-700 mb-6">
              Sono Sara, personal trainer certificata con anni di esperienza nel settore del fitness e del benessere. La
              mia missione è aiutare le persone a trasformare il loro corpo e la loro vita attraverso l&apos;allenamento
              personalizzato e un approccio olistico al benessere.
            </p>
            <p className="text-lg text-gray-700  mb-8">
              Ho lavorato con clienti di tutte le età e livelli di fitness, aiutandoli a raggiungere i loro obiettivi
              personali, che si tratti di perdita di peso, tonificazione muscolare, miglioramento della performance
              sportiva o semplicemente di uno stile di vita più sano e attivo.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-first mt-1 flex-shrink-0" />
                  <span className="text-gray-700 ">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
