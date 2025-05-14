"use client"

import Carousel from "@/components/ui/carousel"

export function CarouselDemo() {
  const slideData = [
    {
      title: "Personal Training",
      button: "Scopri di Più",
      src: "/hero.jpeg",
      description:
        "Il personal training è un servizio di allenamento personalizzato che ti permette di raggiungere i tuoi obiettivi di fitness con l'aiuto di un trainer dedicato. Le sessioni sono progettate specificamente per te, tenendo conto delle tue esigenze, del tuo livello di fitness e dei tuoi obiettivi. Offriamo sessioni individuali a 35€, in coppia a 45€ o in piccoli gruppi di tre persone a 50€. È disponibile anche un pacchetto di 10 sedute a 320€, da utilizzare entro 3 mesi dall'inizio.",
    },
    {
      title: "Allenamento EMS",
      button: "Scopri i Benefici",
      src: "/manubrio.jpg",
      description:
        "L'allenamento EMS (Electrical Muscle Stimulation) utilizza una speciale tutina che stimola elettricamente i muscoli durante l'esercizio. Questo metodo innovativo ti permette di ottenere risultati equivalenti a un'ora di allenamento tradizionale in soli 30-35 minuti. Il costo è di 45€ a seduta, e con il primo pacchetto di 10 sedute riceverai una seduta in omaggio. L'EMS è particolarmente efficace per la tonificazione muscolare, il recupero da infortuni e per chi ha poco tempo a disposizione.",
    },
    {
      title: "Schede Personalizzate",
      button: "Richiedi Info",
      src: "/training1.jpeg",
      description:
        "Le schede di allenamento personalizzate sono programmi creati su misura che puoi seguire autonomamente a casa o in palestra. Ogni scheda è progettata in base alle tue esigenze specifiche e ai materiali a tua disposizione, con una durata di 1-2 mesi. Il costo iniziale è di 80€ per la creazione della scheda, mentre i rinnovi successivi costano 40€. Questo servizio è ideale per chi preferisce allenarsi in autonomia ma desidera comunque un programma professionale e strutturato.",
    },
    {
      title: "Online Training",
      button: "Inizia Ora",
      src: "/training2.jpeg",
      description:
        "L'online training ti permette di allenarti comodamente da casa tua con la guida di un personal trainer professionista tramite videochiamata. Ogni sessione costa 35€ e ti offre feedback in tempo reale, correzioni sulla tecnica e motivazione costante. Questo servizio è perfetto per chi non può recarsi in studio ma desidera comunque un allenamento guidato e personalizzato. Gli orari sono flessibili e l'allenamento può essere adattato agli spazi e all'attrezzatura che hai a disposizione.",
    },
  ]

  return (
    <div id="servizi" className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  )
}

