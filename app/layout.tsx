import type { Metadata } from "next";
import "./globals.css";
import { interTight } from "@/fonts/font";


export const metadata: Metadata = {
  title: "Hafsons | Best Real Estate Agency",
  description:
    "Hafsons have experience for 30+ years with over 500 happy clients. Sell, Rent, Let, or Buy your property here with our experienced team.",
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${interTight.className} antialiased`}>
        
        {children}
      </body>
    </html>
  );
}
