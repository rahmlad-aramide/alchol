import Hero from "@/components/hero";
import Partners from "@/components/partners";
import Products from "@/components/products";
import SustainableEnergy from "@/components/sustainable-energy";
import WhyAlchol from "@/components/why-alchol";

export default function Home() {
  return (
    <main className="flex flex-col font-(family-name:--font-lato)">
      <Hero />
      <Partners />
      <WhyAlchol />
      <Products />
      <SustainableEnergy />
    </main>
  );
}
