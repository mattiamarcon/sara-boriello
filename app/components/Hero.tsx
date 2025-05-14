import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpeg"
          alt="Personal Training"
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20 pt-32">
        <div className="max-w-2xl bg-white/70 md:bg-white/80  backdrop-blur-sm p-8 rounded-lg">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-second mb-4">
            Trasforma il tuo corpo, <br />
            <span className="text-first">cambia la tua vita</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-black">
            Allenamenti personalizzati per raggiungere i tuoi obiettivi con un approccio professionale e su misura.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-base text-white bg-first">
              <Link href="#contatti">Prenota una Sessione</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base">
              <Link href="#servizi">Scopri i Servizi</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
