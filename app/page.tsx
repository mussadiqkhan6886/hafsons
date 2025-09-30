import Feature from "@/components/Feature";
import SearchProperty from "@/components/SearchProperty";
import ServiceCard from "@/components/ServiceCard";
import Valuation from "@/components/Valuation";
import { services } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="h-dvh">
        <h1 className="text-gray-800  font-bold  absolute text-[50px] px-50 -bottom-0 text-center">&apos;&apos;Your Real Estate Partner to help you sell, rent, buy and let.&apos;&apos;</h1>
        <Image priority fetchPriority="high" src={"/main.jpg"} width={1000} height={1000} alt="main hero image" className="w-full h-[80%]  object-center object-cover " />
      </section>
      <SearchProperty />
      {/* <section className="sticky top-0 py-10 h-full bg-white">
        <h2 className="font-bold text-3xl text-center">Services</h2>
        <div className="flex justify-center mt-2 gap-20">
        {services.map(service => (
          <ServiceCard key={service.title} {...service} />
        ))}
        </div>
      </section> */}
      <section className="pt-10 sticky top-0 min-h-screen bg-main flex flex-col gap-5 px-20 ">
        <h3 className="text-center text-3xl font-semibold">ABOUT US</h3>
        <div className="flex gap-6 h-full">
          <p className="flex-1 font-thin text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur cumque asperiores repudiandae odit eum, tenetur suscipit dolor, qui sequi provident, dolorem facere! Blanditiis eveniet neque animi nisi quo asperiores cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam beatae corrupti, harum, quod perspiciatis officiis dolore, cupiditate aliquid quo dolor id voluptates iusto. Iure odio doloremque voluptas, quos voluptatem quisquam!t dolor, qui sequi provident, dolorem facere! Blanditiis eveniet neque animi nisi quo asperiores cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam beatae corrupti, harum, quod perspiciatis officiis dolore, cupiditate aliquid quo dolor id voluptates iusto. Iure odio doloremque voluptas, quos voluptatem quisquam!t dolor, qui sequi provident, dolorem facere! Blanditiis eveniet neque animi nisi quo asperiores cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam beatae corrupti, harum, quod perspiciatis officiis dolore, cupiditate aliquid quo dolor id voluptates iusto. Iure odio doloremque voluptas, quos voluptatem quisquam!t dolor, qui sequi provident, </p>
          <Image src={"/main2.jpg"} alt="about image" className="h-[350px] w-full flex-1  object-cover object-center" width={500} height={500} />
        </div>
      </section>
      <section className="sticky top-0 h-screen">
        <Image src={"/main2.jpg"} alt="main" width={1000} height={1000} className="w-full h-full object-cover object-center" />
        <div className="bg-main left-20 top-20 absolute text-center px-10 py-5 w-[50%] shadow-lg shadow-black/40 ">
          <h4 className="text-2xl font-bold mb-2">Request Your Free Valuation</h4>
          <p className="text-lg font-thin ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores labore maiores alias velit consequuntur quaerat quam quidem esse tenetur, maxime ipsa minima eaque ut natus aliquid laudantium tempora expedita animi!</p>
          <Link href={"/"} className="text-font underline mt-2">Read More</Link>
        </div>
      </section>
      <section className="pt-10 flex sticky top-0 bg-main min-h-screen flex-col gap-5 px-20 ">
        <h3 className="text-center text-3xl font-semibold">The Experts in local and International Property</h3>
        <h4 className="font-thin text-2xl ">We are Experts</h4>
        <div className="flex gap-6 h-full">
          <Image src={"/main2.jpg"} alt="about image" className="h-[350px] w-full flex-1  object-cover object-center" width={500} height={500} />
          <p className="flex-1 font-thin text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur cumque asperiores repudiandae odit eum, tenetur suscipit dolor, qui sequi provident, dolorem facere! Blanditiis eveniet neque animi nisi quo asperiores cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam beatae corrupti, harum, quod perspiciatis officiis dolore, cupiditate aliquid quo dolor id voluptates iusto. Iure odio doloremque voluptas, quos voluptatem quisquam!t dolor, qui sequi provident, dolorem facere! Blanditiis eveniet neque animi nisi quo asperiores cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam beatae corrupti, harum, quod perspiciatis officiis dolore, cupiditate aliquid quo dolor id voluptates iusto. Iure odio doloremque voluptas, quos voluptatem quisquam!t dolor, qui sequi provident, dolorem facere! Blanditiis eveniet neque animi nisi quo asperiores cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam beatae corrupti, harum, quod perspiciatis officiis dolore, cupiditate aliquid quo dolor id voluptates iusto. Iure odio doloremque voluptas, quos voluptatem quisquam!t dolor, qui sequi provident, </p>
        </div>
      </section>
      <Feature />
      <Valuation />
    </main>
  );
}
