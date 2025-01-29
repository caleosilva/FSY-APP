import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

import { HomeIcon } from "@radix-ui/react-icons";
import { ClockIcon } from "@radix-ui/react-icons";
import { ListBulletIcon } from "@radix-ui/react-icons";
import { InfoCircledIcon } from "@radix-ui/react-icons";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Fsy 2025",
  description: "Desenvolvido por Caleo Silva",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" translate="no">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Conteúdo principal da página */}
        <div className="flex flex-col min-h-screen">
          <main className="flex-1">{children}</main>

          {/* Navbar fixa no rodapé */}
          <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white">
            <div className="flex justify-around items-center h-16">

              {/* Início */}
              <Link href="/" className="text-center flex flex-col items-center">
                <HomeIcon className="w-6 h-6 mb-1" />
                <p className="text-sm">Início</p>
              </Link>

              {/* Hoje */}
              <Link href="/hoje" className="text-center flex flex-col items-center">
                <ClockIcon className="w-6 h-6 mb-1" />
                <p className="text-sm">Hoje</p>
              </Link>

              {/* Dias */}
              <Link href="/dias" className="text-center flex flex-col items-center">
                <ListBulletIcon className="w-6 h-6 mb-1" />
                <p className="text-sm">Dias</p>
              </Link>

              {/* Sobre */}
              <Link href="/sobre" className="text-center flex flex-col items-center">
                <InfoCircledIcon className="w-6 h-6 mb-1" />
                <p className="text-sm">Sobre</p>
              </Link>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
