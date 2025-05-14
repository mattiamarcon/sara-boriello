import Hero from "./components/Hero";
import { CarouselDemo } from "./components/CarouselServizi";
import ChiSono from "./components/ChiSono";
import Contattami from "./components/Contattami";
import CardStackSection from "./components/card-stack-section";

export default function Home() {
  return (
    <>
      <Hero />
      <ChiSono />
      <div className="mx-auto bg-gray-50 pt-10">
        <h1 className="text-4xl md:text-5xl font-bold text-first text-center">I Nostri Servizi</h1>
        <CarouselDemo />
      </div>
      <CardStackSection />
      <Contattami />
    </>
  );
}
