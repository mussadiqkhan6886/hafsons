import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({ title, link, image }: {title: string, link: string, image: string}) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl flex flex-col">
      <Link href={link} className="block text-center">
        <Image src={image} alt={title} width={100} height={100} className="w-full h-[200px] mb-2 rounded" />
        <h3 className="text-lg uppercase font-semibold text-slate-800 group-hover:text-black">
          {title}
        </h3>
      </Link>
    </div>
  );
}
