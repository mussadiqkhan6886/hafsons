import SearchProperty from "@/components/SearchProperty";
import ServiceCard from "@/components/ServiceCard";
import Valuation from "@/components/Valuation";
import { services } from "@/constants";
import { instrumentSerif } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import About from "@/components/About";

export default function Home() {
  return (
    <main>
      <section className="h-dvh">
        <h1 className={`text-gray-800 w-[80%] absolute text-[50px] bg-main left-35 bottom-8 text-center ${instrumentSerif.className}`}>&apos;&apos;Your Real Estate Partner to help you sell, rent, buy and let.&apos;&apos;</h1>
        <Image priority fetchPriority="high" src={"/main.jpg"} width={1000} height={1000} alt="main hero image" className="w-full h-[90%]  object-center object-cover " />
      </section>
      <SearchProperty />
      <About />
      <section className="relative h-screen">
        <Image src={"/main2.jpg"} alt="main" width={1000} height={1000} className="w-full h-full object-cover object-center" />
        <div className="bg-main left-20 top-20 absolute text-center px-10 py-5 w-[50%] shadow-lg shadow-black/40 ">
          <h4 className={`text-4xl mb-2 ${instrumentSerif.className}`}>Request Your Free Valuation</h4>
          <p className="text-lg font-thin ">Our local experts will provide a free, no-obligation property valuation.</p>
          <Link href={"/"} className="text-font underline mt-2">Read More</Link>
        </div>
        <div className="bg-main right-20 bottom-20 absolute text-center px-10 py-5 w-[50%] shadow-lg shadow-black/40 ">
          <p className={`${instrumentSerif.className} text-4xl`}>50 years Experience, Business built on trust and integrity. Customized plans to fit your needs, Experts in local and international property.</p>
        </div>
      </section>
      <section className="relative min-h-screen bg-gradient-to-br from-white to-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h4
          className={`${instrumentSerif.className} text-3xl font-bold text-slate-900 sm:text-4xl`}
        >
          How can we Help You
        </h4>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>

      <Valuation />
    </main>
  );
}
