import type { Metadata } from "next";
import { Lato, Alumni_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"]
});

const alumniSans = Alumni_Sans({
  variable: "--font-alumni-sans",
  subsets: ["cyrillic"],
});


export const metadata: Metadata = {
  title: "Alchol Chemicals - Chemical Innovation for a Sustainable Future",
  description: "Nigeria’s Foremost Manufacturer of Chloro-alkali Chemicals and Green Sustainable Energy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} ${alumniSans.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
