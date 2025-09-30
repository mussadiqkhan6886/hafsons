import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hafsons | Best Real Estate Agency",
  description: "Hafsons have experience for 30+years with over 500 happy clients, Sell, Rent, Let, or Buy your property in here with experience team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
