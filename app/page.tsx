import ServiceCard from "@/components/ServiceCard";
import { services } from "@/constants";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="h-dvh sticky top-0">
        <h1 className="text-white font-black absolute text-[100px] top-40">BEST REAL ESTATE AGENCY IN UK ENGLAND</h1>
        <Image src={"/main.jpg"} width={1000} height={1000} alt="main hero image" className="w-full h-full  object-bottom object-cover" />
      </section>
      <section className="sticky top-0 py-10 h-full bg-white">
        <h2 className="font-bold text-3xl text-center">Services</h2>
        <div className="flex justify-center mt-2 gap-20">
        {services.map(service => (
          <ServiceCard key={service.title} {...service} />
        ))}
        </div>
      </section>
      <section className="sticky top-0 py-10 h-full bg-white/50" />
      <section className="sticky top-0 py-10 h-full bg-white">
        <h3>Free valuation</h3>
        <p>Get a free valuation now</p>
        <button>Free Valuation</button>
      </section>
    </main>
  );
}
